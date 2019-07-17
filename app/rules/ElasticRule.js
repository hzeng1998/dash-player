var ElasticRule;

function ElasticRuleClass() {
  let factory = dashjs.FactoryMaker;
  let SwitchRequest = factory.getClassFactoryByName("SwitchRequest");
  let MetricsModel = factory.getSingletonFactoryByName("MetricsModel");
  let DashMetrics = factory.getSingletonFactoryByName("DashMetrics");
  let DashManifestModel = factory.getSingletonFactoryByName(
    "DashManifestModel"
  );
  let StreamController = factory.getSingletonFactoryByName("StreamController");

  let context = this.context;
  let instance;

  function setup() {}

  function getBytesLength(request) {
    return request.trace.reduce((a, b) => a + b.b[0], 0);
  }

  function getMaxIndex(rulesContext) {
    let mediaType = rulesContext.getMediaInfo().type;
    if (mediaType === "audio") {
      return SwitchRequest(context).create();
    }
    let metricsModel = MetricsModel(context).getInstance();
    let dashMetrics = DashMetrics(context).getInstance();
    let dashManifest = DashManifestModel(context).getInstance();
    let metrics = metricsModel.getReadOnlyMetricsFor(mediaType);
    let streamController = StreamController(context).getInstance();
    let abrController = rulesContext.getAbrController();
    let current = abrController.getQualityFor(
      mediaType,
      streamController.getActiveStreamInfo()
    );

    let requests = dashMetrics.getHttpRequests(metrics),
      lastRequest = null,
      currentRequest = null,
      downloadTime,
      totalTime,
      calculatedBandwidth,
      currentBandwidth,
      latencyInBandwidth,
      switchUpRatioSafetyFactor,
      currentRepresentation,
      count,
      receiveRate = 0,
      isPlaying = 0,
      queueLength = 0,
      quantize = [700, 1000, 2000, 4000],
      qI = 0,
      qT = ElasticRuleClass.qT,
      kp = ElasticRuleClass.kp,
      ki = ElasticRuleClass.ki,
      level,
      i,
      q = SwitchRequest.NO_CHANGE,
      p = SwitchRequest.PRIORITY.DEFAULT,
      totalBytesLength = 0;

    latencyInBandwidth = true;
    switchUpRatioSafetyFactor = 1.5;
    console.log(
      `[CustomRules][${mediaType}][ElasticRule] Checking elastic rule... (current = ${current})`
    );

    if (!metrics) {
      console.log(
        `[CustomRules][${mediaType}][ElasticRule] No metrics, bailing.`
      );
      return SwitchRequest(context).create();
    }

    // Get last valid request
    i = requests.length - 1;
    while (i >= 0 && lastRequest === null) {
      currentRequest = requests[i];
      if (
        currentRequest._tfinish &&
        currentRequest.trequest &&
        currentRequest.tresponse &&
        currentRequest.trace &&
        currentRequest.trace.length > 0
      ) {
        lastRequest = requests[i];
      }
      i--;
    }

    if (lastRequest === null) {
      console.log(
        `[CustomRules][${mediaType}][ElasticRule] No valid requests made for this stream yet, bailing.`
      );
      return SwitchRequest(context).create();
    }

    if (lastRequest.type !== "MediaSegment") {
      console.log(
        `[CustomRules][${mediaType}][ElasticRule] Last request is not a media segment, bailing.`
      );
      return SwitchRequest(context).create();
    }

    totalTime =
      (lastRequest._tfinish.getTime() - lastRequest.trequest.getTime()) / 1000;
    downloadTime =
      (lastRequest._tfinish.getTime() - lastRequest.tresponse.getTime()) / 1000;

    if (totalTime <= 0) {
      console.log(
        `[CustomRules][${mediaType}][ElasticRule] Don't know how long the download of the last fragment took, bailing.`
      );
      return SwitchRequest(context).create();
    }

    totalBytesLength = getBytesLength(lastRequest);

    console.log(
      `[CustomRules][${mediaType}][ElasticRule] DL: ${Number(
        downloadTime.toFixed(3)
      )}s, Total: ${Number(totalTime.toFixed(3))}s, Length: ${totalBytesLength}`
    );

    // paused
    isPlaying = ElasticRuleClass.playerInstance.isPaused() ? 0 : 1;

    // receive rate
    receiveRate = ElasticRuleClass.playerInstance.getAverageThroughput("video");

    //get queue length
    queueLength = dashMetrics.getCurrentBufferLevel(metrics);

    //calculate
    qI += downloadTime * (queueLength - qT);

    level = receiveRate / (isPlaying - kp * queueLength - ki * qI);

    for (i = quantize.length - 1; i >= 0; i--) {
      if (quantize[i] < level) {
        q = i;
        break;
      }
    }
    
    if (i < 0) {
      q = 0;
    }

    if (ElasticRuleClass.playerInstance.getQualityFor('video') === q) {
      q = SwitchRequest.NO_CHANGE;
    }
  
/*     if (q === 0 && ElasticRuleClass.playerInstance.getQualityFor('audio') !== 0) {      
      ElasticRuleClass.playerInstance.setAutoSwitchQualityFor('audio', false);
      ElasticRuleClass.playerInstance.setQualityFor('audio', 0);
      console.log(
        `[CustomRules][${mediaType}][ElasticRule] Switch Audio: q=0`
      );
    }

    if (q !== 0 && ElasticRuleClass.playerInstance.getQualityFor('audio') === 0) {
      ElasticRuleClass.playerInstance.setAutoSwitchQualityFor('audio', false);
      ElasticRuleClass.playerInstance.setQualityFor('audio', 1);
      console.log(
        `[CustomRules][${mediaType}][ElasticRule] Switch Audio: q=1`
      );
    } */

    console.log(
      `[CustomRules][${mediaType}][ElasticRule] SwitchRequest: q=${q}`
    );

    return SwitchRequest(context).create(
      q,
      { name: ElasticRuleClass.__dashjs_factory_name },
      p
    );
  }

  instance = {
    getMaxIndex: getMaxIndex
  };

  setup();

  return instance;
}

/* export default ElasticRule; */

function ElasticRuleFactory(playerInstance, { qT, kp, ki }) {
  ElasticRuleClass.playerInstance = playerInstance;
  ElasticRuleClass.qT = qT;
  ElasticRuleClass.kp = kp;
  ElasticRuleClass.ki = ki;
  ElasticRuleClass.__dashjs_factory_name = "ElasticRule";
  ElasticRule = dashjs.FactoryMaker.getClassFactory(ElasticRuleClass);
  return ElasticRule;
};
