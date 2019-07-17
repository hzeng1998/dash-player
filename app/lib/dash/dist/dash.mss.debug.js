(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ErrorsBase = (function () {
    function ErrorsBase() {
        _classCallCheck(this, ErrorsBase);
    }

    _createClass(ErrorsBase, [{
        key: 'extend',
        value: function extend(errors, config) {
            if (!errors) return;

            var override = config ? config.override : false;
            var publicOnly = config ? config.publicOnly : false;

            for (var err in errors) {
                if (!errors.hasOwnProperty(err) || this[err] && !override) continue;
                if (publicOnly && errors[err].indexOf('public_') === -1) continue;
                this[err] = errors[err];
            }
        }
    }]);

    return ErrorsBase;
})();

exports['default'] = ErrorsBase;
module.exports = exports['default'];

},{}],2:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventsBase = (function () {
    function EventsBase() {
        _classCallCheck(this, EventsBase);
    }

    _createClass(EventsBase, [{
        key: 'extend',
        value: function extend(events, config) {
            if (!events) return;

            var override = config ? config.override : false;
            var publicOnly = config ? config.publicOnly : false;

            for (var evt in events) {
                if (!events.hasOwnProperty(evt) || this[evt] && !override) continue;
                if (publicOnly && events[evt].indexOf('public_') === -1) continue;
                this[evt] = events[evt];
            }
        }
    }]);

    return EventsBase;
})();

exports['default'] = EventsBase;
module.exports = exports['default'];

},{}],3:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coreEventsEventsBase = _dereq_('../core/events/EventsBase');

var _coreEventsEventsBase2 = _interopRequireDefault(_coreEventsEventsBase);

var MssEvents = (function (_EventsBase) {
    _inherits(MssEvents, _EventsBase);

    function MssEvents() {
        _classCallCheck(this, MssEvents);

        _get(Object.getPrototypeOf(MssEvents.prototype), 'constructor', this).call(this);

        this.FRAGMENT_INFO_LOADING_COMPLETED = 'fragmentInfoLoadingCompleted';
    }

    return MssEvents;
})(_coreEventsEventsBase2['default']);

var mssEvents = new MssEvents();
exports['default'] = mssEvents;
module.exports = exports['default'];

},{"../core/events/EventsBase":2}],4:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssEvents = _dereq_('./MssEvents');

var _MssEvents2 = _interopRequireDefault(_MssEvents);

var _MssFragmentMoofProcessor = _dereq_('./MssFragmentMoofProcessor');

var _MssFragmentMoofProcessor2 = _interopRequireDefault(_MssFragmentMoofProcessor);

var _streamingVoFragmentRequest = _dereq_('../streaming/vo/FragmentRequest');

var _streamingVoFragmentRequest2 = _interopRequireDefault(_streamingVoFragmentRequest);

function MssFragmentInfoController(config) {

    config = config || {};
    var context = this.context;

    var instance = undefined,
        logger = undefined,
        fragmentModel = undefined,
        started = undefined,
        type = undefined,
        bufferTimeout = undefined,
        startTime = undefined,
        startFragmentTime = undefined,
        index = undefined;

    var streamProcessor = config.streamProcessor;
    var eventBus = config.eventBus;
    var metricsModel = config.metricsModel;
    var playbackController = config.playbackController;
    var ISOBoxer = config.ISOBoxer;
    var baseURLController = config.baseURLController;
    var debug = config.debug;
    var controllerType = 'MssFragmentInfoController';

    function setup() {
        logger = debug.getLogger(instance);
    }

    function initialize() {
        started = false;

        startTime = null;
        startFragmentTime = null;

        // Register to StreamProcessor as external controller
        streamProcessor.registerExternalController(instance);
        type = streamProcessor.getType();
        fragmentModel = streamProcessor.getFragmentModel();
    }

    function doStart() {
        if (started === true) {
            return;
        }

        logger.debug('Do start');

        eventBus.on(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, onFragmentInfoLoadedCompleted, instance);

        started = true;
        startTime = new Date().getTime();
        index = 0;

        loadNextFragmentInfo();
    }

    function doStop() {
        if (!started) {
            return;
        }
        logger.debug('Do stop');

        eventBus.off(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, onFragmentInfoLoadedCompleted, instance);

        // Stop buffering process
        clearTimeout(bufferTimeout);
        started = false;

        startTime = null;
        startFragmentTime = null;
    }

    function reset() {
        doStop();
        streamProcessor.unregisterExternalController(instance);
    }

    function loadNextFragmentInfo() {
        // Check if running state
        if (!started) {
            return;
        }

        // Get last segment from SegmentTimeline
        var representation = getCurrentRepresentation();
        var manifest = representation.adaptation.period.mpd.manifest;
        var adaptation = manifest.Period_asArray[representation.adaptation.period.index].AdaptationSet_asArray[representation.adaptation.index];
        var segments = adaptation.SegmentTemplate.SegmentTimeline.S_asArray;
        var segment = segments[segments.length - 1];

        logger.debug('Last fragment time: ' + segment.t / adaptation.SegmentTemplate.timescale);

        // Generate segment request
        var request = getRequestForSegment(adaptation, representation, segment);

        // Send segment request
        requestFragment.call(this, request);
    }

    function delayLoadNextFragmentInfo(delay) {
        clearTimeout(bufferTimeout);
        bufferTimeout = setTimeout(function () {
            bufferTimeout = null;
            loadNextFragmentInfo();
        }, delay * 1000);
    }

    function getRequestForSegment(adaptation, representation, segment) {
        var timescale = adaptation.SegmentTemplate.timescale;
        var request = new _streamingVoFragmentRequest2['default']();

        request.mediaType = type;
        request.type = 'FragmentInfoSegment';
        // request.range = segment.mediaRange;
        request.startTime = segment.t / timescale;
        request.duration = segment.d / timescale;
        request.timescale = timescale;
        // request.availabilityStartTime = segment.availabilityStartTime;
        // request.availabilityEndTime = segment.availabilityEndTime;
        // request.wallStartTime = segment.wallStartTime;
        request.quality = representation.index;
        request.index = index++;
        request.mediaInfo = streamProcessor.getMediaInfo();
        request.adaptationIndex = representation.adaptation.index;
        request.representationId = representation.id;
        request.url = baseURLController.resolve(representation.path).url + adaptation.SegmentTemplate.media;
        request.url = request.url.replace('$Bandwidth$', representation.bandwidth);
        request.url = request.url.replace('$Time$', segment.tManifest ? segment.tManifest : segment.t);
        request.url = request.url.replace('/Fragments(', '/FragmentInfo(');

        return request;
    }

    function getCurrentRepresentation() {
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();

        return representation;
    }

    function requestFragment(request) {

        logger.debug('Load fragment for time: ' + request.startTime);
        if (streamProcessor.getFragmentModel().isFragmentLoadedOrPending(request)) {
            // We may have reached end of timeline in case of start-over streams
            logger.debug('No more fragments');
            return;
        }

        fragmentModel.executeRequest(request);
    }

    function onFragmentInfoLoadedCompleted(e) {
        if (e.streamProcessor !== streamProcessor) {
            return;
        }

        var request = e.fragmentInfo.request;
        if (!e.fragmentInfo.response) {
            logger.error('Load error', request.url);
            return;
        }

        var deltaFragmentTime = undefined,
            deltaTime = undefined;

        logger.debug('FragmentInfo loaded: ', request.url);

        if (!startFragmentTime) {
            startFragmentTime = request.startTime;
        }

        try {
            // Process FramgentInfo in order to update segment timeline (DVR window)
            var mssFragmentMoofProcessor = (0, _MssFragmentMoofProcessor2['default'])(context).create({
                metricsModel: metricsModel,
                playbackController: playbackController,
                ISOBoxer: ISOBoxer,
                eventBus: eventBus,
                debug: debug
            });
            mssFragmentMoofProcessor.updateSegmentList(e.fragmentInfo, streamProcessor);

            deltaTime = (new Date().getTime() - startTime) / 1000;
            deltaFragmentTime = request.startTime + request.duration - startFragmentTime;
            delayLoadNextFragmentInfo(Math.max(0, deltaFragmentTime - deltaTime));
        } catch (e) {
            logger.fatal('Internal error while processing fragment info segment ');
        }
    }

    function getType() {
        return type;
    }

    instance = {
        initialize: initialize,
        controllerType: controllerType,
        start: doStart,
        getType: getType,
        reset: reset
    };

    setup();

    return instance;
}

MssFragmentInfoController.__dashjs_factory_name = 'MssFragmentInfoController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentInfoController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"../streaming/vo/FragmentRequest":15,"./MssEvents":3,"./MssFragmentMoofProcessor":5}],5:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _streamingVoDashJSError = _dereq_('../streaming/vo/DashJSError');

var _streamingVoDashJSError2 = _interopRequireDefault(_streamingVoDashJSError);

var _errorsMssErrors = _dereq_('./errors/MssErrors');

var _errorsMssErrors2 = _interopRequireDefault(_errorsMssErrors);

var _streamingMediaPlayerEvents = _dereq_('../streaming/MediaPlayerEvents');

var _streamingMediaPlayerEvents2 = _interopRequireDefault(_streamingMediaPlayerEvents);

/**
 * @module MssFragmentMoovProcessor
 * @param {Object} config object
 */
function MssFragmentMoofProcessor(config) {

    config = config || {};
    var instance = undefined,
        type = undefined,
        logger = undefined;
    var metricsModel = config.metricsModel;
    var playbackController = config.playbackController;
    var errorHandler = config.errHandler;
    var eventBus = config.eventBus;
    var ISOBoxer = config.ISOBoxer;
    var debug = config.debug;

    function setup() {
        logger = debug.getLogger(instance);
        type = '';
    }

    function processTfrf(request, tfrf, tfdt, streamProcessor) {
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();
        var indexHandler = streamProcessor.getIndexHandler();

        var manifest = representation.adaptation.period.mpd.manifest;
        var adaptation = manifest.Period_asArray[representation.adaptation.period.index].AdaptationSet_asArray[representation.adaptation.index];
        var timescale = adaptation.SegmentTemplate.timescale;

        type = streamProcessor.getType();

        if (manifest.type !== 'dynamic' && !manifest.timeShiftBufferDepth) {
            return;
        }

        if (!tfrf) {
            errorHandler.error(new _streamingVoDashJSError2['default'](_errorsMssErrors2['default'].MSS_NO_TFRF_CODE, _errorsMssErrors2['default'].MSS_NO_TFRF_MESSAGE));
            return;
        }

        // Get adaptation's segment timeline (always a SegmentTimeline in Smooth Streaming use case)
        var segments = adaptation.SegmentTemplate.SegmentTimeline.S;
        var entries = tfrf.entry;
        var entry = undefined,
            segmentTime = undefined,
            range = undefined;
        var segment = null;
        var t = 0;
        var availabilityStartTime = null;

        if (entries.length === 0) {
            return;
        }

        // Consider only first tfrf entry (to avoid pre-condition failure on fragment info requests)
        entry = entries[0];

        // In case of start-over streams, check if we have reached end of original manifest duration (set in timeShiftBufferDepth)
        // => then do not update anymore timeline
        if (manifest.type === 'static') {
            // Get first segment time
            segmentTime = segments[0].tManifest ? parseFloat(segments[0].tManifest) : segments[0].t;
            if (entry.fragment_absolute_time > segmentTime + manifest.timeShiftBufferDepth * timescale) {
                return;
            }
        }

        logger.debug('entry - t = ', entry.fragment_absolute_time / timescale);

        // Get last segment time
        segmentTime = segments[segments.length - 1].tManifest ? parseFloat(segments[segments.length - 1].tManifest) : segments[segments.length - 1].t;
        logger.debug('Last segment - t = ', segmentTime / timescale);

        // Check if we have to append new segment to timeline
        if (entry.fragment_absolute_time <= segmentTime) {
            // Update DVR window range
            // => set range end to end time of current segment
            range = {
                start: segments[0].t / timescale,
                end: tfdt.baseMediaDecodeTime / timescale + request.duration
            };

            updateDVR(request.mediaType, range, streamProcessor.getStreamInfo().manifestInfo);
            return;
        }

        logger.debug('Add new segment - t = ', entry.fragment_absolute_time / timescale);
        segment = {};
        segment.t = entry.fragment_absolute_time;
        segment.d = entry.fragment_duration;
        // If timestamps starts at 0 relative to 1st segment (dynamic to static) then update segment time
        if (segments[0].tManifest) {
            segment.t -= parseFloat(segments[0].tManifest) - segments[0].t;
            segment.tManifest = entry.fragment_absolute_time;
        }
        segments.push(segment);

        // In case of static start-over streams, update content duration
        if (manifest.type === 'static') {
            if (type === 'video') {
                segment = segments[segments.length - 1];
                var end = (segment.t + segment.d) / timescale;
                if (end > representation.adaptation.period.duration) {
                    eventBus.trigger(_streamingMediaPlayerEvents2['default'].MANIFEST_VALIDITY_CHANGED, { sender: this, newDuration: end });
                }
            }
            return;
        }
        // In case of live streams, update segment timeline according to DVR window
        else if (manifest.timeShiftBufferDepth && manifest.timeShiftBufferDepth > 0) {
                // Get timestamp of the last segment
                segment = segments[segments.length - 1];
                t = segment.t;

                // Determine the segments' availability start time
                availabilityStartTime = Math.round((t - manifest.timeShiftBufferDepth * timescale) / timescale);

                // Remove segments prior to availability start time
                segment = segments[0];
                while (Math.round(segment.t / timescale) < availabilityStartTime) {
                    logger.debug('Remove segment  - t = ' + segment.t / timescale);
                    segments.splice(0, 1);
                    segment = segments[0];
                }

                // Update DVR window range => set range end to end time of current segment
                range = {
                    start: segments[0].t / timescale,
                    end: tfdt.baseMediaDecodeTime / timescale + request.duration
                };

                updateDVR(type, range, streamProcessor.getStreamInfo().manifestInfo);
            }

        indexHandler.updateSegmentList(representation);
    }

    function updateDVR(type, range, manifestInfo) {
        var dvrInfos = metricsModel.getMetricsFor(type).DVRInfo;
        if (dvrInfos) {
            if (dvrInfos.length === 0 || dvrInfos.length > 0 && range.end > dvrInfos[dvrInfos.length - 1].range.end) {
                logger.debug('Update DVR Infos [' + range.start + ' - ' + range.end + ']');
                metricsModel.addDVRInfo(type, playbackController.getTime(), manifestInfo, range);
            }
        }
    }

    // This function returns the offset of the 1st byte of a child box within a container box
    function getBoxOffset(parent, type) {
        var offset = 8;
        var i = 0;

        for (i = 0; i < parent.boxes.length; i++) {
            if (parent.boxes[i].type === type) {
                return offset;
            }
            offset += parent.boxes[i].size;
        }
        return offset;
    }

    function convertFragment(e, sp) {
        var i = undefined;

        // e.request contains request description object
        // e.response contains fragment bytes
        var isoFile = ISOBoxer.parseBuffer(e.response);
        // Update track_Id in tfhd box
        var tfhd = isoFile.fetch('tfhd');
        tfhd.track_ID = e.request.mediaInfo.index + 1;

        // Add tfdt box
        var tfdt = isoFile.fetch('tfdt');
        var traf = isoFile.fetch('traf');
        if (tfdt === null) {
            tfdt = ISOBoxer.createFullBox('tfdt', traf, tfhd);
            tfdt.version = 1;
            tfdt.flags = 0;
            tfdt.baseMediaDecodeTime = Math.floor(e.request.startTime * e.request.timescale);
        }

        var trun = isoFile.fetch('trun');

        // Process tfxd boxes
        // This box provide absolute timestamp but we take the segment start time for tfdt
        var tfxd = isoFile.fetch('tfxd');
        if (tfxd) {
            tfxd._parent.boxes.splice(tfxd._parent.boxes.indexOf(tfxd), 1);
            tfxd = null;
        }
        var tfrf = isoFile.fetch('tfrf');
        processTfrf(e.request, tfrf, tfdt, sp);
        if (tfrf) {
            tfrf._parent.boxes.splice(tfrf._parent.boxes.indexOf(tfrf), 1);
            tfrf = null;
        }

        // If protected content in PIFF1.1 format (sepiff box = Sample Encryption PIFF)
        // => convert sepiff box it into a senc box
        // => create saio and saiz boxes (if not already present)
        var sepiff = isoFile.fetch('sepiff');
        if (sepiff !== null) {
            sepiff.type = 'senc';
            sepiff.usertype = undefined;

            var _saio = isoFile.fetch('saio');
            if (_saio === null) {
                // Create Sample Auxiliary Information Offsets Box box (saio)
                _saio = ISOBoxer.createFullBox('saio', traf);
                _saio.version = 0;
                _saio.flags = 0;
                _saio.entry_count = 1;
                _saio.offset = [0];

                var saiz = ISOBoxer.createFullBox('saiz', traf);
                saiz.version = 0;
                saiz.flags = 0;
                saiz.sample_count = sepiff.sample_count;
                saiz.default_sample_info_size = 0;
                saiz.sample_info_size = [];

                if (sepiff.flags & 0x02) {
                    // Sub-sample encryption => set sample_info_size for each sample
                    for (i = 0; i < sepiff.sample_count; i += 1) {
                        // 10 = 8 (InitializationVector field size) + 2 (subsample_count field size)
                        // 6 = 2 (BytesOfClearData field size) + 4 (BytesOfEncryptedData field size)
                        saiz.sample_info_size[i] = 10 + 6 * sepiff.entry[i].NumberOfEntries;
                    }
                } else {
                    // No sub-sample encryption => set default sample_info_size = InitializationVector field size (8)
                    saiz.default_sample_info_size = 8;
                }
            }
        }

        tfhd.flags &= 0xFFFFFE; // set tfhd.base-data-offset-present to false
        tfhd.flags |= 0x020000; // set tfhd.default-base-is-moof to true
        trun.flags |= 0x000001; // set trun.data-offset-present to true

        // Update trun.data_offset field that corresponds to first data byte (inside mdat box)
        var moof = isoFile.fetch('moof');
        var length = moof.getLength();
        trun.data_offset = length + 8;

        // Update saio box offset field according to new senc box offset
        var saio = isoFile.fetch('saio');
        if (saio !== null) {
            var trafPosInMoof = getBoxOffset(moof, 'traf');
            var sencPosInTraf = getBoxOffset(traf, 'senc');
            // Set offset from begin fragment to the first IV field in senc box
            saio.offset[0] = trafPosInMoof + sencPosInTraf + 16; // 16 = box header (12) + sample_count field size (4)
        }

        // Write transformed/processed fragment into request reponse data
        e.response = isoFile.write();
    }

    function updateSegmentList(e, sp) {
        // e.request contains request description object
        // e.response contains fragment bytes
        if (!e.response) {
            throw new Error('e.response parameter is missing');
        }

        var isoFile = ISOBoxer.parseBuffer(e.response);
        // Update track_Id in tfhd box
        var tfhd = isoFile.fetch('tfhd');
        tfhd.track_ID = e.request.mediaInfo.index + 1;

        // Add tfdt box
        var tfdt = isoFile.fetch('tfdt');
        var traf = isoFile.fetch('traf');
        if (tfdt === null) {
            tfdt = ISOBoxer.createFullBox('tfdt', traf, tfhd);
            tfdt.version = 1;
            tfdt.flags = 0;
            tfdt.baseMediaDecodeTime = Math.floor(e.request.startTime * e.request.timescale);
        }

        var tfrf = isoFile.fetch('tfrf');
        processTfrf(e.request, tfrf, tfdt, sp);
        if (tfrf) {
            tfrf._parent.boxes.splice(tfrf._parent.boxes.indexOf(tfrf), 1);
            tfrf = null;
        }
    }

    function getType() {
        return type;
    }

    instance = {
        convertFragment: convertFragment,
        updateSegmentList: updateSegmentList,
        getType: getType
    };

    setup();
    return instance;
}

MssFragmentMoofProcessor.__dashjs_factory_name = 'MssFragmentMoofProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentMoofProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{"../streaming/MediaPlayerEvents":12,"../streaming/vo/DashJSError":13,"./errors/MssErrors":9}],6:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
        value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _errorsMssErrors = _dereq_('./errors/MssErrors');

var _errorsMssErrors2 = _interopRequireDefault(_errorsMssErrors);

/**
 * @module MssFragmentMoovProcessor
 * @param {Object} config object
 */
function MssFragmentMoovProcessor(config) {
        config = config || {};
        var NALUTYPE_SPS = 7;
        var NALUTYPE_PPS = 8;
        var constants = config.constants;
        var ISOBoxer = config.ISOBoxer;

        var protectionController = config.protectionController;
        var instance = undefined,
            period = undefined,
            adaptationSet = undefined,
            representation = undefined,
            contentProtection = undefined,
            timescale = undefined,
            trackId = undefined;

        function createFtypBox(isoFile) {
                var ftyp = ISOBoxer.createBox('ftyp', isoFile);
                ftyp.major_brand = 'iso6';
                ftyp.minor_version = 1; // is an informative integer for the minor version of the major brand
                ftyp.compatible_brands = []; //is a list, to the end of the box, of brands isom, iso6 and msdh
                ftyp.compatible_brands[0] = 'isom'; // => decimal ASCII value for isom
                ftyp.compatible_brands[1] = 'iso6'; // => decimal ASCII value for iso6
                ftyp.compatible_brands[2] = 'msdh'; // => decimal ASCII value for msdh

                return ftyp;
        }

        function createMoovBox(isoFile) {

                // moov box
                var moov = ISOBoxer.createBox('moov', isoFile);

                // moov/mvhd
                createMvhdBox(moov);

                // moov/trak
                var trak = ISOBoxer.createBox('trak', moov);

                // moov/trak/tkhd
                createTkhdBox(trak);

                // moov/trak/mdia
                var mdia = ISOBoxer.createBox('mdia', trak);

                // moov/trak/mdia/mdhd
                createMdhdBox(mdia);

                // moov/trak/mdia/hdlr
                createHdlrBox(mdia);

                // moov/trak/mdia/minf
                var minf = ISOBoxer.createBox('minf', mdia);

                switch (adaptationSet.type) {
                        case constants.VIDEO:
                                // moov/trak/mdia/minf/vmhd
                                createVmhdBox(minf);
                                break;
                        case constants.AUDIO:
                                // moov/trak/mdia/minf/smhd
                                createSmhdBox(minf);
                                break;
                        default:
                                break;
                }

                // moov/trak/mdia/minf/dinf
                var dinf = ISOBoxer.createBox('dinf', minf);

                // moov/trak/mdia/minf/dinf/dref
                createDrefBox(dinf);

                // moov/trak/mdia/minf/stbl
                var stbl = ISOBoxer.createBox('stbl', minf);

                // Create empty stts, stsc, stco and stsz boxes
                // Use data field as for codem-isoboxer unknown boxes for setting fields value

                // moov/trak/mdia/minf/stbl/stts
                var stts = ISOBoxer.createFullBox('stts', stbl);
                stts._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

                // moov/trak/mdia/minf/stbl/stsc
                var stsc = ISOBoxer.createFullBox('stsc', stbl);
                stsc._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

                // moov/trak/mdia/minf/stbl/stco
                var stco = ISOBoxer.createFullBox('stco', stbl);
                stco._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

                // moov/trak/mdia/minf/stbl/stsz
                var stsz = ISOBoxer.createFullBox('stsz', stbl);
                stsz._data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, sample_size = 0, sample_count = 0

                // moov/trak/mdia/minf/stbl/stsd
                createStsdBox(stbl);

                // moov/mvex
                var mvex = ISOBoxer.createBox('mvex', moov);

                // moov/mvex/trex
                createTrexBox(mvex);

                if (contentProtection && protectionController) {
                        var supportedKS = protectionController.getSupportedKeySystemsFromContentProtection(contentProtection);
                        createProtectionSystemSpecificHeaderBox(moov, supportedKS);
                }
        }

        function createMvhdBox(moov) {

                var mvhd = ISOBoxer.createFullBox('mvhd', moov);

                mvhd.version = 1; // version = 1  in order to have 64bits duration value

                mvhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
                mvhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
                mvhd.timescale = timescale; // the time-scale for the entire presentation => 10000000 for MSS
                mvhd.duration = Math.round(period.duration * timescale); // the length of the presentation (in the indicated timescale) =>  take duration of period
                mvhd.rate = 1.0; // 16.16 number, '1.0' = normal playback
                mvhd.volume = 1.0; // 8.8 number, '1.0' = full volume
                mvhd.reserved1 = 0;
                mvhd.reserved2 = [0x0, 0x0];
                mvhd.matrix = [1, 0, 0, // provides a transformation matrix for the video;
                0, 1, 0, // (u,v,w) are restricted here to (0,0,1)
                0, 0, 16384];
                mvhd.pre_defined = [0, 0, 0, 0, 0, 0];
                mvhd.next_track_ID = trackId + 1; // indicates a value to use for the track ID of the next track to be added to this presentation

                return mvhd;
        }

        function createTkhdBox(trak) {

                var tkhd = ISOBoxer.createFullBox('tkhd', trak);

                tkhd.version = 1; // version = 1  in order to have 64bits duration value
                tkhd.flags = 0x1 | // Track_enabled (0x000001): Indicates that the track is enabled
                0x2 | // Track_in_movie (0x000002):  Indicates that the track is used in the presentation
                0x4; // Track_in_preview (0x000004):  Indicates that the track is used when previewing the presentation

                tkhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
                tkhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
                tkhd.track_ID = trackId; // uniquely identifies this track over the entire life-time of this presentation
                tkhd.reserved1 = 0;
                tkhd.duration = Math.round(period.duration * timescale); // the duration of this track (in the timescale indicated in the Movie Header Box) =>  take duration of period
                tkhd.reserved2 = [0x0, 0x0];
                tkhd.layer = 0; // specifies the front-to-back ordering of video tracks; tracks with lower numbers are closer to the viewer => 0 since only one video track
                tkhd.alternate_group = 0; // specifies a group or collection of tracks => ignore
                tkhd.volume = 1.0; // '1.0' = full volume
                tkhd.reserved3 = 0;
                tkhd.matrix = [1, 0, 0, // provides a transformation matrix for the video;
                0, 1, 0, // (u,v,w) are restricted here to (0,0,1)
                0, 0, 16384];
                tkhd.width = representation.width; // visual presentation width
                tkhd.height = representation.height; // visual presentation height

                return tkhd;
        }

        function createMdhdBox(mdia) {

                var mdhd = ISOBoxer.createFullBox('mdhd', mdia);

                mdhd.version = 1; // version = 1  in order to have 64bits duration value

                mdhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
                mdhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
                mdhd.timescale = timescale; // the time-scale for the entire presentation
                mdhd.duration = Math.round(period.duration * timescale); // the duration of this media (in the scale of the timescale). If the duration cannot be determined then duration is set to all 1s.
                mdhd.language = adaptationSet.lang || 'und'; // declares the language code for this media (see getLanguageCode())
                mdhd.pre_defined = 0;

                return mdhd;
        }

        function createHdlrBox(mdia) {

                var hdlr = ISOBoxer.createFullBox('hdlr', mdia);

                hdlr.pre_defined = 0;
                switch (adaptationSet.type) {
                        case constants.VIDEO:
                                hdlr.handler_type = 'vide';
                                break;
                        case constants.AUDIO:
                                hdlr.handler_type = 'soun';
                                break;
                        default:
                                hdlr.handler_type = 'meta';
                                break;
                }
                hdlr.name = representation.id;
                hdlr.reserved = [0, 0, 0];

                return hdlr;
        }

        function createVmhdBox(minf) {

                var vmhd = ISOBoxer.createFullBox('vmhd', minf);

                vmhd.flags = 1;

                vmhd.graphicsmode = 0; // specifies a composition mode for this video track, from the following enumerated set, which may be extended by derived specifications: copy = 0 copy over the existing image
                vmhd.opcolor = [0, 0, 0]; // is a set of 3 colour values (red, green, blue) available for use by graphics modes

                return vmhd;
        }

        function createSmhdBox(minf) {

                var smhd = ISOBoxer.createFullBox('smhd', minf);

                smhd.flags = 1;

                smhd.balance = 0; // is a fixed-point 8.8 number that places mono audio tracks in a stereo space; 0 is centre (the normal value); full left is -1.0 and full right is 1.0.
                smhd.reserved = 0;

                return smhd;
        }

        function createDrefBox(dinf) {

                var dref = ISOBoxer.createFullBox('dref', dinf);

                dref.entry_count = 1;
                dref.entries = [];

                var url = ISOBoxer.createFullBox('url ', dref, false);
                url.location = '';
                url.flags = 1;

                dref.entries.push(url);

                return dref;
        }

        function createStsdBox(stbl) {

                var stsd = ISOBoxer.createFullBox('stsd', stbl);

                stsd.entries = [];
                switch (adaptationSet.type) {
                        case constants.VIDEO:
                        case constants.AUDIO:
                                stsd.entries.push(createSampleEntry(stsd));
                                break;
                        default:
                                break;
                }

                stsd.entry_count = stsd.entries.length; // is an integer that counts the actual entries
                return stsd;
        }

        function createSampleEntry(stsd) {
                var codec = representation.codecs.substring(0, representation.codecs.indexOf('.'));

                switch (codec) {
                        case 'avc1':
                                return createAVCVisualSampleEntry(stsd, codec);
                        case 'mp4a':
                                return createMP4AudioSampleEntry(stsd, codec);
                        default:
                                throw {
                                        code: _errorsMssErrors2['default'].MSS_UNSUPPORTED_CODEC_CODE,
                                        message: _errorsMssErrors2['default'].MSS_UNSUPPORTED_CODEC_MESSAGE,
                                        data: {
                                                codec: codec
                                        }
                                };
                }
        }

        function createAVCVisualSampleEntry(stsd, codec) {
                var avc1 = undefined;

                if (contentProtection) {
                        avc1 = ISOBoxer.createBox('encv', stsd, false);
                } else {
                        avc1 = ISOBoxer.createBox('avc1', stsd, false);
                }

                // SampleEntry fields
                avc1.reserved1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
                avc1.data_reference_index = 1;

                // VisualSampleEntry fields
                avc1.pre_defined1 = 0;
                avc1.reserved2 = 0;
                avc1.pre_defined2 = [0, 0, 0];
                avc1.height = representation.height;
                avc1.width = representation.width;
                avc1.horizresolution = 72; // 72 dpi
                avc1.vertresolution = 72; // 72 dpi
                avc1.reserved3 = 0;
                avc1.frame_count = 1; // 1 compressed video frame per sample
                avc1.compressorname = [0x0A, 0x41, 0x56, 0x43, 0x20, 0x43, 0x6F, 0x64, // = 'AVC Coding';
                0x69, 0x6E, 0x67, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
                avc1.depth = 0x0018; // 0x0018 – images are in colour with no alpha.
                avc1.pre_defined3 = 65535;
                avc1.config = createAVC1ConfigurationRecord();
                if (contentProtection) {
                        // Create and add Protection Scheme Info Box
                        var sinf = ISOBoxer.createBox('sinf', avc1);

                        // Create and add Original Format Box => indicate codec type of the encrypted content
                        createOriginalFormatBox(sinf, codec);

                        // Create and add Scheme Type box
                        createSchemeTypeBox(sinf);

                        // Create and add Scheme Information Box
                        createSchemeInformationBox(sinf);
                }

                return avc1;
        }

        function createAVC1ConfigurationRecord() {

                var avcC = null;
                var avcCLength = 15; // length = 15 by default (0 SPS and 0 PPS)

                // First get all SPS and PPS from codecPrivateData
                var sps = [];
                var pps = [];
                var AVCProfileIndication = 0;
                var AVCLevelIndication = 0;
                var profile_compatibility = 0;

                var nalus = representation.codecPrivateData.split('00000001').slice(1);
                var naluBytes = undefined,
                    naluType = undefined;

                for (var _i = 0; _i < nalus.length; _i++) {
                        naluBytes = hexStringtoBuffer(nalus[_i]);

                        naluType = naluBytes[0] & 0x1F;

                        switch (naluType) {
                                case NALUTYPE_SPS:
                                        sps.push(naluBytes);
                                        avcCLength += naluBytes.length + 2; // 2 = sequenceParameterSetLength field length
                                        break;
                                case NALUTYPE_PPS:
                                        pps.push(naluBytes);
                                        avcCLength += naluBytes.length + 2; // 2 = pictureParameterSetLength field length
                                        break;
                                default:
                                        break;
                        }
                }

                // Get profile and level from SPS
                if (sps.length > 0) {
                        AVCProfileIndication = sps[0][1];
                        profile_compatibility = sps[0][2];
                        AVCLevelIndication = sps[0][3];
                }

                // Generate avcC buffer
                avcC = new Uint8Array(avcCLength);

                var i = 0;
                // length
                avcC[i++] = (avcCLength & 0xFF000000) >> 24;
                avcC[i++] = (avcCLength & 0x00FF0000) >> 16;
                avcC[i++] = (avcCLength & 0x0000FF00) >> 8;
                avcC[i++] = avcCLength & 0x000000FF;
                avcC.set([0x61, 0x76, 0x63, 0x43], i); // type = 'avcC'
                i += 4;
                avcC[i++] = 1; // configurationVersion = 1
                avcC[i++] = AVCProfileIndication;
                avcC[i++] = profile_compatibility;
                avcC[i++] = AVCLevelIndication;
                avcC[i++] = 0xFF; // '11111' + lengthSizeMinusOne = 3
                avcC[i++] = 0xE0 | sps.length; // '111' + numOfSequenceParameterSets
                for (var n = 0; n < sps.length; n++) {
                        avcC[i++] = (sps[n].length & 0xFF00) >> 8;
                        avcC[i++] = sps[n].length & 0x00FF;
                        avcC.set(sps[n], i);
                        i += sps[n].length;
                }
                avcC[i++] = pps.length; // numOfPictureParameterSets
                for (var n = 0; n < pps.length; n++) {
                        avcC[i++] = (pps[n].length & 0xFF00) >> 8;
                        avcC[i++] = pps[n].length & 0x00FF;
                        avcC.set(pps[n], i);
                        i += pps[n].length;
                }

                return avcC;
        }

        function createMP4AudioSampleEntry(stsd, codec) {
                var mp4a = undefined;

                if (contentProtection) {
                        mp4a = ISOBoxer.createBox('enca', stsd, false);
                } else {
                        mp4a = ISOBoxer.createBox('mp4a', stsd, false);
                }

                // SampleEntry fields
                mp4a.reserved1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
                mp4a.data_reference_index = 1;

                // AudioSampleEntry fields
                mp4a.reserved2 = [0x0, 0x0];
                mp4a.channelcount = representation.audioChannels;
                mp4a.samplesize = 16;
                mp4a.pre_defined = 0;
                mp4a.reserved_3 = 0;
                mp4a.samplerate = representation.audioSamplingRate << 16;

                mp4a.esds = createMPEG4AACESDescriptor();

                if (contentProtection) {
                        // Create and add Protection Scheme Info Box
                        var sinf = ISOBoxer.createBox('sinf', mp4a);

                        // Create and add Original Format Box => indicate codec type of the encrypted content
                        createOriginalFormatBox(sinf, codec);

                        // Create and add Scheme Type box
                        createSchemeTypeBox(sinf);

                        // Create and add Scheme Information Box
                        createSchemeInformationBox(sinf);
                }

                return mp4a;
        }

        function createMPEG4AACESDescriptor() {

                // AudioSpecificConfig (see ISO/IEC 14496-3, subpart 1) => corresponds to hex bytes contained in 'codecPrivateData' field
                var audioSpecificConfig = hexStringtoBuffer(representation.codecPrivateData);

                // ESDS length = esds box header length (= 12) +
                //               ES_Descriptor header length (= 5) +
                //               DecoderConfigDescriptor header length (= 15) +
                //               decoderSpecificInfo header length (= 2) +
                //               AudioSpecificConfig length (= codecPrivateData length)
                var esdsLength = 34 + audioSpecificConfig.length;
                var esds = new Uint8Array(esdsLength);

                var i = 0;
                // esds box
                esds[i++] = (esdsLength & 0xFF000000) >> 24; // esds box length
                esds[i++] = (esdsLength & 0x00FF0000) >> 16; // ''
                esds[i++] = (esdsLength & 0x0000FF00) >> 8; // ''
                esds[i++] = esdsLength & 0x000000FF; // ''
                esds.set([0x65, 0x73, 0x64, 0x73], i); // type = 'esds'
                i += 4;
                esds.set([0, 0, 0, 0], i); // version = 0, flags = 0
                i += 4;
                // ES_Descriptor (see ISO/IEC 14496-1 (Systems))
                esds[i++] = 0x03; // tag = 0x03 (ES_DescrTag)
                esds[i++] = 20 + audioSpecificConfig.length; // size
                esds[i++] = (trackId & 0xFF00) >> 8; // ES_ID = track_id
                esds[i++] = trackId & 0x00FF; // ''
                esds[i++] = 0; // flags and streamPriority

                // DecoderConfigDescriptor (see ISO/IEC 14496-1 (Systems))
                esds[i++] = 0x04; // tag = 0x04 (DecoderConfigDescrTag)
                esds[i++] = 15 + audioSpecificConfig.length; // size
                esds[i++] = 0x40; // objectTypeIndication = 0x40 (MPEG-4 AAC)
                esds[i] = 0x05 << 2; // streamType = 0x05 (Audiostream)
                esds[i] |= 0 << 1; // upStream = 0
                esds[i++] |= 1; // reserved = 1
                esds[i++] = 0xFF; // buffersizeDB = undefined
                esds[i++] = 0xFF; // ''
                esds[i++] = 0xFF; // ''
                esds[i++] = (representation.bandwidth & 0xFF000000) >> 24; // maxBitrate
                esds[i++] = (representation.bandwidth & 0x00FF0000) >> 16; // ''
                esds[i++] = (representation.bandwidth & 0x0000FF00) >> 8; // ''
                esds[i++] = representation.bandwidth & 0x000000FF; // ''
                esds[i++] = (representation.bandwidth & 0xFF000000) >> 24; // avgbitrate
                esds[i++] = (representation.bandwidth & 0x00FF0000) >> 16; // ''
                esds[i++] = (representation.bandwidth & 0x0000FF00) >> 8; // ''
                esds[i++] = representation.bandwidth & 0x000000FF; // ''

                // DecoderSpecificInfo (see ISO/IEC 14496-1 (Systems))
                esds[i++] = 0x05; // tag = 0x05 (DecSpecificInfoTag)
                esds[i++] = audioSpecificConfig.length; // size
                esds.set(audioSpecificConfig, i); // AudioSpecificConfig bytes

                return esds;
        }

        function createOriginalFormatBox(sinf, codec) {
                var frma = ISOBoxer.createBox('frma', sinf);
                frma.data_format = stringToCharCode(codec);
        }

        function createSchemeTypeBox(sinf) {
                var schm = ISOBoxer.createFullBox('schm', sinf);

                schm.flags = 0;
                schm.version = 0;
                schm.scheme_type = 0x63656E63; // 'cenc' => common encryption
                schm.scheme_version = 0x00010000; // version set to 0x00010000 (Major version 1, Minor version 0)
        }

        function createSchemeInformationBox(sinf) {
                var schi = ISOBoxer.createBox('schi', sinf);

                // Create and add Track Encryption Box
                createTrackEncryptionBox(schi);
        }

        function createProtectionSystemSpecificHeaderBox(moov, keySystems) {
                var pssh_bytes = undefined,
                    pssh = undefined,
                    i = undefined,
                    parsedBuffer = undefined;

                for (i = 0; i < keySystems.length; i += 1) {
                        pssh_bytes = keySystems[i].initData;
                        parsedBuffer = ISOBoxer.parseBuffer(pssh_bytes);
                        pssh = parsedBuffer.fetch('pssh');
                        if (pssh) {
                                ISOBoxer.Utils.appendBox(moov, pssh);
                        }
                }
        }

        function createTrackEncryptionBox(schi) {
                var tenc = ISOBoxer.createFullBox('tenc', schi);

                tenc.flags = 0;
                tenc.version = 0;

                tenc.default_IsEncrypted = 0x1;
                tenc.default_IV_size = 8;
                tenc.default_KID = contentProtection && contentProtection.length > 0 && contentProtection[0]['cenc:default_KID'] ? contentProtection[0]['cenc:default_KID'] : [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        }

        function createTrexBox(moov) {
                var trex = ISOBoxer.createFullBox('trex', moov);

                trex.track_ID = trackId;
                trex.default_sample_description_index = 1;
                trex.default_sample_duration = 0;
                trex.default_sample_size = 0;
                trex.default_sample_flags = 0;

                return trex;
        }

        function hexStringtoBuffer(str) {
                var buf = new Uint8Array(str.length / 2);
                var i = undefined;

                for (i = 0; i < str.length / 2; i += 1) {
                        buf[i] = parseInt('' + str[i * 2] + str[i * 2 + 1], 16);
                }
                return buf;
        }

        function stringToCharCode(str) {
                var code = 0;
                var i = undefined;

                for (i = 0; i < str.length; i += 1) {
                        code |= str.charCodeAt(i) << (str.length - i - 1) * 8;
                }
                return code;
        }

        function generateMoov(rep) {
                if (!rep || !rep.adaptation) {
                        return;
                }

                var isoFile = undefined,
                    arrayBuffer = undefined;

                representation = rep;
                adaptationSet = representation.adaptation;

                period = adaptationSet.period;
                trackId = adaptationSet.index + 1;
                contentProtection = period.mpd.manifest.Period_asArray[period.index].AdaptationSet_asArray[adaptationSet.index].ContentProtection;

                timescale = period.mpd.manifest.Period_asArray[period.index].AdaptationSet_asArray[adaptationSet.index].SegmentTemplate.timescale;

                isoFile = ISOBoxer.createFile();
                createFtypBox(isoFile);
                createMoovBox(isoFile);

                arrayBuffer = isoFile.write();

                return arrayBuffer;
        }

        instance = {
                generateMoov: generateMoov
        };

        return instance;
}

MssFragmentMoovProcessor.__dashjs_factory_name = 'MssFragmentMoovProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentMoovProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{"./errors/MssErrors":9}],7:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssFragmentMoofProcessor = _dereq_('./MssFragmentMoofProcessor');

var _MssFragmentMoofProcessor2 = _interopRequireDefault(_MssFragmentMoofProcessor);

var _MssFragmentMoovProcessor = _dereq_('./MssFragmentMoovProcessor');

var _MssFragmentMoovProcessor2 = _interopRequireDefault(_MssFragmentMoovProcessor);

var _MssEvents = _dereq_('./MssEvents');

var _MssEvents2 = _interopRequireDefault(_MssEvents);

// Add specific box processors not provided by codem-isoboxer library

function arrayEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function (element, index) {
        return element === arr2[index];
    });
}

function saioProcessor() {
    this._procFullBox();
    if (this.flags & 1) {
        this._procField('aux_info_type', 'uint', 32);
        this._procField('aux_info_type_parameter', 'uint', 32);
    }
    this._procField('entry_count', 'uint', 32);
    this._procFieldArray('offset', this.entry_count, 'uint', this.version === 1 ? 64 : 32);
}

function saizProcessor() {
    this._procFullBox();
    if (this.flags & 1) {
        this._procField('aux_info_type', 'uint', 32);
        this._procField('aux_info_type_parameter', 'uint', 32);
    }
    this._procField('default_sample_info_size', 'uint', 8);
    this._procField('sample_count', 'uint', 32);
    if (this.default_sample_info_size === 0) {
        this._procFieldArray('sample_info_size', this.sample_count, 'uint', 8);
    }
}

function sencProcessor() {
    this._procFullBox();
    this._procField('sample_count', 'uint', 32);
    if (this.flags & 1) {
        this._procField('IV_size', 'uint', 8);
    }
    this._procEntries('entry', this.sample_count, function (entry) {
        this._procEntryField(entry, 'InitializationVector', 'data', 8);
        if (this.flags & 2) {
            this._procEntryField(entry, 'NumberOfEntries', 'uint', 16);
            this._procSubEntries(entry, 'clearAndCryptedData', entry.NumberOfEntries, function (clearAndCryptedData) {
                this._procEntryField(clearAndCryptedData, 'BytesOfClearData', 'uint', 16);
                this._procEntryField(clearAndCryptedData, 'BytesOfEncryptedData', 'uint', 32);
            });
        }
    });
}

function uuidProcessor() {
    var tfxdUserType = [0x6D, 0x1D, 0x9B, 0x05, 0x42, 0xD5, 0x44, 0xE6, 0x80, 0xE2, 0x14, 0x1D, 0xAF, 0xF7, 0x57, 0xB2];
    var tfrfUserType = [0xD4, 0x80, 0x7E, 0xF2, 0xCA, 0x39, 0x46, 0x95, 0x8E, 0x54, 0x26, 0xCB, 0x9E, 0x46, 0xA7, 0x9F];
    var sepiffUserType = [0xA2, 0x39, 0x4F, 0x52, 0x5A, 0x9B, 0x4f, 0x14, 0xA2, 0x44, 0x6C, 0x42, 0x7C, 0x64, 0x8D, 0xF4];

    if (arrayEqual(this.usertype, tfxdUserType)) {
        this._procFullBox();
        if (this._parsing) {
            this.type = 'tfxd';
        }
        this._procField('fragment_absolute_time', 'uint', this.version === 1 ? 64 : 32);
        this._procField('fragment_duration', 'uint', this.version === 1 ? 64 : 32);
    }

    if (arrayEqual(this.usertype, tfrfUserType)) {
        this._procFullBox();
        if (this._parsing) {
            this.type = 'tfrf';
        }
        this._procField('fragment_count', 'uint', 8);
        this._procEntries('entry', this.fragment_count, function (entry) {
            this._procEntryField(entry, 'fragment_absolute_time', 'uint', this.version === 1 ? 64 : 32);
            this._procEntryField(entry, 'fragment_duration', 'uint', this.version === 1 ? 64 : 32);
        });
    }

    if (arrayEqual(this.usertype, sepiffUserType)) {
        if (this._parsing) {
            this.type = 'sepiff';
        }
        sencProcessor.call(this);
    }
}

function MssFragmentProcessor(config) {

    config = config || {};
    var context = this.context;
    var metricsModel = config.metricsModel;
    var playbackController = config.playbackController;
    var eventBus = config.eventBus;
    var protectionController = config.protectionController;
    var ISOBoxer = config.ISOBoxer;
    var debug = config.debug;
    var mssFragmentMoovProcessor = undefined,
        mssFragmentMoofProcessor = undefined,
        instance = undefined;

    function setup() {
        ISOBoxer.addBoxProcessor('uuid', uuidProcessor);
        ISOBoxer.addBoxProcessor('saio', saioProcessor);
        ISOBoxer.addBoxProcessor('saiz', saizProcessor);
        ISOBoxer.addBoxProcessor('senc', sencProcessor);

        mssFragmentMoovProcessor = (0, _MssFragmentMoovProcessor2['default'])(context).create({ protectionController: protectionController,
            constants: config.constants, ISOBoxer: ISOBoxer });

        mssFragmentMoofProcessor = (0, _MssFragmentMoofProcessor2['default'])(context).create({
            metricsModel: metricsModel,
            playbackController: playbackController,
            ISOBoxer: ISOBoxer,
            eventBus: eventBus,
            debug: debug,
            errHandler: config.errHandler
        });
    }

    function generateMoov(rep) {
        return mssFragmentMoovProcessor.generateMoov(rep);
    }

    function processFragment(e, sp) {
        if (!e || !e.request || !e.response) {
            throw new Error('e parameter is missing or malformed');
        }

        var request = e.request;

        if (request.type === 'MediaSegment') {
            // it's a MediaSegment, let's convert fragment
            mssFragmentMoofProcessor.convertFragment(e, sp);
        } else if (request.type === 'FragmentInfoSegment') {

            // it's a FragmentInfo, ask relative fragment info controller to handle it
            eventBus.trigger(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, {
                fragmentInfo: e,
                streamProcessor: sp
            });

            // Change the sender value to stop event to be propagated (fragment info must not be added to buffer)
            e.sender = null;
        }
    }

    instance = {
        generateMoov: generateMoov,
        processFragment: processFragment
    };

    setup();

    return instance;
}

MssFragmentProcessor.__dashjs_factory_name = 'MssFragmentProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{"./MssEvents":3,"./MssFragmentMoofProcessor":5,"./MssFragmentMoovProcessor":6}],8:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _streamingVoDataChunk = _dereq_('../streaming/vo/DataChunk');

var _streamingVoDataChunk2 = _interopRequireDefault(_streamingVoDataChunk);

var _streamingVoFragmentRequest = _dereq_('../streaming/vo/FragmentRequest');

var _streamingVoFragmentRequest2 = _interopRequireDefault(_streamingVoFragmentRequest);

var _MssFragmentInfoController = _dereq_('./MssFragmentInfoController');

var _MssFragmentInfoController2 = _interopRequireDefault(_MssFragmentInfoController);

var _MssFragmentProcessor = _dereq_('./MssFragmentProcessor');

var _MssFragmentProcessor2 = _interopRequireDefault(_MssFragmentProcessor);

var _parserMssParser = _dereq_('./parser/MssParser');

var _parserMssParser2 = _interopRequireDefault(_parserMssParser);

var _errorsMssErrors = _dereq_('./errors/MssErrors');

var _errorsMssErrors2 = _interopRequireDefault(_errorsMssErrors);

var _streamingVoDashJSError = _dereq_('../streaming/vo/DashJSError');

var _streamingVoDashJSError2 = _interopRequireDefault(_streamingVoDashJSError);

function MssHandler(config) {

    config = config || {};
    var context = this.context;
    var eventBus = config.eventBus;
    var events = config.events;
    var constants = config.constants;
    var initSegmentType = config.initSegmentType;
    var metricsModel = config.metricsModel;
    var playbackController = config.playbackController;
    var protectionController = config.protectionController;
    var mssFragmentProcessor = (0, _MssFragmentProcessor2['default'])(context).create({
        metricsModel: metricsModel,
        playbackController: playbackController,
        protectionController: protectionController,
        eventBus: eventBus,
        constants: constants,
        ISOBoxer: config.ISOBoxer,
        debug: config.debug,
        errHandler: config.errHandler
    });
    var mssParser = undefined,
        instance = undefined;

    function setup() {}

    function onInitializationRequested(e) {
        var streamProcessor = e.sender.getStreamProcessor();
        var request = new _streamingVoFragmentRequest2['default']();
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();

        request.mediaType = representation.adaptation.type;
        request.type = initSegmentType;
        request.range = representation.range;
        request.quality = representation.index;
        request.mediaInfo = streamProcessor.getMediaInfo();
        request.representationId = representation.id;

        var chunk = createDataChunk(request, streamProcessor.getStreamInfo().id, e.type !== events.FRAGMENT_LOADING_PROGRESS);

        try {
            // Generate initialization segment (moov)
            chunk.bytes = mssFragmentProcessor.generateMoov(representation);
        } catch (e) {
            config.errHandler.error(new _streamingVoDashJSError2['default'](e.code, e.message, e.data));
        }

        eventBus.trigger(events.INIT_FRAGMENT_LOADED, {
            chunk: chunk,
            fragmentModel: streamProcessor.getFragmentModel()
        });

        // Change the sender value to stop event to be propagated
        e.sender = null;
    }

    function createDataChunk(request, streamId, endFragment) {
        var chunk = new _streamingVoDataChunk2['default']();

        chunk.streamId = streamId;
        chunk.mediaInfo = request.mediaInfo;
        chunk.segmentType = request.type;
        chunk.start = request.startTime;
        chunk.duration = request.duration;
        chunk.end = chunk.start + chunk.duration;
        chunk.index = request.index;
        chunk.quality = request.quality;
        chunk.representationId = request.representationId;
        chunk.endFragment = endFragment;

        return chunk;
    }

    function startFragmentInfoControllers() {

        var streamController = playbackController.getStreamController();
        if (!streamController) {
            return;
        }

        // Create MssFragmentInfoControllers for each StreamProcessor of active stream (only for audio, video or fragmentedText)
        var processors = streamController.getActiveStreamProcessors();
        processors.forEach(function (processor) {
            if (processor.getType() === constants.VIDEO || processor.getType() === constants.AUDIO || processor.getType() === constants.FRAGMENTED_TEXT) {

                // Check MssFragmentInfoController already registered to StreamProcessor
                var i = undefined;
                var alreadyRegistered = false;
                var externalControllers = processor.getExternalControllers();
                for (i = 0; i < externalControllers.length; i++) {
                    if (externalControllers[i].controllerType && externalControllers[i].controllerType === 'MssFragmentInfoController') {
                        alreadyRegistered = true;
                    }
                }

                if (!alreadyRegistered) {
                    var fragmentInfoController = (0, _MssFragmentInfoController2['default'])(context).create({
                        streamProcessor: processor,
                        eventBus: eventBus,
                        metricsModel: metricsModel,
                        playbackController: playbackController,
                        baseURLController: config.baseURLController,
                        ISOBoxer: config.ISOBoxer,
                        debug: config.debug
                    });
                    fragmentInfoController.initialize();
                    fragmentInfoController.start();
                }
            }
        });
    }

    function onSegmentMediaLoaded(e) {
        if (e.error) {
            return;
        }
        // Process moof to transcode it from MSS to DASH
        var streamProcessor = e.sender.getStreamProcessor();
        mssFragmentProcessor.processFragment(e, streamProcessor);

        // Start MssFragmentInfoControllers in case of start-over streams
        var streamInfo = streamProcessor.getStreamInfo();
        if (!streamInfo.manifestInfo.isDynamic && streamInfo.manifestInfo.DVRWindowSize !== Infinity) {
            startFragmentInfoControllers();
        }
    }

    function onPlaybackPaused() {
        if (playbackController.getIsDynamic() && playbackController.getTime() !== 0) {
            startFragmentInfoControllers();
        }
    }

    function onPlaybackSeekAsked() {
        if (playbackController.getIsDynamic() && playbackController.getTime() !== 0) {
            startFragmentInfoControllers();
        }
    }

    function onTTMLPreProcess(ttmlSubtitles) {
        if (!ttmlSubtitles || !ttmlSubtitles.data) {
            return;
        }

        ttmlSubtitles.data = ttmlSubtitles.data.replace(/http:\/\/www.w3.org\/2006\/10\/ttaf1/gi, 'http://www.w3.org/ns/ttml');
    }

    function registerEvents() {
        eventBus.on(events.INIT_REQUESTED, onInitializationRequested, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.PLAYBACK_PAUSED, onPlaybackPaused, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.PLAYBACK_SEEK_ASKED, onPlaybackSeekAsked, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.FRAGMENT_LOADING_COMPLETED, onSegmentMediaLoaded, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.TTML_TO_PARSE, onTTMLPreProcess, instance);
    }

    function reset() {
        eventBus.off(events.INIT_REQUESTED, onInitializationRequested, this);
        eventBus.off(events.PLAYBACK_PAUSED, onPlaybackPaused, this);
        eventBus.off(events.PLAYBACK_SEEK_ASKED, onPlaybackSeekAsked, this);
        eventBus.off(events.FRAGMENT_LOADING_COMPLETED, onSegmentMediaLoaded, this);
        eventBus.off(events.TTML_TO_PARSE, onTTMLPreProcess, this);
    }

    function createMssParser() {
        mssParser = (0, _parserMssParser2['default'])(context).create(config);
        return mssParser;
    }

    instance = {
        reset: reset,
        createMssParser: createMssParser,
        registerEvents: registerEvents
    };

    setup();

    return instance;
}

MssHandler.__dashjs_factory_name = 'MssHandler';
var factory = dashjs.FactoryMaker.getClassFactory(MssHandler); /* jshint ignore:line */
factory.errors = _errorsMssErrors2['default'];
dashjs.FactoryMaker.updateClassFactory(MssHandler.__dashjs_factory_name, factory); /* jshint ignore:line */
exports['default'] = factory;
/* jshint ignore:line */
module.exports = exports['default'];

},{"../streaming/vo/DashJSError":13,"../streaming/vo/DataChunk":14,"../streaming/vo/FragmentRequest":15,"./MssFragmentInfoController":4,"./MssFragmentProcessor":7,"./errors/MssErrors":9,"./parser/MssParser":11}],9:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coreErrorsErrorsBase = _dereq_('../../core/errors/ErrorsBase');

var _coreErrorsErrorsBase2 = _interopRequireDefault(_coreErrorsErrorsBase);

/**
 * @class
 *
 */

var MssErrors = (function (_ErrorsBase) {
  _inherits(MssErrors, _ErrorsBase);

  function MssErrors() {
    _classCallCheck(this, MssErrors);

    _get(Object.getPrototypeOf(MssErrors.prototype), 'constructor', this).call(this);
    /**
     * Error code returned when no tfrf box is detected in MSS live stream
     */
    this.MSS_NO_TFRF_CODE = 200;
    this.MSS_UNSUPPORTED_CODEC_CODE = 201;
    /**
     * Error message returned when no tfrf box is detected in MSS live stream
     */
    this.MSS_NO_TFRF_MESSAGE = 'Missing tfrf in live media segment';
    this.MSS_UNSUPPORTED_CODEC_MESSAGE = 'Unsupported codec';
  }

  return MssErrors;
})(_coreErrorsErrorsBase2['default']);

var mssErrors = new MssErrors();
exports['default'] = mssErrors;
module.exports = exports['default'];

},{"../../core/errors/ErrorsBase":1}],10:[function(_dereq_,module,exports){
(function (global){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssHandler = _dereq_('./MssHandler');

var _MssHandler2 = _interopRequireDefault(_MssHandler);

// Shove both of these into the global scope
var context = typeof window !== 'undefined' && window || global;

var dashjs = context.dashjs;
if (!dashjs) {
  dashjs = context.dashjs = {};
}

dashjs.MssHandler = _MssHandler2['default'];

exports['default'] = dashjs;
exports.MssHandler = _MssHandler2['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MssHandler":8}],11:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module MssParser
 * @param {Object} config object
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function MssParser(config) {
    config = config || {};
    var BASE64 = config.BASE64;
    var debug = config.debug;
    var constants = config.constants;
    var manifestModel = config.manifestModel;

    var DEFAULT_TIME_SCALE = 10000000.0;
    var SUPPORTED_CODECS = ['AAC', 'AACL', 'AVC1', 'H264', 'TTML', 'DFXP'];
    // MPEG-DASH Role and accessibility mapping according to ETSI TS 103 285 v1.1.1 (section 7.1.2)
    var ROLE = {
        'SUBT': 'alternate',
        'CAPT': 'alternate', // 'CAPT' is commonly equivalent to 'SUBT'
        'DESC': 'main'
    };
    var ACCESSIBILITY = {
        'DESC': '2'
    };
    var samplingFrequencyIndex = {
        96000: 0x0,
        88200: 0x1,
        64000: 0x2,
        48000: 0x3,
        44100: 0x4,
        32000: 0x5,
        24000: 0x6,
        22050: 0x7,
        16000: 0x8,
        12000: 0x9,
        11025: 0xA,
        8000: 0xB,
        7350: 0xC
    };
    var mimeTypeMap = {
        'video': 'video/mp4',
        'audio': 'audio/mp4',
        'text': 'application/mp4'
    };

    var instance = undefined,
        logger = undefined,
        mediaPlayerModel = undefined;

    function setup() {
        logger = debug.getLogger(instance);
        mediaPlayerModel = config.mediaPlayerModel;
    }

    function mapPeriod(smoothStreamingMedia, timescale) {
        var period = {};
        var streams = undefined,
            adaptation = undefined;

        // For each StreamIndex node, create an AdaptationSet element
        period.AdaptationSet_asArray = [];
        streams = smoothStreamingMedia.getElementsByTagName('StreamIndex');
        for (var i = 0; i < streams.length; i++) {
            adaptation = mapAdaptationSet(streams[i], timescale);
            if (adaptation !== null) {
                period.AdaptationSet_asArray.push(adaptation);
            }
        }

        if (period.AdaptationSet_asArray.length > 0) {
            period.AdaptationSet = period.AdaptationSet_asArray.length > 1 ? period.AdaptationSet_asArray : period.AdaptationSet_asArray[0];
        }

        return period;
    }

    function mapAdaptationSet(streamIndex, timescale) {
        var adaptationSet = {};
        var representations = [];
        var segmentTemplate = undefined;
        var qualityLevels = undefined,
            representation = undefined,
            segments = undefined,
            i = undefined;

        adaptationSet.id = streamIndex.getAttribute('Name') ? streamIndex.getAttribute('Name') : streamIndex.getAttribute('Type');
        adaptationSet.contentType = streamIndex.getAttribute('Type');
        adaptationSet.lang = streamIndex.getAttribute('Language') || 'und';
        adaptationSet.mimeType = mimeTypeMap[adaptationSet.contentType];
        adaptationSet.subType = streamIndex.getAttribute('Subtype');
        adaptationSet.maxWidth = streamIndex.getAttribute('MaxWidth');
        adaptationSet.maxHeight = streamIndex.getAttribute('MaxHeight');

        // Map subTypes to MPEG-DASH AdaptationSet role and accessibility (see ETSI TS 103 285 v1.1.1, section 7.1.2)
        if (adaptationSet.subType) {
            if (ROLE[adaptationSet.subType]) {
                var role = {
                    schemeIdUri: 'urn:mpeg:dash:role:2011',
                    value: ROLE[adaptationSet.subType]
                };
                adaptationSet.Role = role;
                adaptationSet.Role_asArray = [role];
            }
            if (ACCESSIBILITY[adaptationSet.subType]) {
                var accessibility = {
                    schemeIdUri: 'urn:tva:metadata:cs:AudioPurposeCS:2007',
                    value: ACCESSIBILITY[adaptationSet.subType]
                };
                adaptationSet.Accessibility = accessibility;
                adaptationSet.Accessibility_asArray = [accessibility];
            }
        }

        // Create a SegmentTemplate with a SegmentTimeline
        segmentTemplate = mapSegmentTemplate(streamIndex, timescale);

        qualityLevels = streamIndex.getElementsByTagName('QualityLevel');
        // For each QualityLevel node, create a Representation element
        for (i = 0; i < qualityLevels.length; i++) {
            // Propagate BaseURL and mimeType
            qualityLevels[i].BaseURL = adaptationSet.BaseURL;
            qualityLevels[i].mimeType = adaptationSet.mimeType;

            // Set quality level id
            qualityLevels[i].Id = adaptationSet.id + '_' + qualityLevels[i].getAttribute('Index');

            // Map Representation to QualityLevel
            representation = mapRepresentation(qualityLevels[i], streamIndex);

            if (representation !== null) {
                // Copy SegmentTemplate into Representation
                representation.SegmentTemplate = segmentTemplate;

                representations.push(representation);
            }
        }

        if (representations.length === 0) {
            return null;
        }

        adaptationSet.Representation = representations.length > 1 ? representations : representations[0];
        adaptationSet.Representation_asArray = representations;

        // Set SegmentTemplate
        adaptationSet.SegmentTemplate = segmentTemplate;

        segments = segmentTemplate.SegmentTimeline.S_asArray;

        return adaptationSet;
    }

    function mapRepresentation(qualityLevel, streamIndex) {
        var representation = {};
        var type = streamIndex.getAttribute('Type');
        var fourCCValue = null;

        representation.id = qualityLevel.Id;
        representation.bandwidth = parseInt(qualityLevel.getAttribute('Bitrate'), 10);
        representation.mimeType = qualityLevel.mimeType;
        representation.width = parseInt(qualityLevel.getAttribute('MaxWidth'), 10);
        representation.height = parseInt(qualityLevel.getAttribute('MaxHeight'), 10);

        fourCCValue = qualityLevel.getAttribute('FourCC');

        // If FourCC not defined at QualityLevel level, then get it from StreamIndex level
        if (fourCCValue === null || fourCCValue === '') {
            fourCCValue = streamIndex.getAttribute('FourCC');
        }

        // If still not defined (optionnal for audio stream, see https://msdn.microsoft.com/en-us/library/ff728116%28v=vs.95%29.aspx),
        // then we consider the stream is an audio AAC stream
        if (fourCCValue === null || fourCCValue === '') {
            if (type === 'audio') {
                fourCCValue = 'AAC';
            } else if (type === 'video') {
                logger.debug('FourCC is not defined whereas it is required for a QualityLevel element for a StreamIndex of type "video"');
                return null;
            }
        }

        // Check if codec is supported
        if (SUPPORTED_CODECS.indexOf(fourCCValue.toUpperCase()) === -1) {
            // Do not send warning
            logger.warn('Codec not supported: ' + fourCCValue);
            return null;
        }

        // Get codecs value according to FourCC field
        if (fourCCValue === 'H264' || fourCCValue === 'AVC1') {
            representation.codecs = getH264Codec(qualityLevel);
        } else if (fourCCValue.indexOf('AAC') >= 0) {
            representation.codecs = getAACCodec(qualityLevel, fourCCValue);
            representation.audioSamplingRate = parseInt(qualityLevel.getAttribute('SamplingRate'), 10);
            representation.audioChannels = parseInt(qualityLevel.getAttribute('Channels'), 10);
        } else if (fourCCValue.indexOf('TTML') || fourCCValue.indexOf('DFXP')) {
            representation.codecs = constants.STPP;
        }

        representation.codecPrivateData = '' + qualityLevel.getAttribute('CodecPrivateData');
        representation.BaseURL = qualityLevel.BaseURL;

        return representation;
    }

    function getH264Codec(qualityLevel) {
        var codecPrivateData = qualityLevel.getAttribute('CodecPrivateData').toString();
        var nalHeader = undefined,
            avcoti = undefined;

        // Extract from the CodecPrivateData field the hexadecimal representation of the following
        // three bytes in the sequence parameter set NAL unit.
        // => Find the SPS nal header
        nalHeader = /00000001[0-9]7/.exec(codecPrivateData);
        // => Find the 6 characters after the SPS nalHeader (if it exists)
        avcoti = nalHeader && nalHeader[0] ? codecPrivateData.substr(codecPrivateData.indexOf(nalHeader[0]) + 10, 6) : undefined;

        return 'avc1.' + avcoti;
    }

    function getAACCodec(qualityLevel, fourCCValue) {
        var samplingRate = parseInt(qualityLevel.getAttribute('SamplingRate'), 10);
        var codecPrivateData = qualityLevel.getAttribute('CodecPrivateData').toString();
        var objectType = 0;
        var codecPrivateDataHex = undefined,
            arr16 = undefined,
            indexFreq = undefined,
            extensionSamplingFrequencyIndex = undefined;

        //chrome problem, in implicit AAC HE definition, so when AACH is detected in FourCC
        //set objectType to 5 => strange, it should be 2
        if (fourCCValue === 'AACH') {
            objectType = 0x05;
        }
        //if codecPrivateData is empty, build it :
        if (codecPrivateData === undefined || codecPrivateData === '') {
            objectType = 0x02; //AAC Main Low Complexity => object Type = 2
            indexFreq = samplingFrequencyIndex[samplingRate];
            if (fourCCValue === 'AACH') {
                // 4 bytes :     XXXXX         XXXX          XXXX             XXXX                  XXXXX      XXX   XXXXXXX
                //           ' ObjectType' 'Freq Index' 'Channels value'   'Extens Sampl Freq'  'ObjectType'  'GAS' 'alignment = 0'
                objectType = 0x05; // High Efficiency AAC Profile = object Type = 5 SBR
                codecPrivateData = new Uint8Array(4);
                extensionSamplingFrequencyIndex = samplingFrequencyIndex[samplingRate * 2]; // in HE AAC Extension Sampling frequence
                // equals to SamplingRate*2
                //Freq Index is present for 3 bits in the first byte, last bit is in the second
                codecPrivateData[0] = objectType << 3 | indexFreq >> 1;
                codecPrivateData[1] = indexFreq << 7 | qualityLevel.Channels << 3 | extensionSamplingFrequencyIndex >> 1;
                codecPrivateData[2] = extensionSamplingFrequencyIndex << 7 | 0x02 << 2; // origin object type equals to 2 => AAC Main Low Complexity
                codecPrivateData[3] = 0x0; //alignment bits

                arr16 = new Uint16Array(2);
                arr16[0] = (codecPrivateData[0] << 8) + codecPrivateData[1];
                arr16[1] = (codecPrivateData[2] << 8) + codecPrivateData[3];
                //convert decimal to hex value
                codecPrivateDataHex = arr16[0].toString(16);
                codecPrivateDataHex = arr16[0].toString(16) + arr16[1].toString(16);
            } else {
                // 2 bytes :     XXXXX         XXXX          XXXX              XXX
                //           ' ObjectType' 'Freq Index' 'Channels value'   'GAS = 000'
                codecPrivateData = new Uint8Array(2);
                //Freq Index is present for 3 bits in the first byte, last bit is in the second
                codecPrivateData[0] = objectType << 3 | indexFreq >> 1;
                codecPrivateData[1] = indexFreq << 7 | parseInt(qualityLevel.getAttribute('Channels'), 10) << 3;
                // put the 2 bytes in an 16 bits array
                arr16 = new Uint16Array(1);
                arr16[0] = (codecPrivateData[0] << 8) + codecPrivateData[1];
                //convert decimal to hex value
                codecPrivateDataHex = arr16[0].toString(16);
            }

            codecPrivateData = '' + codecPrivateDataHex;
            codecPrivateData = codecPrivateData.toUpperCase();
            qualityLevel.setAttribute('CodecPrivateData', codecPrivateData);
        } else if (objectType === 0) {
            objectType = (parseInt(codecPrivateData.substr(0, 2), 16) & 0xF8) >> 3;
        }

        return 'mp4a.40.' + objectType;
    }

    function mapSegmentTemplate(streamIndex, timescale) {
        var segmentTemplate = {};
        var mediaUrl = undefined,
            streamIndexTimeScale = undefined;

        mediaUrl = streamIndex.getAttribute('Url').replace('{bitrate}', '$Bandwidth$');
        mediaUrl = mediaUrl.replace('{start time}', '$Time$');

        streamIndexTimeScale = streamIndex.getAttribute('TimeScale');
        streamIndexTimeScale = streamIndexTimeScale ? parseFloat(streamIndexTimeScale) : timescale;

        segmentTemplate.media = mediaUrl;
        segmentTemplate.timescale = streamIndexTimeScale;

        segmentTemplate.SegmentTimeline = mapSegmentTimeline(streamIndex, segmentTemplate.timescale);

        return segmentTemplate;
    }

    function mapSegmentTimeline(streamIndex, timescale) {
        var segmentTimeline = {};
        var chunks = streamIndex.getElementsByTagName('c');
        var segments = [];
        var segment = undefined,
            prevSegment = undefined,
            tManifest = undefined,
            i = undefined,
            j = undefined,
            r = undefined;
        var duration = 0;

        for (i = 0; i < chunks.length; i++) {
            segment = {};

            // Get time 't' attribute value
            tManifest = chunks[i].getAttribute('t');

            // => segment.tManifest = original timestamp value as a string (for constructing the fragment request url, see DashHandler)
            // => segment.t = number value of timestamp (maybe rounded value, but only for 0.1 microsecond)
            segment.tManifest = parseFloat(tManifest);
            segment.t = parseFloat(tManifest);

            // Get duration 'd' attribute value
            segment.d = parseFloat(chunks[i].getAttribute('d'));

            // If 't' not defined for first segment then t=0
            if (i === 0 && !segment.t) {
                segment.t = 0;
            }

            if (i > 0) {
                prevSegment = segments[segments.length - 1];
                // Update previous segment duration if not defined
                if (!prevSegment.d) {
                    if (prevSegment.tManifest) {
                        prevSegment.d = parseFloat(tManifest) - parseFloat(prevSegment.tManifest);
                    } else {
                        prevSegment.d = segment.t - prevSegment.t;
                    }
                    duration += prevSegment.d;
                }
                // Set segment absolute timestamp if not set in manifest
                if (!segment.t) {
                    if (prevSegment.tManifest) {
                        segment.tManifest = parseFloat(prevSegment.tManifest) + prevSegment.d;
                        segment.t = parseFloat(segment.tManifest);
                    } else {
                        segment.t = prevSegment.t + prevSegment.d;
                    }
                }
            }

            if (segment.d) {
                duration += segment.d;
            }

            // Create new segment
            segments.push(segment);

            // Support for 'r' attribute (i.e. "repeat" as in MPEG-DASH)
            r = parseFloat(chunks[i].getAttribute('r'));
            if (r) {

                for (j = 0; j < r - 1; j++) {
                    prevSegment = segments[segments.length - 1];
                    segment = {};
                    segment.t = prevSegment.t + prevSegment.d;
                    segment.d = prevSegment.d;
                    if (prevSegment.tManifest) {
                        segment.tManifest = parseFloat(prevSegment.tManifest) + prevSegment.d;
                    }
                    duration += segment.d;
                    segments.push(segment);
                }
            }
        }

        segmentTimeline.S = segments;
        segmentTimeline.S_asArray = segments;
        segmentTimeline.duration = duration / timescale;

        return segmentTimeline;
    }

    function getKIDFromProtectionHeader(protectionHeader) {
        var prHeader = undefined,
            wrmHeader = undefined,
            xmlReader = undefined,
            KID = undefined;

        // Get PlayReady header as byte array (base64 decoded)
        prHeader = BASE64.decodeArray(protectionHeader.firstChild.data);

        // Get Right Management header (WRMHEADER) from PlayReady header
        wrmHeader = getWRMHeaderFromPRHeader(prHeader);

        // Convert from multi-byte to unicode
        wrmHeader = new Uint16Array(wrmHeader.buffer);

        // Convert to string
        wrmHeader = String.fromCharCode.apply(null, wrmHeader);

        // Parse <WRMHeader> to get KID field value
        xmlReader = new DOMParser().parseFromString(wrmHeader, 'application/xml');
        KID = xmlReader.querySelector('KID').textContent;

        // Get KID (base64 decoded) as byte array
        KID = BASE64.decodeArray(KID);

        // Convert UUID from little-endian to big-endian
        convertUuidEndianness(KID);

        return KID;
    }

    function getWRMHeaderFromPRHeader(prHeader) {
        var length = undefined,
            recordCount = undefined,
            recordType = undefined,
            recordLength = undefined,
            recordValue = undefined;
        var i = 0;

        // Parse PlayReady header

        // Length - 32 bits (LE format)
        length = (prHeader[i + 3] << 24) + (prHeader[i + 2] << 16) + (prHeader[i + 1] << 8) + prHeader[i];
        i += 4;

        // Record count - 16 bits (LE format)
        recordCount = (prHeader[i + 1] << 8) + prHeader[i];
        i += 2;

        // Parse records
        while (i < prHeader.length) {
            // Record type - 16 bits (LE format)
            recordType = (prHeader[i + 1] << 8) + prHeader[i];
            i += 2;

            // Check if Rights Management header (record type = 0x01)
            if (recordType === 0x01) {

                // Record length - 16 bits (LE format)
                recordLength = (prHeader[i + 1] << 8) + prHeader[i];
                i += 2;

                // Record value => contains <WRMHEADER>
                recordValue = new Uint8Array(recordLength);
                recordValue.set(prHeader.subarray(i, i + recordLength));
                return recordValue;
            }
        }

        return null;
    }

    function convertUuidEndianness(uuid) {
        swapBytes(uuid, 0, 3);
        swapBytes(uuid, 1, 2);
        swapBytes(uuid, 4, 5);
        swapBytes(uuid, 6, 7);
    }

    function swapBytes(bytes, pos1, pos2) {
        var temp = bytes[pos1];
        bytes[pos1] = bytes[pos2];
        bytes[pos2] = temp;
    }

    function createPRContentProtection(protectionHeader) {
        var pro = {
            __text: protectionHeader.firstChild.data,
            __prefix: 'mspr'
        };
        return {
            schemeIdUri: 'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95',
            value: 'com.microsoft.playready',
            pro: pro,
            pro_asArray: pro
        };
    }

    function createWidevineContentProtection(protectionHeader, KID) {
        // Create Widevine CENC header (Protocol Buffer) with KID value
        var wvCencHeader = new Uint8Array(2 + KID.length);
        wvCencHeader[0] = 0x12;
        wvCencHeader[1] = 0x10;
        wvCencHeader.set(KID, 2);

        // Create a pssh box
        var length = 12 /* box length, type, version and flags */ + 16 /* SystemID */ + 4 /* data length */ + wvCencHeader.length;
        var pssh = new Uint8Array(length);
        var i = 0;

        // Set box length value
        pssh[i++] = (length & 0xFF000000) >> 24;
        pssh[i++] = (length & 0x00FF0000) >> 16;
        pssh[i++] = (length & 0x0000FF00) >> 8;
        pssh[i++] = length & 0x000000FF;

        // Set type ('pssh'), version (0) and flags (0)
        pssh.set([0x70, 0x73, 0x73, 0x68, 0x00, 0x00, 0x00, 0x00], i);
        i += 8;

        // Set SystemID ('edef8ba9-79d6-4ace-a3c8-27dcd51d21ed')
        pssh.set([0xed, 0xef, 0x8b, 0xa9, 0x79, 0xd6, 0x4a, 0xce, 0xa3, 0xc8, 0x27, 0xdc, 0xd5, 0x1d, 0x21, 0xed], i);
        i += 16;

        // Set data length value
        pssh[i++] = (wvCencHeader.length & 0xFF000000) >> 24;
        pssh[i++] = (wvCencHeader.length & 0x00FF0000) >> 16;
        pssh[i++] = (wvCencHeader.length & 0x0000FF00) >> 8;
        pssh[i++] = wvCencHeader.length & 0x000000FF;

        // Copy Widevine CENC header
        pssh.set(wvCencHeader, i);

        // Convert to BASE64 string
        pssh = String.fromCharCode.apply(null, pssh);
        pssh = BASE64.encodeASCII(pssh);

        return {
            schemeIdUri: 'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
            value: 'com.widevine.alpha',
            pssh: {
                __text: pssh
            }
        };
    }

    function processManifest(xmlDoc, manifestLoadedTime) {
        var manifest = {};
        var contentProtections = [];
        var smoothStreamingMedia = xmlDoc.getElementsByTagName('SmoothStreamingMedia')[0];
        var protection = xmlDoc.getElementsByTagName('Protection')[0];
        var protectionHeader = null;
        var period = undefined,
            adaptations = undefined,
            contentProtection = undefined,
            KID = undefined,
            timestampOffset = undefined,
            startTime = undefined,
            segments = undefined,
            timescale = undefined,
            i = undefined,
            j = undefined;

        // Set manifest node properties
        manifest.protocol = 'MSS';
        manifest.profiles = 'urn:mpeg:dash:profile:isoff-live:2011';
        manifest.type = smoothStreamingMedia.getAttribute('IsLive') === 'TRUE' ? 'dynamic' : 'static';
        timescale = smoothStreamingMedia.getAttribute('TimeScale');
        manifest.timescale = timescale ? parseFloat(timescale) : DEFAULT_TIME_SCALE;
        var dvrWindowLength = parseFloat(smoothStreamingMedia.getAttribute('DVRWindowLength'));
        if (dvrWindowLength === 0 && smoothStreamingMedia.getAttribute('CanSeek') === 'TRUE') {
            dvrWindowLength = Infinity;
        }
        if (dvrWindowLength > 0) {
            manifest.timeShiftBufferDepth = dvrWindowLength / manifest.timescale;
        }

        var duration = parseFloat(smoothStreamingMedia.getAttribute('Duration'));
        manifest.mediaPresentationDuration = duration === 0 ? Infinity : duration / manifest.timescale;
        manifest.minBufferTime = mediaPlayerModel.getStableBufferTime();
        manifest.ttmlTimeIsRelative = true;

        // Live manifest with Duration = start-over
        if (manifest.type === 'dynamic' && duration > 0) {
            manifest.type = 'static';
            // We set timeShiftBufferDepth to initial duration, to be used by MssFragmentController to update segment timeline
            manifest.timeShiftBufferDepth = duration / manifest.timescale;
            // Duration will be set according to current segment timeline duration (see below)
        }

        // In case of live streams, set availabilityStartTime property according to DVRWindowLength
        if (manifest.type === 'dynamic' && manifest.timeShiftBufferDepth < Infinity) {
            manifest.availabilityStartTime = new Date(manifestLoadedTime.getTime() - manifest.timeShiftBufferDepth * 1000);
            manifest.refreshManifestOnSwitchTrack = true;
            manifest.doNotUpdateDVRWindowOnBufferUpdated = true; // DVRWindow is update by MssFragmentMoofPocessor based on tfrf boxes
            manifest.ignorePostponeTimePeriod = true; // Never update manifest
        }

        // Map period node to manifest root node
        manifest.Period = mapPeriod(smoothStreamingMedia, manifest.timescale);
        manifest.Period_asArray = [manifest.Period];

        // Initialize period start time
        period = manifest.Period;
        period.start = 0;

        // Uncomment to test live to static manifests
        // if (manifest.type !== 'static') {
        //     manifest.type = 'static';
        //     manifest.mediaPresentationDuration = manifest.timeShiftBufferDepth;
        //     manifest.timeShiftBufferDepth = null;
        // }

        // ContentProtection node
        if (protection !== undefined) {
            protectionHeader = xmlDoc.getElementsByTagName('ProtectionHeader')[0];

            // Some packagers put newlines into the ProtectionHeader base64 string, which is not good
            // because this cannot be correctly parsed. Let's just filter out any newlines found in there.
            protectionHeader.firstChild.data = protectionHeader.firstChild.data.replace(/\n|\r/g, '');

            // Get KID (in CENC format) from protection header
            KID = getKIDFromProtectionHeader(protectionHeader);

            // Create ContentProtection for PlayReady
            contentProtection = createPRContentProtection(protectionHeader);
            contentProtection['cenc:default_KID'] = KID;
            contentProtections.push(contentProtection);

            // Create ContentProtection for Widevine (as a CENC protection)
            contentProtection = createWidevineContentProtection(protectionHeader, KID);
            contentProtection['cenc:default_KID'] = KID;
            contentProtections.push(contentProtection);

            manifest.ContentProtection = contentProtections;
            manifest.ContentProtection_asArray = contentProtections;
        }

        adaptations = period.AdaptationSet_asArray;

        for (i = 0; i < adaptations.length; i += 1) {
            adaptations[i].SegmentTemplate.initialization = '$Bandwidth$';
            // Propagate content protection information into each adaptation
            if (manifest.ContentProtection !== undefined) {
                adaptations[i].ContentProtection = manifest.ContentProtection;
                adaptations[i].ContentProtection_asArray = manifest.ContentProtection_asArray;
            }

            if (manifest.type === 'dynamic') {
                // Set availabilityStartTime for infinite DVR Window from segment timeline duration
                if (manifest.timeShiftBufferDepth === Infinity) {
                    manifest.availabilityStartTime = new Date(manifestLoadedTime.getTime() - adaptations[i].SegmentTemplate.SegmentTimeline.duration * 1000);
                }
                // Match timeShiftBufferDepth to video segment timeline duration
                if (manifest.timeShiftBufferDepth > 0 && manifest.timeShiftBufferDepth !== Infinity && adaptations[i].contentType === 'video' && manifest.timeShiftBufferDepth > adaptations[i].SegmentTemplate.SegmentTimeline.duration) {
                    manifest.timeShiftBufferDepth = adaptations[i].SegmentTemplate.SegmentTimeline.duration;
                }
            }
        }

        if (manifest.timeShiftBufferDepth < manifest.minBufferTime) {
            manifest.minBufferTime = manifest.timeShiftBufferDepth;
        }

        // Delete Content Protection under root manifest node
        delete manifest.ContentProtection;
        delete manifest.ContentProtection_asArray;

        // In case of VOD streams, check if start time is greater than 0
        // Then determine timestamp offset according to higher audio/video start time
        // (use case = live stream delinearization)
        if (manifest.type === 'static') {
            // In case of start-over stream and manifest reloading (due to track switch)
            // we consider previous timestampOffset to keep timelines synchronized
            var prevManifest = manifestModel.getValue();
            if (prevManifest && prevManifest.timestampOffset) {
                timestampOffset = prevManifest.timestampOffset;
            } else {
                for (i = 0; i < adaptations.length; i++) {
                    if (adaptations[i].contentType === 'audio' || adaptations[i].contentType === 'video') {
                        segments = adaptations[i].SegmentTemplate.SegmentTimeline.S_asArray;
                        startTime = segments[0].t / adaptations[i].SegmentTemplate.timescale;
                        if (timestampOffset === undefined) {
                            timestampOffset = startTime;
                        }
                        timestampOffset = Math.min(timestampOffset, startTime);
                        // Correct content duration according to minimum adaptation's segment timeline duration
                        // in order to force <video> element sending 'ended' event
                        manifest.mediaPresentationDuration = Math.min(manifest.mediaPresentationDuration, adaptations[i].SegmentTemplate.SegmentTimeline.duration);
                    }
                }
            }
            // Patch segment templates timestamps and determine period start time (since audio/video should not be aligned to 0)
            if (timestampOffset > 0) {
                manifest.timestampOffset = timestampOffset;
                for (i = 0; i < adaptations.length; i++) {
                    segments = adaptations[i].SegmentTemplate.SegmentTimeline.S_asArray;
                    for (j = 0; j < segments.length; j++) {
                        if (!segments[j].tManifest) {
                            segments[j].tManifest = segments[j].t;
                        }
                        segments[j].t -= timestampOffset * adaptations[i].SegmentTemplate.timescale;
                    }
                    if (adaptations[i].contentType === 'audio' || adaptations[i].contentType === 'video') {
                        period.start = Math.max(segments[0].t, period.start);
                        adaptations[i].SegmentTemplate.presentationTimeOffset = period.start;
                    }
                }
                period.start /= manifest.timescale;
            }
        }

        // Floor the duration to get around precision differences between segments timestamps and MSE buffer timestamps
        // and the avoid 'ended' event not being raised
        manifest.mediaPresentationDuration = Math.floor(manifest.mediaPresentationDuration * 1000) / 1000;
        period.duration = manifest.mediaPresentationDuration;

        return manifest;
    }

    function parseDOM(data) {
        var xmlDoc = null;

        if (window.DOMParser) {
            var parser = new window.DOMParser();

            xmlDoc = parser.parseFromString(data, 'text/xml');
            if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
                throw new Error('parsing the manifest failed');
            }
        }

        return xmlDoc;
    }

    function getMatchers() {
        return null;
    }

    function getIron() {
        return null;
    }

    function internalParse(data) {
        var xmlDoc = null;
        var manifest = null;

        var startTime = window.performance.now();

        // Parse the MSS XML manifest
        xmlDoc = parseDOM(data);

        var xmlParseTime = window.performance.now();

        if (xmlDoc === null) {
            return null;
        }

        // Convert MSS manifest into DASH manifest
        manifest = processManifest(xmlDoc, new Date());

        var mss2dashTime = window.performance.now();

        logger.info('Parsing complete: (xmlParsing: ' + (xmlParseTime - startTime).toPrecision(3) + 'ms, mss2dash: ' + (mss2dashTime - xmlParseTime).toPrecision(3) + 'ms, total: ' + ((mss2dashTime - startTime) / 1000).toPrecision(3) + 's)');

        return manifest;
    }

    instance = {
        parse: internalParse,
        getMatchers: getMatchers,
        getIron: getIron
    };

    setup();

    return instance;
}

MssParser.__dashjs_factory_name = 'MssParser';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssParser);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],12:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coreEventsEventsBase = _dereq_('../core/events/EventsBase');

var _coreEventsEventsBase2 = _interopRequireDefault(_coreEventsEventsBase);

/**
 * @class
 *
 */

var MediaPlayerEvents = (function (_EventsBase) {
  _inherits(MediaPlayerEvents, _EventsBase);

  /**
   * @description Public facing external events to be used when developing a player that implements dash.js.
   */

  function MediaPlayerEvents() {
    _classCallCheck(this, MediaPlayerEvents);

    _get(Object.getPrototypeOf(MediaPlayerEvents.prototype), 'constructor', this).call(this);
    /**
     * Triggered when playback will not start yet
     * as the MPD's availabilityStartTime is in the future.
     * Check delay property in payload to determine time before playback will start.
     */
    this.AST_IN_FUTURE = 'astInFuture';

    /**
     * Triggered when the video element's buffer state changes to stalled.
     * Check mediaType in payload to determine type (Video, Audio, FragmentedText).
     * @event MediaPlayerEvents#BUFFER_EMPTY
     */
    this.BUFFER_EMPTY = 'bufferStalled';

    /**
     * Triggered when the video element's buffer state changes to loaded.
     * Check mediaType in payload to determine type (Video, Audio, FragmentedText).
     * @event MediaPlayerEvents#BUFFER_LOADED
     */
    this.BUFFER_LOADED = 'bufferLoaded';

    /**
     * Triggered when the video element's buffer state changes, either stalled or loaded. Check payload for state.
     * @event MediaPlayerEvents#BUFFER_LEVEL_STATE_CHANGED
     */
    this.BUFFER_LEVEL_STATE_CHANGED = 'bufferStateChanged';

    /**
     * Triggered when there is an error from the element or MSE source buffer.
     * @event MediaPlayerEvents#ERROR
     */
    this.ERROR = 'error';

    /**
     * Triggered when a fragment download has completed.
     * @event MediaPlayerEvents#FRAGMENT_LOADING_COMPLETED
     */
    this.FRAGMENT_LOADING_COMPLETED = 'fragmentLoadingCompleted';

    /**
     * Triggered when a partial fragment download has completed.
     * @event MediaPlayerEvents#FRAGMENT_LOADING_PROGRESS
     */
    this.FRAGMENT_LOADING_PROGRESS = 'fragmentLoadingProgress';
    /**
     * Triggered when a fragment download has started.
     * @event MediaPlayerEvents#FRAGMENT_LOADING_STARTED
     */
    this.FRAGMENT_LOADING_STARTED = 'fragmentLoadingStarted';

    /**
     * Triggered when a fragment download is abandoned due to detection of slow download base on the ABR abandon rule..
     * @event MediaPlayerEvents#FRAGMENT_LOADING_ABANDONED
     */
    this.FRAGMENT_LOADING_ABANDONED = 'fragmentLoadingAbandoned';

    /**
     * Triggered when {@link module:Debug} logger methods are called.
     * @event MediaPlayerEvents#LOG
     */
    this.LOG = 'log';

    //TODO refactor with internal event
    /**
     * Triggered when the manifest load is complete
     * @event MediaPlayerEvents#MANIFEST_LOADED
     */
    this.MANIFEST_LOADED = 'manifestLoaded';

    /**
     * Triggered anytime there is a change to the overall metrics.
     * @event MediaPlayerEvents#METRICS_CHANGED
     */
    this.METRICS_CHANGED = 'metricsChanged';

    /**
     * Triggered when an individual metric is added, updated or cleared.
     * @event MediaPlayerEvents#METRIC_CHANGED
     */
    this.METRIC_CHANGED = 'metricChanged';

    /**
     * Triggered every time a new metric is added.
     * @event MediaPlayerEvents#METRIC_ADDED
     */
    this.METRIC_ADDED = 'metricAdded';

    /**
     * Triggered every time a metric is updated.
     * @event MediaPlayerEvents#METRIC_UPDATED
     */
    this.METRIC_UPDATED = 'metricUpdated';

    /**
     * Triggered at the stream end of a period.
     * @event MediaPlayerEvents#PERIOD_SWITCH_COMPLETED
     */
    this.PERIOD_SWITCH_COMPLETED = 'periodSwitchCompleted';

    /**
     * Triggered when a new period starts.
     * @event MediaPlayerEvents#PERIOD_SWITCH_STARTED
     */
    this.PERIOD_SWITCH_STARTED = 'periodSwitchStarted';

    /**
     * Triggered when an ABR up /down switch is initiated; either by user in manual mode or auto mode via ABR rules.
     * @event MediaPlayerEvents#QUALITY_CHANGE_REQUESTED
     */
    this.QUALITY_CHANGE_REQUESTED = 'qualityChangeRequested';

    /**
     * Triggered when the new ABR quality is being rendered on-screen.
     * @event MediaPlayerEvents#QUALITY_CHANGE_RENDERED
     */
    this.QUALITY_CHANGE_RENDERED = 'qualityChangeRendered';

    /**
     * Triggered when the new track is being rendered.
     * @event MediaPlayerEvents#TRACK_CHANGE_RENDERED
     */
    this.TRACK_CHANGE_RENDERED = 'trackChangeRendered';

    /**
     * Triggered when the source is setup and ready.
     * @event MediaPlayerEvents#SOURCE_INITIALIZED
     */
    this.SOURCE_INITIALIZED = 'sourceInitialized';

    /**
     * Triggered when a stream (period) is loaded
     * @event MediaPlayerEvents#STREAM_INITIALIZED
     */
    this.STREAM_INITIALIZED = 'streamInitialized';

    /**
     * Triggered when the player has been reset.
     * @event MediaPlayerEvents#STREAM_TEARDOWN_COMPLETE
     */
    this.STREAM_TEARDOWN_COMPLETE = 'streamTeardownComplete';

    /**
     * Triggered once all text tracks detected in the MPD are added to the video element.
     * @event MediaPlayerEvents#TEXT_TRACKS_ADDED
     */
    this.TEXT_TRACKS_ADDED = 'allTextTracksAdded';

    /**
     * Triggered when a text track is added to the video element's TextTrackList
     * @event MediaPlayerEvents#TEXT_TRACK_ADDED
     */
    this.TEXT_TRACK_ADDED = 'textTrackAdded';

    /**
     * Triggered when a ttml chunk is parsed.
     * @event MediaPlayerEvents#TTML_PARSED
     */
    this.TTML_PARSED = 'ttmlParsed';

    /**
     * Triggered when a ttml chunk has to be parsed.
     * @event MediaPlayerEvents#TTML_TO_PARSE
     */
    this.TTML_TO_PARSE = 'ttmlToParse';

    /**
     * Triggered when a caption is rendered.
     * @event MediaPlayerEvents#CAPTION_RENDERED
     */
    this.CAPTION_RENDERED = 'captionRendered';

    /**
     * Triggered when the caption container is resized.
     * @event MediaPlayerEvents#CAPTION_CONTAINER_RESIZE
     */
    this.CAPTION_CONTAINER_RESIZE = 'captionContainerResize';

    /**
     * Sent when enough data is available that the media can be played,
     * at least for a couple of frames.  This corresponds to the
     * HAVE_ENOUGH_DATA readyState.
     * @event MediaPlayerEvents#CAN_PLAY
     */
    this.CAN_PLAY = 'canPlay';

    /**
     * Sent when playback completes.
     * @event MediaPlayerEvents#PLAYBACK_ENDED
     */
    this.PLAYBACK_ENDED = 'playbackEnded';

    /**
     * Sent when an error occurs.  The element's error
     * attribute contains more information.
     * @event MediaPlayerEvents#PLAYBACK_ERROR
     */
    this.PLAYBACK_ERROR = 'playbackError';

    /**
     * Sent when playback is not allowed (for example if user gesture is needed).
     * @event MediaPlayerEvents#PLAYBACK_NOT_ALLOWED
     */
    this.PLAYBACK_NOT_ALLOWED = 'playbackNotAllowed';

    /**
     * The media's metadata has finished loading; all attributes now
     * contain as much useful information as they're going to.
     * @event MediaPlayerEvents#PLAYBACK_METADATA_LOADED
     */
    this.PLAYBACK_METADATA_LOADED = 'playbackMetaDataLoaded';

    /**
     * Sent when playback is paused.
     * @event MediaPlayerEvents#PLAYBACK_PAUSED
     */
    this.PLAYBACK_PAUSED = 'playbackPaused';

    /**
     * Sent when the media begins to play (either for the first time, after having been paused,
     * or after ending and then restarting).
     *
     * @event MediaPlayerEvents#PLAYBACK_PLAYING
     */
    this.PLAYBACK_PLAYING = 'playbackPlaying';

    /**
     * Sent periodically to inform interested parties of progress downloading
     * the media. Information about the current amount of the media that has
     * been downloaded is available in the media element's buffered attribute.
     * @event MediaPlayerEvents#PLAYBACK_PROGRESS
     */
    this.PLAYBACK_PROGRESS = 'playbackProgress';

    /**
     * Sent when the playback speed changes.
     * @event MediaPlayerEvents#PLAYBACK_RATE_CHANGED
     */
    this.PLAYBACK_RATE_CHANGED = 'playbackRateChanged';

    /**
     * Sent when a seek operation completes.
     * @event MediaPlayerEvents#PLAYBACK_SEEKED
     */
    this.PLAYBACK_SEEKED = 'playbackSeeked';

    /**
     * Sent when a seek operation begins.
     * @event MediaPlayerEvents#PLAYBACK_SEEKING
     */
    this.PLAYBACK_SEEKING = 'playbackSeeking';

    /**
     * Sent when a seek operation has been asked.
     * @event MediaPlayerEvents#PLAYBACK_SEEK_ASKED
     */
    this.PLAYBACK_SEEK_ASKED = 'playbackSeekAsked';

    /**
     * Sent when the video element reports stalled
     * @event MediaPlayerEvents#PLAYBACK_STALLED
     */
    this.PLAYBACK_STALLED = 'playbackStalled';

    /**
     * Sent when playback of the media starts after having been paused;
     * that is, when playback is resumed after a prior pause event.
     *
     * @event MediaPlayerEvents#PLAYBACK_STARTED
     */
    this.PLAYBACK_STARTED = 'playbackStarted';

    /**
     * The time indicated by the element's currentTime attribute has changed.
     * @event MediaPlayerEvents#PLAYBACK_TIME_UPDATED
     */
    this.PLAYBACK_TIME_UPDATED = 'playbackTimeUpdated';

    /**
     * Sent when the media playback has stopped because of a temporary lack of data.
     *
     * @event MediaPlayerEvents#PLAYBACK_WAITING
     */
    this.PLAYBACK_WAITING = 'playbackWaiting';

    /**
     * Manifest validity changed - As a result of an MPD validity expiration event.
     * @event MediaPlayerEvents#MANIFEST_VALIDITY_CHANGED
     */
    this.MANIFEST_VALIDITY_CHANGED = 'manifestValidityChanged';
  }

  return MediaPlayerEvents;
})(_coreEventsEventsBase2['default']);

var mediaPlayerEvents = new MediaPlayerEvents();
exports['default'] = mediaPlayerEvents;
module.exports = exports['default'];

},{"../core/events/EventsBase":2}],13:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashJSError = function DashJSError(code, message, data) {
  _classCallCheck(this, DashJSError);

  this.code = code || null;
  this.message = message || null;
  this.data = data || null;
};

exports["default"] = DashJSError;
module.exports = exports["default"];

},{}],14:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @class
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataChunk =
//Represents a data structure that keep all the necessary info about a single init/media segment
function DataChunk() {
  _classCallCheck(this, DataChunk);

  this.streamId = null;
  this.mediaInfo = null;
  this.segmentType = null;
  this.quality = NaN;
  this.index = NaN;
  this.bytes = null;
  this.start = NaN;
  this.end = NaN;
  this.duration = NaN;
  this.representationId = null;
  this.endFragment = null;
};

exports["default"] = DataChunk;
module.exports = exports["default"];

},{}],15:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FragmentRequest = function FragmentRequest() {
  _classCallCheck(this, FragmentRequest);

  this.action = FragmentRequest.ACTION_DOWNLOAD;
  this.startTime = NaN;
  this.mediaType = null;
  this.mediaInfo = null;
  this.type = null;
  this.duration = NaN;
  this.timescale = NaN;
  this.range = null;
  this.url = null;
  this.serviceLocation = null;
  this.requestStartDate = null;
  this.firstByteDate = null;
  this.requestEndDate = null;
  this.quality = NaN;
  this.index = NaN;
  this.availabilityStartTime = null;
  this.availabilityEndTime = null;
  this.wallStartTime = null;
  this.bytesLoaded = NaN;
  this.bytesTotal = NaN;
  this.delayLoadingTime = NaN;
  this.responseType = 'arraybuffer';
  this.representationId = null;
};

FragmentRequest.ACTION_DOWNLOAD = 'download';
FragmentRequest.ACTION_COMPLETE = 'complete';

exports['default'] = FragmentRequest;
module.exports = exports['default'];

},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJJOi9tYXRlcmlhbHMoREFTSCkvcHJvamVjdC9kYXNoLmpzL3NyYy9jb3JlL2Vycm9ycy9FcnJvcnNCYXNlLmpzIiwiSTovbWF0ZXJpYWxzKERBU0gpL3Byb2plY3QvZGFzaC5qcy9zcmMvY29yZS9ldmVudHMvRXZlbnRzQmFzZS5qcyIsIkk6L21hdGVyaWFscyhEQVNIKS9wcm9qZWN0L2Rhc2guanMvc3JjL21zcy9Nc3NFdmVudHMuanMiLCJJOi9tYXRlcmlhbHMoREFTSCkvcHJvamVjdC9kYXNoLmpzL3NyYy9tc3MvTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlci5qcyIsIkk6L21hdGVyaWFscyhEQVNIKS9wcm9qZWN0L2Rhc2guanMvc3JjL21zcy9Nc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IuanMiLCJJOi9tYXRlcmlhbHMoREFTSCkvcHJvamVjdC9kYXNoLmpzL3NyYy9tc3MvTXNzRnJhZ21lbnRNb292UHJvY2Vzc29yLmpzIiwiSTovbWF0ZXJpYWxzKERBU0gpL3Byb2plY3QvZGFzaC5qcy9zcmMvbXNzL01zc0ZyYWdtZW50UHJvY2Vzc29yLmpzIiwiSTovbWF0ZXJpYWxzKERBU0gpL3Byb2plY3QvZGFzaC5qcy9zcmMvbXNzL01zc0hhbmRsZXIuanMiLCJJOi9tYXRlcmlhbHMoREFTSCkvcHJvamVjdC9kYXNoLmpzL3NyYy9tc3MvZXJyb3JzL01zc0Vycm9ycy5qcyIsIkk6L21hdGVyaWFscyhEQVNIKS9wcm9qZWN0L2Rhc2guanMvc3JjL21zcy9pbmRleC5qcyIsIkk6L21hdGVyaWFscyhEQVNIKS9wcm9qZWN0L2Rhc2guanMvc3JjL21zcy9wYXJzZXIvTXNzUGFyc2VyLmpzIiwiSTovbWF0ZXJpYWxzKERBU0gpL3Byb2plY3QvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL01lZGlhUGxheWVyRXZlbnRzLmpzIiwiSTovbWF0ZXJpYWxzKERBU0gpL3Byb2plY3QvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3ZvL0Rhc2hKU0Vycm9yLmpzIiwiSTovbWF0ZXJpYWxzKERBU0gpL3Byb2plY3QvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3ZvL0RhdGFDaHVuay5qcyIsIkk6L21hdGVyaWFscyhEQVNIKS9wcm9qZWN0L2Rhc2guanMvc3JjL3N0cmVhbWluZy92by9GcmFnbWVudFJlcXVlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2tDTSxVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVOzs7aUJBQVYsVUFBVTs7ZUFDTCxnQkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsTUFBTSxFQUFFLE9BQU87O0FBRXBCLGdCQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDaEQsZ0JBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs7QUFHcEQsaUJBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQ3RCLG9CQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEFBQUMsRUFBRSxTQUFTO0FBQ3RFLG9CQUFJLFVBQVUsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVM7QUFDbEUsb0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFM0I7U0FDSjs7O1dBZEMsVUFBVTs7O3FCQWlCRCxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqQm5CLFVBQVU7YUFBVixVQUFVOzhCQUFWLFVBQVU7OztpQkFBVixVQUFVOztlQUNM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RzVDLDZCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7OztBQUdwQixvQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7OztBQU01QyxvQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsb0JBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztBQUd0QyxvQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsb0JBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztBQUd0QyxvQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsb0JBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztBQUd0QyxvQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsb0JBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7QUFHbEQsNkJBQWEs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RSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDOUIscUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLDRCQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBLElBQUssQ0FBQyxDQUFDO0FBQzFDLDRCQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQUFBQyxDQUFDO0FBQ3JDLDRCQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQix5QkFBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7aUJBQ3RCO0FBQ0Qsb0JBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDdkIscUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLDRCQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBLElBQUssQ0FBQyxDQUFDO0FBQzFDLDRCQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQUFBQyxDQUFDO0FBQ3JDLDRCQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQix5QkFBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7aUJBQ3RCOztBQUVELHVC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QUFBLElBQUssRUFBRSxDQUFDO0FBQ3hDLFlBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQSxJQUFLLENBQUMsQ0FBQztBQUN2QyxZQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBSSxNQUFNLEdBQUcsVUFBVSxBQUFDLENBQUM7OztBQUdsQyxZQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlELFNBQUMsSUFBSSxDQUFDLENBQUM7OztBQUdQLFlBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRyxTQUFDLElBQUksRUFBRSxDQUFDOzs7QUFHUixZQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFBLElBQUssRUFBRSxDQUFDO0FBQ3JELFlBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUEsSUFBSyxFQUFFLENBQUM7QUFDckQsWUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQSxJQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBSSxZQUFZLENBQUMsTUFBTSxHQUFHLFVBQVUsQUFBQyxDQUFDOzs7QUFHL0MsWUFBSSxDQUFD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QUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUMxQixNQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUNuQixNQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNqQixNQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLE1BQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7QUFDaEMsTUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDMUIsTUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDdkIsTUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdEIsTUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztBQUM1QixNQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztBQUNsQyxNQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0NBQ2hDOztBQUdMLGVBQWUsQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO0FBQzdDLGVBQWUsQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDOztxQkFFOUIsZUFBZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmNsYXNzIEVycm9yc0Jhc2Uge1xyXG4gICAgZXh0ZW5kIChlcnJvcnMsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICghZXJyb3JzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBvdmVycmlkZSA9IGNvbmZpZyA/IGNvbmZpZy5vdmVycmlkZSA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBwdWJsaWNPbmx5ID0gY29uZmlnID8gY29uZmlnLnB1YmxpY09ubHkgOiBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZXJyIGluIGVycm9ycykge1xyXG4gICAgICAgICAgICBpZiAoIWVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnIpIHx8ICh0aGlzW2Vycl0gJiYgIW92ZXJyaWRlKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChwdWJsaWNPbmx5ICYmIGVycm9yc1tlcnJdLmluZGV4T2YoJ3B1YmxpY18nKSA9PT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0aGlzW2Vycl0gPSBlcnJvcnNbZXJyXTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvcnNCYXNlOyIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmNsYXNzIEV2ZW50c0Jhc2Uge1xyXG4gICAgZXh0ZW5kIChldmVudHMsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICghZXZlbnRzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBvdmVycmlkZSA9IGNvbmZpZyA/IGNvbmZpZy5vdmVycmlkZSA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBwdWJsaWNPbmx5ID0gY29uZmlnID8gY29uZmlnLnB1YmxpY09ubHkgOiBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZXZ0IGluIGV2ZW50cykge1xyXG4gICAgICAgICAgICBpZiAoIWV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldnQpIHx8ICh0aGlzW2V2dF0gJiYgIW92ZXJyaWRlKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChwdWJsaWNPbmx5ICYmIGV2ZW50c1tldnRdLmluZGV4T2YoJ3B1YmxpY18nKSA9PT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0aGlzW2V2dF0gPSBldmVudHNbZXZ0XTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudHNCYXNlOyIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG5pbXBvcnQgRXZlbnRzQmFzZSBmcm9tICcuLi9jb3JlL2V2ZW50cy9FdmVudHNCYXNlJztcclxuXHJcbmNsYXNzIE1zc0V2ZW50cyBleHRlbmRzIEV2ZW50c0Jhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuRlJBR01FTlRfSU5GT19MT0FESU5HX0NPTVBMRVRFRCA9ICdmcmFnbWVudEluZm9Mb2FkaW5nQ29tcGxldGVkJztcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1zc0V2ZW50cyA9IG5ldyBNc3NFdmVudHMoKTtcclxuZXhwb3J0IGRlZmF1bHQgbXNzRXZlbnRzO1xyXG4iLCIvKipcclxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcclxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXHJcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcclxuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXHJcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxyXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXHJcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxyXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxyXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcclxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcclxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcclxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxyXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxyXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcclxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBNc3NFdmVudHMgZnJvbSAnLi9Nc3NFdmVudHMnO1xyXG5pbXBvcnQgTVNTRnJhZ21lbnRNb29mUHJvY2Vzc29yIGZyb20gJy4vTXNzRnJhZ21lbnRNb29mUHJvY2Vzc29yJztcclxuaW1wb3J0IEZyYWdtZW50UmVxdWVzdCBmcm9tICcuLi9zdHJlYW1pbmcvdm8vRnJhZ21lbnRSZXF1ZXN0JztcclxuXHJcbmZ1bmN0aW9uIE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIoY29uZmlnKSB7XHJcblxyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICBsZXQgaW5zdGFuY2UsXHJcbiAgICAgICAgbG9nZ2VyLFxyXG4gICAgICAgIGZyYWdtZW50TW9kZWwsXHJcbiAgICAgICAgc3RhcnRlZCxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIGJ1ZmZlclRpbWVvdXQsXHJcbiAgICAgICAgc3RhcnRUaW1lLFxyXG4gICAgICAgIHN0YXJ0RnJhZ21lbnRUaW1lLFxyXG4gICAgICAgIGluZGV4O1xyXG5cclxuICAgIGNvbnN0IHN0cmVhbVByb2Nlc3NvciA9IGNvbmZpZy5zdHJlYW1Qcm9jZXNzb3I7XHJcbiAgICBjb25zdCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1cztcclxuICAgIGNvbnN0IG1ldHJpY3NNb2RlbCA9IGNvbmZpZy5tZXRyaWNzTW9kZWw7XHJcbiAgICBjb25zdCBwbGF5YmFja0NvbnRyb2xsZXIgPSBjb25maWcucGxheWJhY2tDb250cm9sbGVyO1xyXG4gICAgY29uc3QgSVNPQm94ZXIgPSBjb25maWcuSVNPQm94ZXI7XHJcbiAgICBjb25zdCBiYXNlVVJMQ29udHJvbGxlciA9IGNvbmZpZy5iYXNlVVJMQ29udHJvbGxlcjtcclxuICAgIGNvbnN0IGRlYnVnID0gY29uZmlnLmRlYnVnO1xyXG4gICAgY29uc3QgY29udHJvbGxlclR5cGUgPSAnTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlcic7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgICAgbG9nZ2VyID0gZGVidWcuZ2V0TG9nZ2VyKGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICBzdGFydEZyYWdtZW50VGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyIHRvIFN0cmVhbVByb2Nlc3NvciBhcyBleHRlcm5hbCBjb250cm9sbGVyXHJcbiAgICAgICAgc3RyZWFtUHJvY2Vzc29yLnJlZ2lzdGVyRXh0ZXJuYWxDb250cm9sbGVyKGluc3RhbmNlKTtcclxuICAgICAgICB0eXBlID0gc3RyZWFtUHJvY2Vzc29yLmdldFR5cGUoKTtcclxuICAgICAgICBmcmFnbWVudE1vZGVsID0gc3RyZWFtUHJvY2Vzc29yLmdldEZyYWdtZW50TW9kZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkb1N0YXJ0KCkge1xyXG4gICAgICAgIGlmIChzdGFydGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnRG8gc3RhcnQnKTtcclxuXHJcbiAgICAgICAgZXZlbnRCdXMub24oTXNzRXZlbnRzLkZSQUdNRU5UX0lORk9fTE9BRElOR19DT01QTEVURUQsIG9uRnJhZ21lbnRJbmZvTG9hZGVkQ29tcGxldGVkLCBpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgbG9hZE5leHRGcmFnbWVudEluZm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkb1N0b3AoKSB7XHJcbiAgICAgICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdEbyBzdG9wJyk7XHJcblxyXG4gICAgICAgIGV2ZW50QnVzLm9mZihNc3NFdmVudHMuRlJBR01FTlRfSU5GT19MT0FESU5HX0NPTVBMRVRFRCwgb25GcmFnbWVudEluZm9Mb2FkZWRDb21wbGV0ZWQsIGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgLy8gU3RvcCBidWZmZXJpbmcgcHJvY2Vzc1xyXG4gICAgICAgIGNsZWFyVGltZW91dChidWZmZXJUaW1lb3V0KTtcclxuICAgICAgICBzdGFydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICAgICAgc3RhcnRGcmFnbWVudFRpbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gICAgICAgIGRvU3RvcCgpO1xyXG4gICAgICAgIHN0cmVhbVByb2Nlc3Nvci51bnJlZ2lzdGVyRXh0ZXJuYWxDb250cm9sbGVyKGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkTmV4dEZyYWdtZW50SW5mbygpIHtcclxuICAgICAgICAvLyBDaGVjayBpZiBydW5uaW5nIHN0YXRlXHJcbiAgICAgICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBsYXN0IHNlZ21lbnQgZnJvbSBTZWdtZW50VGltZWxpbmVcclxuICAgICAgICBjb25zdCByZXByZXNlbnRhdGlvbiA9IGdldEN1cnJlbnRSZXByZXNlbnRhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG1hbmlmZXN0ID0gcmVwcmVzZW50YXRpb24uYWRhcHRhdGlvbi5wZXJpb2QubXBkLm1hbmlmZXN0O1xyXG4gICAgICAgIGNvbnN0IGFkYXB0YXRpb24gPSBtYW5pZmVzdC5QZXJpb2RfYXNBcnJheVtyZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLnBlcmlvZC5pbmRleF0uQWRhcHRhdGlvblNldF9hc0FycmF5W3JlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24uaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gYWRhcHRhdGlvbi5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLlNfYXNBcnJheTtcclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnTGFzdCBmcmFnbWVudCB0aW1lOiAnICsgKHNlZ21lbnQudCAvIGFkYXB0YXRpb24uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZSkpO1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBzZWdtZW50IHJlcXVlc3RcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gZ2V0UmVxdWVzdEZvclNlZ21lbnQoYWRhcHRhdGlvbiwgcmVwcmVzZW50YXRpb24sIHNlZ21lbnQpO1xyXG5cclxuICAgICAgICAvLyBTZW5kIHNlZ21lbnQgcmVxdWVzdFxyXG4gICAgICAgIHJlcXVlc3RGcmFnbWVudC5jYWxsKHRoaXMsIHJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGF5TG9hZE5leHRGcmFnbWVudEluZm8oZGVsYXkpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoYnVmZmVyVGltZW91dCk7XHJcbiAgICAgICAgYnVmZmVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBidWZmZXJUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgbG9hZE5leHRGcmFnbWVudEluZm8oKTtcclxuICAgICAgICB9LCBkZWxheSAqIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJlcXVlc3RGb3JTZWdtZW50KGFkYXB0YXRpb24sIHJlcHJlc2VudGF0aW9uLCBzZWdtZW50KSB7XHJcbiAgICAgICAgbGV0IHRpbWVzY2FsZSA9IGFkYXB0YXRpb24uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZTtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBGcmFnbWVudFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdC5tZWRpYVR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHJlcXVlc3QudHlwZSA9ICdGcmFnbWVudEluZm9TZWdtZW50JztcclxuICAgICAgICAvLyByZXF1ZXN0LnJhbmdlID0gc2VnbWVudC5tZWRpYVJhbmdlO1xyXG4gICAgICAgIHJlcXVlc3Quc3RhcnRUaW1lID0gc2VnbWVudC50IC8gdGltZXNjYWxlO1xyXG4gICAgICAgIHJlcXVlc3QuZHVyYXRpb24gPSBzZWdtZW50LmQgLyB0aW1lc2NhbGU7XHJcbiAgICAgICAgcmVxdWVzdC50aW1lc2NhbGUgPSB0aW1lc2NhbGU7XHJcbiAgICAgICAgLy8gcmVxdWVzdC5hdmFpbGFiaWxpdHlTdGFydFRpbWUgPSBzZWdtZW50LmF2YWlsYWJpbGl0eVN0YXJ0VGltZTtcclxuICAgICAgICAvLyByZXF1ZXN0LmF2YWlsYWJpbGl0eUVuZFRpbWUgPSBzZWdtZW50LmF2YWlsYWJpbGl0eUVuZFRpbWU7XHJcbiAgICAgICAgLy8gcmVxdWVzdC53YWxsU3RhcnRUaW1lID0gc2VnbWVudC53YWxsU3RhcnRUaW1lO1xyXG4gICAgICAgIHJlcXVlc3QucXVhbGl0eSA9IHJlcHJlc2VudGF0aW9uLmluZGV4O1xyXG4gICAgICAgIHJlcXVlc3QuaW5kZXggPSBpbmRleCsrO1xyXG4gICAgICAgIHJlcXVlc3QubWVkaWFJbmZvID0gc3RyZWFtUHJvY2Vzc29yLmdldE1lZGlhSW5mbygpO1xyXG4gICAgICAgIHJlcXVlc3QuYWRhcHRhdGlvbkluZGV4ID0gcmVwcmVzZW50YXRpb24uYWRhcHRhdGlvbi5pbmRleDtcclxuICAgICAgICByZXF1ZXN0LnJlcHJlc2VudGF0aW9uSWQgPSByZXByZXNlbnRhdGlvbi5pZDtcclxuICAgICAgICByZXF1ZXN0LnVybCA9IGJhc2VVUkxDb250cm9sbGVyLnJlc29sdmUocmVwcmVzZW50YXRpb24ucGF0aCkudXJsICsgYWRhcHRhdGlvbi5TZWdtZW50VGVtcGxhdGUubWVkaWE7XHJcbiAgICAgICAgcmVxdWVzdC51cmwgPSByZXF1ZXN0LnVybC5yZXBsYWNlKCckQmFuZHdpZHRoJCcsIHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCk7XHJcbiAgICAgICAgcmVxdWVzdC51cmwgPSByZXF1ZXN0LnVybC5yZXBsYWNlKCckVGltZSQnLCBzZWdtZW50LnRNYW5pZmVzdCA/IHNlZ21lbnQudE1hbmlmZXN0IDogc2VnbWVudC50KTtcclxuICAgICAgICByZXF1ZXN0LnVybCA9IHJlcXVlc3QudXJsLnJlcGxhY2UoJy9GcmFnbWVudHMoJywgJy9GcmFnbWVudEluZm8oJyk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRSZXByZXNlbnRhdGlvbigpIHtcclxuICAgICAgICBjb25zdCByZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0UmVwcmVzZW50YXRpb25Db250cm9sbGVyKCk7XHJcbiAgICAgICAgY29uc3QgcmVwcmVzZW50YXRpb24gPSByZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIuZ2V0Q3VycmVudFJlcHJlc2VudGF0aW9uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXByZXNlbnRhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0RnJhZ21lbnQocmVxdWVzdCkge1xyXG5cclxuICAgICAgICBsb2dnZXIuZGVidWcoJ0xvYWQgZnJhZ21lbnQgZm9yIHRpbWU6ICcgKyByZXF1ZXN0LnN0YXJ0VGltZSk7XHJcbiAgICAgICAgaWYgKHN0cmVhbVByb2Nlc3Nvci5nZXRGcmFnbWVudE1vZGVsKCkuaXNGcmFnbWVudExvYWRlZE9yUGVuZGluZyhyZXF1ZXN0KSkge1xyXG4gICAgICAgICAgICAvLyBXZSBtYXkgaGF2ZSByZWFjaGVkIGVuZCBvZiB0aW1lbGluZSBpbiBjYXNlIG9mIHN0YXJ0LW92ZXIgc3RyZWFtc1xyXG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ05vIG1vcmUgZnJhZ21lbnRzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZyYWdtZW50TW9kZWwuZXhlY3V0ZVJlcXVlc3QocmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25GcmFnbWVudEluZm9Mb2FkZWRDb21wbGV0ZWQoZSkge1xyXG4gICAgICAgIGlmIChlLnN0cmVhbVByb2Nlc3NvciAhPT0gc3RyZWFtUHJvY2Vzc29yKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBlLmZyYWdtZW50SW5mby5yZXF1ZXN0O1xyXG4gICAgICAgIGlmICghZS5mcmFnbWVudEluZm8ucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdMb2FkIGVycm9yJywgcmVxdWVzdC51cmwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGVsdGFGcmFnbWVudFRpbWUsXHJcbiAgICAgICAgICAgIGRlbHRhVGltZTtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdGcmFnbWVudEluZm8gbG9hZGVkOiAnLCByZXF1ZXN0LnVybCk7XHJcblxyXG4gICAgICAgIGlmICghc3RhcnRGcmFnbWVudFRpbWUpIHtcclxuICAgICAgICAgICAgc3RhcnRGcmFnbWVudFRpbWUgPSByZXF1ZXN0LnN0YXJ0VGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFByb2Nlc3MgRnJhbWdlbnRJbmZvIGluIG9yZGVyIHRvIHVwZGF0ZSBzZWdtZW50IHRpbWVsaW5lIChEVlIgd2luZG93KVxyXG4gICAgICAgICAgICBjb25zdCBtc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IgPSBNU1NGcmFnbWVudE1vb2ZQcm9jZXNzb3IoY29udGV4dCkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIG1ldHJpY3NNb2RlbDogbWV0cmljc01vZGVsLFxyXG4gICAgICAgICAgICAgICAgcGxheWJhY2tDb250cm9sbGVyOiBwbGF5YmFja0NvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICBJU09Cb3hlcjogSVNPQm94ZXIsXHJcbiAgICAgICAgICAgICAgICBldmVudEJ1czogZXZlbnRCdXMsXHJcbiAgICAgICAgICAgICAgICBkZWJ1ZzogZGVidWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvci51cGRhdGVTZWdtZW50TGlzdChlLmZyYWdtZW50SW5mbywgc3RyZWFtUHJvY2Vzc29yKTtcclxuXHJcbiAgICAgICAgICAgIGRlbHRhVGltZSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICBkZWx0YUZyYWdtZW50VGltZSA9IChyZXF1ZXN0LnN0YXJ0VGltZSArIHJlcXVlc3QuZHVyYXRpb24pIC0gc3RhcnRGcmFnbWVudFRpbWU7XHJcbiAgICAgICAgICAgIGRlbGF5TG9hZE5leHRGcmFnbWVudEluZm8oTWF0aC5tYXgoMCwgKGRlbHRhRnJhZ21lbnRUaW1lIC0gZGVsdGFUaW1lKSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmZhdGFsKCdJbnRlcm5hbCBlcnJvciB3aGlsZSBwcm9jZXNzaW5nIGZyYWdtZW50IGluZm8gc2VnbWVudCAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZSA9IHtcclxuICAgICAgICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxyXG4gICAgICAgIGNvbnRyb2xsZXJUeXBlOiBjb250cm9sbGVyVHlwZSxcclxuICAgICAgICBzdGFydDogZG9TdGFydCxcclxuICAgICAgICBnZXRUeXBlOiBnZXRUeXBlLFxyXG4gICAgICAgIHJlc2V0OiByZXNldFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXR1cCgpO1xyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuIiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcbmltcG9ydCBEYXNoSlNFcnJvciBmcm9tICcuLi9zdHJlYW1pbmcvdm8vRGFzaEpTRXJyb3InO1xyXG5pbXBvcnQgTXNzRXJyb3JzIGZyb20gJy4vZXJyb3JzL01zc0Vycm9ycyc7XHJcblxyXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uL3N0cmVhbWluZy9NZWRpYVBsYXllckV2ZW50cyc7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBNc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3JcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIE1zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcihjb25maWcpIHtcclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBsZXQgaW5zdGFuY2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBsb2dnZXI7XHJcbiAgICBjb25zdCBtZXRyaWNzTW9kZWwgPSBjb25maWcubWV0cmljc01vZGVsO1xyXG4gICAgY29uc3QgcGxheWJhY2tDb250cm9sbGVyID0gY29uZmlnLnBsYXliYWNrQ29udHJvbGxlcjtcclxuICAgIGNvbnN0IGVycm9ySGFuZGxlciA9IGNvbmZpZy5lcnJIYW5kbGVyO1xyXG4gICAgY29uc3QgZXZlbnRCdXMgPSBjb25maWcuZXZlbnRCdXM7XHJcbiAgICBjb25zdCBJU09Cb3hlciA9IGNvbmZpZy5JU09Cb3hlcjtcclxuICAgIGNvbnN0IGRlYnVnID0gY29uZmlnLmRlYnVnO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICAgIGxvZ2dlciA9IGRlYnVnLmdldExvZ2dlcihpbnN0YW5jZSk7XHJcbiAgICAgICAgdHlwZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NUZnJmKHJlcXVlc3QsIHRmcmYsIHRmZHQsIHN0cmVhbVByb2Nlc3Nvcikge1xyXG4gICAgICAgIGNvbnN0IHJlcHJlc2VudGF0aW9uQ29udHJvbGxlciA9IHN0cmVhbVByb2Nlc3Nvci5nZXRSZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIoKTtcclxuICAgICAgICBjb25zdCByZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uQ29udHJvbGxlci5nZXRDdXJyZW50UmVwcmVzZW50YXRpb24oKTtcclxuICAgICAgICBjb25zdCBpbmRleEhhbmRsZXIgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0SW5kZXhIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hbmlmZXN0ID0gcmVwcmVzZW50YXRpb24uYWRhcHRhdGlvbi5wZXJpb2QubXBkLm1hbmlmZXN0O1xyXG4gICAgICAgIGNvbnN0IGFkYXB0YXRpb24gPSBtYW5pZmVzdC5QZXJpb2RfYXNBcnJheVtyZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLnBlcmlvZC5pbmRleF0uQWRhcHRhdGlvblNldF9hc0FycmF5W3JlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24uaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHRpbWVzY2FsZSA9IGFkYXB0YXRpb24uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZTtcclxuXHJcbiAgICAgICAgdHlwZSA9IHN0cmVhbVByb2Nlc3Nvci5nZXRUeXBlKCk7XHJcblxyXG4gICAgICAgIGlmIChtYW5pZmVzdC50eXBlICE9PSAnZHluYW1pYycgJiYgIW1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGZyZikge1xyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuZXJyb3IobmV3IERhc2hKU0Vycm9yKE1zc0Vycm9ycy5NU1NfTk9fVEZSRl9DT0RFLCBNc3NFcnJvcnMuTVNTX05PX1RGUkZfTUVTU0FHRSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZXQgYWRhcHRhdGlvbidzIHNlZ21lbnQgdGltZWxpbmUgKGFsd2F5cyBhIFNlZ21lbnRUaW1lbGluZSBpbiBTbW9vdGggU3RyZWFtaW5nIHVzZSBjYXNlKVxyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gYWRhcHRhdGlvbi5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLlM7XHJcbiAgICAgICAgY29uc3QgZW50cmllcyA9IHRmcmYuZW50cnk7XHJcbiAgICAgICAgbGV0IGVudHJ5LFxyXG4gICAgICAgICAgICBzZWdtZW50VGltZSxcclxuICAgICAgICAgICAgcmFuZ2U7XHJcbiAgICAgICAgbGV0IHNlZ21lbnQgPSBudWxsO1xyXG4gICAgICAgIGxldCB0ID0gMDtcclxuICAgICAgICBsZXQgYXZhaWxhYmlsaXR5U3RhcnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnNpZGVyIG9ubHkgZmlyc3QgdGZyZiBlbnRyeSAodG8gYXZvaWQgcHJlLWNvbmRpdGlvbiBmYWlsdXJlIG9uIGZyYWdtZW50IGluZm8gcmVxdWVzdHMpXHJcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzWzBdO1xyXG5cclxuICAgICAgICAvLyBJbiBjYXNlIG9mIHN0YXJ0LW92ZXIgc3RyZWFtcywgY2hlY2sgaWYgd2UgaGF2ZSByZWFjaGVkIGVuZCBvZiBvcmlnaW5hbCBtYW5pZmVzdCBkdXJhdGlvbiAoc2V0IGluIHRpbWVTaGlmdEJ1ZmZlckRlcHRoKVxyXG4gICAgICAgIC8vID0+IHRoZW4gZG8gbm90IHVwZGF0ZSBhbnltb3JlIHRpbWVsaW5lXHJcbiAgICAgICAgaWYgKG1hbmlmZXN0LnR5cGUgPT09ICdzdGF0aWMnKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCBmaXJzdCBzZWdtZW50IHRpbWVcclxuICAgICAgICAgICAgc2VnbWVudFRpbWUgPSBzZWdtZW50c1swXS50TWFuaWZlc3QgPyBwYXJzZUZsb2F0KHNlZ21lbnRzWzBdLnRNYW5pZmVzdCkgOiBzZWdtZW50c1swXS50O1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuZnJhZ21lbnRfYWJzb2x1dGVfdGltZSA+IChzZWdtZW50VGltZSArIChtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCAqIHRpbWVzY2FsZSkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnZW50cnkgLSB0ID0gJywgKGVudHJ5LmZyYWdtZW50X2Fic29sdXRlX3RpbWUgLyB0aW1lc2NhbGUpKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGxhc3Qgc2VnbWVudCB0aW1lXHJcbiAgICAgICAgc2VnbWVudFRpbWUgPSBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS50TWFuaWZlc3QgPyBwYXJzZUZsb2F0KHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnRNYW5pZmVzdCkgOiBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS50O1xyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnTGFzdCBzZWdtZW50IC0gdCA9ICcsIChzZWdtZW50VGltZSAvIHRpbWVzY2FsZSkpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIHRvIGFwcGVuZCBuZXcgc2VnbWVudCB0byB0aW1lbGluZVxyXG4gICAgICAgIGlmIChlbnRyeS5mcmFnbWVudF9hYnNvbHV0ZV90aW1lIDw9IHNlZ21lbnRUaW1lKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBEVlIgd2luZG93IHJhbmdlXHJcbiAgICAgICAgICAgIC8vID0+IHNldCByYW5nZSBlbmQgdG8gZW5kIHRpbWUgb2YgY3VycmVudCBzZWdtZW50XHJcbiAgICAgICAgICAgIHJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHNlZ21lbnRzWzBdLnQgLyB0aW1lc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBlbmQ6ICh0ZmR0LmJhc2VNZWRpYURlY29kZVRpbWUgLyB0aW1lc2NhbGUpICsgcmVxdWVzdC5kdXJhdGlvblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlRFZSKHJlcXVlc3QubWVkaWFUeXBlLCByYW5nZSwgc3RyZWFtUHJvY2Vzc29yLmdldFN0cmVhbUluZm8oKS5tYW5pZmVzdEluZm8pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2dnZXIuZGVidWcoJ0FkZCBuZXcgc2VnbWVudCAtIHQgPSAnLCAoZW50cnkuZnJhZ21lbnRfYWJzb2x1dGVfdGltZSAvIHRpbWVzY2FsZSkpO1xyXG4gICAgICAgIHNlZ21lbnQgPSB7fTtcclxuICAgICAgICBzZWdtZW50LnQgPSBlbnRyeS5mcmFnbWVudF9hYnNvbHV0ZV90aW1lO1xyXG4gICAgICAgIHNlZ21lbnQuZCA9IGVudHJ5LmZyYWdtZW50X2R1cmF0aW9uO1xyXG4gICAgICAgIC8vIElmIHRpbWVzdGFtcHMgc3RhcnRzIGF0IDAgcmVsYXRpdmUgdG8gMXN0IHNlZ21lbnQgKGR5bmFtaWMgdG8gc3RhdGljKSB0aGVuIHVwZGF0ZSBzZWdtZW50IHRpbWVcclxuICAgICAgICBpZiAoc2VnbWVudHNbMF0udE1hbmlmZXN0KSB7XHJcbiAgICAgICAgICAgIHNlZ21lbnQudCAtPSBwYXJzZUZsb2F0KHNlZ21lbnRzWzBdLnRNYW5pZmVzdCkgLSBzZWdtZW50c1swXS50O1xyXG4gICAgICAgICAgICBzZWdtZW50LnRNYW5pZmVzdCA9IGVudHJ5LmZyYWdtZW50X2Fic29sdXRlX3RpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcblxyXG4gICAgICAgIC8vIEluIGNhc2Ugb2Ygc3RhdGljIHN0YXJ0LW92ZXIgc3RyZWFtcywgdXBkYXRlIGNvbnRlbnQgZHVyYXRpb25cclxuICAgICAgICBpZiAobWFuaWZlc3QudHlwZSA9PT0gJ3N0YXRpYycpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSAoc2VnbWVudC50ICsgc2VnbWVudC5kKSAvIHRpbWVzY2FsZTtcclxuICAgICAgICAgICAgICAgIGlmIChlbmQgPiByZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLnBlcmlvZC5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoRXZlbnRzLk1BTklGRVNUX1ZBTElESVRZX0NIQU5HRUQsIHsgc2VuZGVyOiB0aGlzLCBuZXdEdXJhdGlvbjogZW5kIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBsaXZlIHN0cmVhbXMsIHVwZGF0ZSBzZWdtZW50IHRpbWVsaW5lIGFjY29yZGluZyB0byBEVlIgd2luZG93XHJcbiAgICAgICAgZWxzZSBpZiAobWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggJiYgbWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aW1lc3RhbXAgb2YgdGhlIGxhc3Qgc2VnbWVudFxyXG4gICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHQgPSBzZWdtZW50LnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHNlZ21lbnRzJyBhdmFpbGFiaWxpdHkgc3RhcnQgdGltZVxyXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHlTdGFydFRpbWUgPSBNYXRoLnJvdW5kKCh0IC0gKG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoICogdGltZXNjYWxlKSkgLyB0aW1lc2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHNlZ21lbnRzIHByaW9yIHRvIGF2YWlsYWJpbGl0eSBzdGFydCB0aW1lXHJcbiAgICAgICAgICAgIHNlZ21lbnQgPSBzZWdtZW50c1swXTtcclxuICAgICAgICAgICAgd2hpbGUgKE1hdGgucm91bmQoc2VnbWVudC50IC8gdGltZXNjYWxlKSA8IGF2YWlsYWJpbGl0eVN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdSZW1vdmUgc2VnbWVudCAgLSB0ID0gJyArIChzZWdtZW50LnQgLyB0aW1lc2NhbGUpKTtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBzZWdtZW50c1swXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIERWUiB3aW5kb3cgcmFuZ2UgPT4gc2V0IHJhbmdlIGVuZCB0byBlbmQgdGltZSBvZiBjdXJyZW50IHNlZ21lbnRcclxuICAgICAgICAgICAgcmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogc2VnbWVudHNbMF0udCAvIHRpbWVzY2FsZSxcclxuICAgICAgICAgICAgICAgIGVuZDogKHRmZHQuYmFzZU1lZGlhRGVjb2RlVGltZSAvIHRpbWVzY2FsZSkgKyByZXF1ZXN0LmR1cmF0aW9uXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVEVlIodHlwZSwgcmFuZ2UsIHN0cmVhbVByb2Nlc3Nvci5nZXRTdHJlYW1JbmZvKCkubWFuaWZlc3RJbmZvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluZGV4SGFuZGxlci51cGRhdGVTZWdtZW50TGlzdChyZXByZXNlbnRhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRFZSKHR5cGUsIHJhbmdlLCBtYW5pZmVzdEluZm8pIHtcclxuICAgICAgICBjb25zdCBkdnJJbmZvcyA9IG1ldHJpY3NNb2RlbC5nZXRNZXRyaWNzRm9yKHR5cGUpLkRWUkluZm87XHJcbiAgICAgICAgaWYgKGR2ckluZm9zKSB7XHJcbiAgICAgICAgICAgIGlmIChkdnJJbmZvcy5sZW5ndGggPT09IDAgfHwgKGR2ckluZm9zLmxlbmd0aCA+IDAgJiYgcmFuZ2UuZW5kID4gZHZySW5mb3NbZHZySW5mb3MubGVuZ3RoIC0gMV0ucmFuZ2UuZW5kKSkge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdVcGRhdGUgRFZSIEluZm9zIFsnICsgcmFuZ2Uuc3RhcnQgKyAnIC0gJyArIHJhbmdlLmVuZCArICddJyk7XHJcbiAgICAgICAgICAgICAgICBtZXRyaWNzTW9kZWwuYWRkRFZSSW5mbyh0eXBlLCBwbGF5YmFja0NvbnRyb2xsZXIuZ2V0VGltZSgpLCBtYW5pZmVzdEluZm8sIHJhbmdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIG9mZnNldCBvZiB0aGUgMXN0IGJ5dGUgb2YgYSBjaGlsZCBib3ggd2l0aGluIGEgY29udGFpbmVyIGJveFxyXG4gICAgZnVuY3Rpb24gZ2V0Qm94T2Zmc2V0KHBhcmVudCwgdHlwZSkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSA4O1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmVudC5ib3hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGFyZW50LmJveGVzW2ldLnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHBhcmVudC5ib3hlc1tpXS5zaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRGcmFnbWVudChlLCBzcCkge1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICAvLyBlLnJlcXVlc3QgY29udGFpbnMgcmVxdWVzdCBkZXNjcmlwdGlvbiBvYmplY3RcclxuICAgICAgICAvLyBlLnJlc3BvbnNlIGNvbnRhaW5zIGZyYWdtZW50IGJ5dGVzXHJcbiAgICAgICAgY29uc3QgaXNvRmlsZSA9IElTT0JveGVyLnBhcnNlQnVmZmVyKGUucmVzcG9uc2UpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0cmFja19JZCBpbiB0ZmhkIGJveFxyXG4gICAgICAgIGNvbnN0IHRmaGQgPSBpc29GaWxlLmZldGNoKCd0ZmhkJyk7XHJcbiAgICAgICAgdGZoZC50cmFja19JRCA9IGUucmVxdWVzdC5tZWRpYUluZm8uaW5kZXggKyAxO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGZkdCBib3hcclxuICAgICAgICBsZXQgdGZkdCA9IGlzb0ZpbGUuZmV0Y2goJ3RmZHQnKTtcclxuICAgICAgICBjb25zdCB0cmFmID0gaXNvRmlsZS5mZXRjaCgndHJhZicpO1xyXG4gICAgICAgIGlmICh0ZmR0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRmZHQgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCd0ZmR0JywgdHJhZiwgdGZoZCk7XHJcbiAgICAgICAgICAgIHRmZHQudmVyc2lvbiA9IDE7XHJcbiAgICAgICAgICAgIHRmZHQuZmxhZ3MgPSAwO1xyXG4gICAgICAgICAgICB0ZmR0LmJhc2VNZWRpYURlY29kZVRpbWUgPSBNYXRoLmZsb29yKGUucmVxdWVzdC5zdGFydFRpbWUgKiBlLnJlcXVlc3QudGltZXNjYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRydW4gPSBpc29GaWxlLmZldGNoKCd0cnVuJyk7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgdGZ4ZCBib3hlc1xyXG4gICAgICAgIC8vIFRoaXMgYm94IHByb3ZpZGUgYWJzb2x1dGUgdGltZXN0YW1wIGJ1dCB3ZSB0YWtlIHRoZSBzZWdtZW50IHN0YXJ0IHRpbWUgZm9yIHRmZHRcclxuICAgICAgICBsZXQgdGZ4ZCA9IGlzb0ZpbGUuZmV0Y2goJ3RmeGQnKTtcclxuICAgICAgICBpZiAodGZ4ZCkge1xyXG4gICAgICAgICAgICB0ZnhkLl9wYXJlbnQuYm94ZXMuc3BsaWNlKHRmeGQuX3BhcmVudC5ib3hlcy5pbmRleE9mKHRmeGQpLCAxKTtcclxuICAgICAgICAgICAgdGZ4ZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZnJmID0gaXNvRmlsZS5mZXRjaCgndGZyZicpO1xyXG4gICAgICAgIHByb2Nlc3NUZnJmKGUucmVxdWVzdCwgdGZyZiwgdGZkdCwgc3ApO1xyXG4gICAgICAgIGlmICh0ZnJmKSB7XHJcbiAgICAgICAgICAgIHRmcmYuX3BhcmVudC5ib3hlcy5zcGxpY2UodGZyZi5fcGFyZW50LmJveGVzLmluZGV4T2YodGZyZiksIDEpO1xyXG4gICAgICAgICAgICB0ZnJmID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHByb3RlY3RlZCBjb250ZW50IGluIFBJRkYxLjEgZm9ybWF0IChzZXBpZmYgYm94ID0gU2FtcGxlIEVuY3J5cHRpb24gUElGRilcclxuICAgICAgICAvLyA9PiBjb252ZXJ0IHNlcGlmZiBib3ggaXQgaW50byBhIHNlbmMgYm94XHJcbiAgICAgICAgLy8gPT4gY3JlYXRlIHNhaW8gYW5kIHNhaXogYm94ZXMgKGlmIG5vdCBhbHJlYWR5IHByZXNlbnQpXHJcbiAgICAgICAgY29uc3Qgc2VwaWZmID0gaXNvRmlsZS5mZXRjaCgnc2VwaWZmJyk7XHJcbiAgICAgICAgaWYgKHNlcGlmZiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXBpZmYudHlwZSA9ICdzZW5jJztcclxuICAgICAgICAgICAgc2VwaWZmLnVzZXJ0eXBlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNhaW8gPSBpc29GaWxlLmZldGNoKCdzYWlvJyk7XHJcbiAgICAgICAgICAgIGlmIChzYWlvID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgU2FtcGxlIEF1eGlsaWFyeSBJbmZvcm1hdGlvbiBPZmZzZXRzIEJveCBib3ggKHNhaW8pXHJcbiAgICAgICAgICAgICAgICBzYWlvID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc2FpbycsIHRyYWYpO1xyXG4gICAgICAgICAgICAgICAgc2Fpby52ZXJzaW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHNhaW8uZmxhZ3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2Fpby5lbnRyeV9jb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBzYWlvLm9mZnNldCA9IFswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYWl6ID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc2FpeicsIHRyYWYpO1xyXG4gICAgICAgICAgICAgICAgc2Fpei52ZXJzaW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHNhaXouZmxhZ3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2Fpei5zYW1wbGVfY291bnQgPSBzZXBpZmYuc2FtcGxlX2NvdW50O1xyXG4gICAgICAgICAgICAgICAgc2Fpei5kZWZhdWx0X3NhbXBsZV9pbmZvX3NpemUgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2Fpei5zYW1wbGVfaW5mb19zaXplID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlcGlmZi5mbGFncyAmIDB4MDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdWItc2FtcGxlIGVuY3J5cHRpb24gPT4gc2V0IHNhbXBsZV9pbmZvX3NpemUgZm9yIGVhY2ggc2FtcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlcGlmZi5zYW1wbGVfY291bnQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMCA9IDggKEluaXRpYWxpemF0aW9uVmVjdG9yIGZpZWxkIHNpemUpICsgMiAoc3Vic2FtcGxlX2NvdW50IGZpZWxkIHNpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDYgPSAyIChCeXRlc09mQ2xlYXJEYXRhIGZpZWxkIHNpemUpICsgNCAoQnl0ZXNPZkVuY3J5cHRlZERhdGEgZmllbGQgc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Fpei5zYW1wbGVfaW5mb19zaXplW2ldID0gMTAgKyAoNiAqIHNlcGlmZi5lbnRyeVtpXS5OdW1iZXJPZkVudHJpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gc3ViLXNhbXBsZSBlbmNyeXB0aW9uID0+IHNldCBkZWZhdWx0IHNhbXBsZV9pbmZvX3NpemUgPSBJbml0aWFsaXphdGlvblZlY3RvciBmaWVsZCBzaXplICg4KVxyXG4gICAgICAgICAgICAgICAgICAgIHNhaXouZGVmYXVsdF9zYW1wbGVfaW5mb19zaXplID0gODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGZoZC5mbGFncyAmPSAweEZGRkZGRTsgLy8gc2V0IHRmaGQuYmFzZS1kYXRhLW9mZnNldC1wcmVzZW50IHRvIGZhbHNlXHJcbiAgICAgICAgdGZoZC5mbGFncyB8PSAweDAyMDAwMDsgLy8gc2V0IHRmaGQuZGVmYXVsdC1iYXNlLWlzLW1vb2YgdG8gdHJ1ZVxyXG4gICAgICAgIHRydW4uZmxhZ3MgfD0gMHgwMDAwMDE7IC8vIHNldCB0cnVuLmRhdGEtb2Zmc2V0LXByZXNlbnQgdG8gdHJ1ZVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdHJ1bi5kYXRhX29mZnNldCBmaWVsZCB0aGF0IGNvcnJlc3BvbmRzIHRvIGZpcnN0IGRhdGEgYnl0ZSAoaW5zaWRlIG1kYXQgYm94KVxyXG4gICAgICAgIGNvbnN0IG1vb2YgPSBpc29GaWxlLmZldGNoKCdtb29mJyk7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IG1vb2YuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgdHJ1bi5kYXRhX29mZnNldCA9IGxlbmd0aCArIDg7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBzYWlvIGJveCBvZmZzZXQgZmllbGQgYWNjb3JkaW5nIHRvIG5ldyBzZW5jIGJveCBvZmZzZXRcclxuICAgICAgICBsZXQgc2FpbyA9IGlzb0ZpbGUuZmV0Y2goJ3NhaW8nKTtcclxuICAgICAgICBpZiAoc2FpbyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgdHJhZlBvc0luTW9vZiA9IGdldEJveE9mZnNldChtb29mLCAndHJhZicpO1xyXG4gICAgICAgICAgICBsZXQgc2VuY1Bvc0luVHJhZiA9IGdldEJveE9mZnNldCh0cmFmLCAnc2VuYycpO1xyXG4gICAgICAgICAgICAvLyBTZXQgb2Zmc2V0IGZyb20gYmVnaW4gZnJhZ21lbnQgdG8gdGhlIGZpcnN0IElWIGZpZWxkIGluIHNlbmMgYm94XHJcbiAgICAgICAgICAgIHNhaW8ub2Zmc2V0WzBdID0gdHJhZlBvc0luTW9vZiArIHNlbmNQb3NJblRyYWYgKyAxNjsgLy8gMTYgPSBib3ggaGVhZGVyICgxMikgKyBzYW1wbGVfY291bnQgZmllbGQgc2l6ZSAoNClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdyaXRlIHRyYW5zZm9ybWVkL3Byb2Nlc3NlZCBmcmFnbWVudCBpbnRvIHJlcXVlc3QgcmVwb25zZSBkYXRhXHJcbiAgICAgICAgZS5yZXNwb25zZSA9IGlzb0ZpbGUud3JpdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTZWdtZW50TGlzdChlLCBzcCkge1xyXG4gICAgICAgIC8vIGUucmVxdWVzdCBjb250YWlucyByZXF1ZXN0IGRlc2NyaXB0aW9uIG9iamVjdFxyXG4gICAgICAgIC8vIGUucmVzcG9uc2UgY29udGFpbnMgZnJhZ21lbnQgYnl0ZXNcclxuICAgICAgICBpZiAoIWUucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlLnJlc3BvbnNlIHBhcmFtZXRlciBpcyBtaXNzaW5nJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc29GaWxlID0gSVNPQm94ZXIucGFyc2VCdWZmZXIoZS5yZXNwb25zZSk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRyYWNrX0lkIGluIHRmaGQgYm94XHJcbiAgICAgICAgY29uc3QgdGZoZCA9IGlzb0ZpbGUuZmV0Y2goJ3RmaGQnKTtcclxuICAgICAgICB0ZmhkLnRyYWNrX0lEID0gZS5yZXF1ZXN0Lm1lZGlhSW5mby5pbmRleCArIDE7XHJcblxyXG4gICAgICAgIC8vIEFkZCB0ZmR0IGJveFxyXG4gICAgICAgIGxldCB0ZmR0ID0gaXNvRmlsZS5mZXRjaCgndGZkdCcpO1xyXG4gICAgICAgIGxldCB0cmFmID0gaXNvRmlsZS5mZXRjaCgndHJhZicpO1xyXG4gICAgICAgIGlmICh0ZmR0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRmZHQgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCd0ZmR0JywgdHJhZiwgdGZoZCk7XHJcbiAgICAgICAgICAgIHRmZHQudmVyc2lvbiA9IDE7XHJcbiAgICAgICAgICAgIHRmZHQuZmxhZ3MgPSAwO1xyXG4gICAgICAgICAgICB0ZmR0LmJhc2VNZWRpYURlY29kZVRpbWUgPSBNYXRoLmZsb29yKGUucmVxdWVzdC5zdGFydFRpbWUgKiBlLnJlcXVlc3QudGltZXNjYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0ZnJmID0gaXNvRmlsZS5mZXRjaCgndGZyZicpO1xyXG4gICAgICAgIHByb2Nlc3NUZnJmKGUucmVxdWVzdCwgdGZyZiwgdGZkdCwgc3ApO1xyXG4gICAgICAgIGlmICh0ZnJmKSB7XHJcbiAgICAgICAgICAgIHRmcmYuX3BhcmVudC5ib3hlcy5zcGxpY2UodGZyZi5fcGFyZW50LmJveGVzLmluZGV4T2YodGZyZiksIDEpO1xyXG4gICAgICAgICAgICB0ZnJmID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZSA9IHtcclxuICAgICAgICBjb252ZXJ0RnJhZ21lbnQ6IGNvbnZlcnRGcmFnbWVudCxcclxuICAgICAgICB1cGRhdGVTZWdtZW50TGlzdDogdXBkYXRlU2VnbWVudExpc3QsXHJcbiAgICAgICAgZ2V0VHlwZTogZ2V0VHlwZVxyXG4gICAgfTtcclxuXHJcbiAgICBzZXR1cCgpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5Nc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcic7XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xyXG4iLCIvKipcclxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcclxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXHJcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcclxuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXHJcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxyXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXHJcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxyXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxyXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcclxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcclxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcclxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxyXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxyXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcclxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKi9cclxuXHJcbiBpbXBvcnQgTXNzRXJyb3JzIGZyb20gJy4vZXJyb3JzL01zc0Vycm9ycyc7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBNc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3JcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIE1zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvcihjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IE5BTFVUWVBFX1NQUyA9IDc7XHJcbiAgICBjb25zdCBOQUxVVFlQRV9QUFMgPSA4O1xyXG4gICAgY29uc3QgY29uc3RhbnRzID0gY29uZmlnLmNvbnN0YW50cztcclxuICAgIGNvbnN0IElTT0JveGVyID0gY29uZmlnLklTT0JveGVyO1xyXG5cclxuICAgIGxldCBwcm90ZWN0aW9uQ29udHJvbGxlciA9IGNvbmZpZy5wcm90ZWN0aW9uQ29udHJvbGxlcjtcclxuICAgIGxldCBpbnN0YW5jZSxcclxuICAgICAgICBwZXJpb2QsXHJcbiAgICAgICAgYWRhcHRhdGlvblNldCxcclxuICAgICAgICByZXByZXNlbnRhdGlvbixcclxuICAgICAgICBjb250ZW50UHJvdGVjdGlvbixcclxuICAgICAgICB0aW1lc2NhbGUsXHJcbiAgICAgICAgdHJhY2tJZDtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGdHlwQm94KGlzb0ZpbGUpIHtcclxuICAgICAgICBsZXQgZnR5cCA9IElTT0JveGVyLmNyZWF0ZUJveCgnZnR5cCcsIGlzb0ZpbGUpO1xyXG4gICAgICAgIGZ0eXAubWFqb3JfYnJhbmQgPSAnaXNvNic7XHJcbiAgICAgICAgZnR5cC5taW5vcl92ZXJzaW9uID0gMTsgLy8gaXMgYW4gaW5mb3JtYXRpdmUgaW50ZWdlciBmb3IgdGhlIG1pbm9yIHZlcnNpb24gb2YgdGhlIG1ham9yIGJyYW5kXHJcbiAgICAgICAgZnR5cC5jb21wYXRpYmxlX2JyYW5kcyA9IFtdOyAvL2lzIGEgbGlzdCwgdG8gdGhlIGVuZCBvZiB0aGUgYm94LCBvZiBicmFuZHMgaXNvbSwgaXNvNiBhbmQgbXNkaFxyXG4gICAgICAgIGZ0eXAuY29tcGF0aWJsZV9icmFuZHNbMF0gPSAnaXNvbSc7IC8vID0+IGRlY2ltYWwgQVNDSUkgdmFsdWUgZm9yIGlzb21cclxuICAgICAgICBmdHlwLmNvbXBhdGlibGVfYnJhbmRzWzFdID0gJ2lzbzYnOyAvLyA9PiBkZWNpbWFsIEFTQ0lJIHZhbHVlIGZvciBpc282XHJcbiAgICAgICAgZnR5cC5jb21wYXRpYmxlX2JyYW5kc1syXSA9ICdtc2RoJzsgLy8gPT4gZGVjaW1hbCBBU0NJSSB2YWx1ZSBmb3IgbXNkaFxyXG5cclxuICAgICAgICByZXR1cm4gZnR5cDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNb292Qm94KGlzb0ZpbGUpIHtcclxuXHJcbiAgICAgICAgLy8gbW9vdiBib3hcclxuICAgICAgICBsZXQgbW9vdiA9IElTT0JveGVyLmNyZWF0ZUJveCgnbW9vdicsIGlzb0ZpbGUpO1xyXG5cclxuICAgICAgICAvLyBtb292L212aGRcclxuICAgICAgICBjcmVhdGVNdmhkQm94KG1vb3YpO1xyXG5cclxuICAgICAgICAvLyBtb292L3RyYWtcclxuICAgICAgICBsZXQgdHJhayA9IElTT0JveGVyLmNyZWF0ZUJveCgndHJhaycsIG1vb3YpO1xyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvdGtoZFxyXG4gICAgICAgIGNyZWF0ZVRraGRCb3godHJhayk7XHJcblxyXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhXHJcbiAgICAgICAgbGV0IG1kaWEgPSBJU09Cb3hlci5jcmVhdGVCb3goJ21kaWEnLCB0cmFrKTtcclxuXHJcbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWRoZFxyXG4gICAgICAgIGNyZWF0ZU1kaGRCb3gobWRpYSk7XHJcblxyXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhL2hkbHJcclxuICAgICAgICBjcmVhdGVIZGxyQm94KG1kaWEpO1xyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mXHJcbiAgICAgICAgbGV0IG1pbmYgPSBJU09Cb3hlci5jcmVhdGVCb3goJ21pbmYnLCBtZGlhKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhZGFwdGF0aW9uU2V0LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuVklERU86XHJcbiAgICAgICAgICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3ZtaGRcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVZtaGRCb3gobWluZik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQVVESU86XHJcbiAgICAgICAgICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3NtaGRcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNtaGRCb3gobWluZik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWluZi9kaW5mXHJcbiAgICAgICAgbGV0IGRpbmYgPSBJU09Cb3hlci5jcmVhdGVCb3goJ2RpbmYnLCBtaW5mKTtcclxuXHJcbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWluZi9kaW5mL2RyZWZcclxuICAgICAgICBjcmVhdGVEcmVmQm94KGRpbmYpO1xyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0YmxcclxuICAgICAgICBsZXQgc3RibCA9IElTT0JveGVyLmNyZWF0ZUJveCgnc3RibCcsIG1pbmYpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZW1wdHkgc3R0cywgc3RzYywgc3RjbyBhbmQgc3RzeiBib3hlc1xyXG4gICAgICAgIC8vIFVzZSBkYXRhIGZpZWxkIGFzIGZvciBjb2RlbS1pc29ib3hlciB1bmtub3duIGJveGVzIGZvciBzZXR0aW5nIGZpZWxkcyB2YWx1ZVxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3R0c1xyXG4gICAgICAgIGxldCBzdHRzID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3R0cycsIHN0YmwpO1xyXG4gICAgICAgIHN0dHMuX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIGVudHJ5X2NvdW50ID0gMFxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3RzY1xyXG4gICAgICAgIGxldCBzdHNjID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3RzYycsIHN0YmwpO1xyXG4gICAgICAgIHN0c2MuX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIGVudHJ5X2NvdW50ID0gMFxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3Rjb1xyXG4gICAgICAgIGxldCBzdGNvID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3RjbycsIHN0YmwpO1xyXG4gICAgICAgIHN0Y28uX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIGVudHJ5X2NvdW50ID0gMFxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3RzelxyXG4gICAgICAgIGxldCBzdHN6ID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3RzeicsIHN0YmwpO1xyXG4gICAgICAgIHN0c3ouX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIHNhbXBsZV9zaXplID0gMCwgc2FtcGxlX2NvdW50ID0gMFxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3RzZFxyXG4gICAgICAgIGNyZWF0ZVN0c2RCb3goc3RibCk7XHJcblxyXG4gICAgICAgIC8vIG1vb3YvbXZleFxyXG4gICAgICAgIGxldCBtdmV4ID0gSVNPQm94ZXIuY3JlYXRlQm94KCdtdmV4JywgbW9vdik7XHJcblxyXG4gICAgICAgIC8vIG1vb3YvbXZleC90cmV4XHJcbiAgICAgICAgY3JlYXRlVHJleEJveChtdmV4KTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnRQcm90ZWN0aW9uICYmIHByb3RlY3Rpb25Db250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIGxldCBzdXBwb3J0ZWRLUyA9IHByb3RlY3Rpb25Db250cm9sbGVyLmdldFN1cHBvcnRlZEtleVN5c3RlbXNGcm9tQ29udGVudFByb3RlY3Rpb24oY29udGVudFByb3RlY3Rpb24pO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm90ZWN0aW9uU3lzdGVtU3BlY2lmaWNIZWFkZXJCb3gobW9vdiwgc3VwcG9ydGVkS1MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNdmhkQm94KG1vb3YpIHtcclxuXHJcbiAgICAgICAgbGV0IG12aGQgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdtdmhkJywgbW9vdik7XHJcblxyXG4gICAgICAgIG12aGQudmVyc2lvbiA9IDE7IC8vIHZlcnNpb24gPSAxICBpbiBvcmRlciB0byBoYXZlIDY0Yml0cyBkdXJhdGlvbiB2YWx1ZVxyXG5cclxuICAgICAgICBtdmhkLmNyZWF0aW9uX3RpbWUgPSAwOyAvLyB0aGUgY3JlYXRpb24gdGltZSBvZiB0aGUgcHJlc2VudGF0aW9uID0+IGlnbm9yZSAoc2V0IHRvIDApXHJcbiAgICAgICAgbXZoZC5tb2RpZmljYXRpb25fdGltZSA9IDA7IC8vIHRoZSBtb3N0IHJlY2VudCB0aW1lIHRoZSBwcmVzZW50YXRpb24gd2FzIG1vZGlmaWVkID0+IGlnbm9yZSAoc2V0IHRvIDApXHJcbiAgICAgICAgbXZoZC50aW1lc2NhbGUgPSB0aW1lc2NhbGU7IC8vIHRoZSB0aW1lLXNjYWxlIGZvciB0aGUgZW50aXJlIHByZXNlbnRhdGlvbiA9PiAxMDAwMDAwMCBmb3IgTVNTXHJcbiAgICAgICAgbXZoZC5kdXJhdGlvbiA9IE1hdGgucm91bmQocGVyaW9kLmR1cmF0aW9uICogdGltZXNjYWxlKTsgLy8gdGhlIGxlbmd0aCBvZiB0aGUgcHJlc2VudGF0aW9uIChpbiB0aGUgaW5kaWNhdGVkIHRpbWVzY2FsZSkgPT4gIHRha2UgZHVyYXRpb24gb2YgcGVyaW9kXHJcbiAgICAgICAgbXZoZC5yYXRlID0gMS4wOyAvLyAxNi4xNiBudW1iZXIsICcxLjAnID0gbm9ybWFsIHBsYXliYWNrXHJcbiAgICAgICAgbXZoZC52b2x1bWUgPSAxLjA7IC8vIDguOCBudW1iZXIsICcxLjAnID0gZnVsbCB2b2x1bWVcclxuICAgICAgICBtdmhkLnJlc2VydmVkMSA9IDA7XHJcbiAgICAgICAgbXZoZC5yZXNlcnZlZDIgPSBbMHgwLCAweDBdO1xyXG4gICAgICAgIG12aGQubWF0cml4ID0gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAvLyBwcm92aWRlcyBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBmb3IgdGhlIHZpZGVvO1xyXG4gICAgICAgICAgICAwLCAxLCAwLCAvLyAodSx2LHcpIGFyZSByZXN0cmljdGVkIGhlcmUgdG8gKDAsMCwxKVxyXG4gICAgICAgICAgICAwLCAwLCAxNjM4NFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbXZoZC5wcmVfZGVmaW5lZCA9IFswLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgICAgICBtdmhkLm5leHRfdHJhY2tfSUQgPSB0cmFja0lkICsgMTsgLy8gaW5kaWNhdGVzIGEgdmFsdWUgdG8gdXNlIGZvciB0aGUgdHJhY2sgSUQgb2YgdGhlIG5leHQgdHJhY2sgdG8gYmUgYWRkZWQgdG8gdGhpcyBwcmVzZW50YXRpb25cclxuXHJcbiAgICAgICAgcmV0dXJuIG12aGQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGtoZEJveCh0cmFrKSB7XHJcblxyXG4gICAgICAgIGxldCB0a2hkID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgndGtoZCcsIHRyYWspO1xyXG5cclxuICAgICAgICB0a2hkLnZlcnNpb24gPSAxOyAvLyB2ZXJzaW9uID0gMSAgaW4gb3JkZXIgdG8gaGF2ZSA2NGJpdHMgZHVyYXRpb24gdmFsdWVcclxuICAgICAgICB0a2hkLmZsYWdzID0gMHgxIHwgLy8gVHJhY2tfZW5hYmxlZCAoMHgwMDAwMDEpOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdHJhY2sgaXMgZW5hYmxlZFxyXG4gICAgICAgICAgICAweDIgfCAvLyBUcmFja19pbl9tb3ZpZSAoMHgwMDAwMDIpOiAgSW5kaWNhdGVzIHRoYXQgdGhlIHRyYWNrIGlzIHVzZWQgaW4gdGhlIHByZXNlbnRhdGlvblxyXG4gICAgICAgICAgICAweDQ7IC8vIFRyYWNrX2luX3ByZXZpZXcgKDB4MDAwMDA0KTogIEluZGljYXRlcyB0aGF0IHRoZSB0cmFjayBpcyB1c2VkIHdoZW4gcHJldmlld2luZyB0aGUgcHJlc2VudGF0aW9uXHJcblxyXG4gICAgICAgIHRraGQuY3JlYXRpb25fdGltZSA9IDA7IC8vIHRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSBwcmVzZW50YXRpb24gPT4gaWdub3JlIChzZXQgdG8gMClcclxuICAgICAgICB0a2hkLm1vZGlmaWNhdGlvbl90aW1lID0gMDsgLy8gdGhlIG1vc3QgcmVjZW50IHRpbWUgdGhlIHByZXNlbnRhdGlvbiB3YXMgbW9kaWZpZWQgPT4gaWdub3JlIChzZXQgdG8gMClcclxuICAgICAgICB0a2hkLnRyYWNrX0lEID0gdHJhY2tJZDsgLy8gdW5pcXVlbHkgaWRlbnRpZmllcyB0aGlzIHRyYWNrIG92ZXIgdGhlIGVudGlyZSBsaWZlLXRpbWUgb2YgdGhpcyBwcmVzZW50YXRpb25cclxuICAgICAgICB0a2hkLnJlc2VydmVkMSA9IDA7XHJcbiAgICAgICAgdGtoZC5kdXJhdGlvbiA9IE1hdGgucm91bmQocGVyaW9kLmR1cmF0aW9uICogdGltZXNjYWxlKTsgLy8gdGhlIGR1cmF0aW9uIG9mIHRoaXMgdHJhY2sgKGluIHRoZSB0aW1lc2NhbGUgaW5kaWNhdGVkIGluIHRoZSBNb3ZpZSBIZWFkZXIgQm94KSA9PiAgdGFrZSBkdXJhdGlvbiBvZiBwZXJpb2RcclxuICAgICAgICB0a2hkLnJlc2VydmVkMiA9IFsweDAsIDB4MF07XHJcbiAgICAgICAgdGtoZC5sYXllciA9IDA7IC8vIHNwZWNpZmllcyB0aGUgZnJvbnQtdG8tYmFjayBvcmRlcmluZyBvZiB2aWRlbyB0cmFja3M7IHRyYWNrcyB3aXRoIGxvd2VyIG51bWJlcnMgYXJlIGNsb3NlciB0byB0aGUgdmlld2VyID0+IDAgc2luY2Ugb25seSBvbmUgdmlkZW8gdHJhY2tcclxuICAgICAgICB0a2hkLmFsdGVybmF0ZV9ncm91cCA9IDA7IC8vIHNwZWNpZmllcyBhIGdyb3VwIG9yIGNvbGxlY3Rpb24gb2YgdHJhY2tzID0+IGlnbm9yZVxyXG4gICAgICAgIHRraGQudm9sdW1lID0gMS4wOyAvLyAnMS4wJyA9IGZ1bGwgdm9sdW1lXHJcbiAgICAgICAgdGtoZC5yZXNlcnZlZDMgPSAwO1xyXG4gICAgICAgIHRraGQubWF0cml4ID0gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAvLyBwcm92aWRlcyBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBmb3IgdGhlIHZpZGVvO1xyXG4gICAgICAgICAgICAwLCAxLCAwLCAvLyAodSx2LHcpIGFyZSByZXN0cmljdGVkIGhlcmUgdG8gKDAsMCwxKVxyXG4gICAgICAgICAgICAwLCAwLCAxNjM4NFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGtoZC53aWR0aCA9IHJlcHJlc2VudGF0aW9uLndpZHRoOyAvLyB2aXN1YWwgcHJlc2VudGF0aW9uIHdpZHRoXHJcbiAgICAgICAgdGtoZC5oZWlnaHQgPSByZXByZXNlbnRhdGlvbi5oZWlnaHQ7IC8vIHZpc3VhbCBwcmVzZW50YXRpb24gaGVpZ2h0XHJcblxyXG4gICAgICAgIHJldHVybiB0a2hkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1kaGRCb3gobWRpYSkge1xyXG5cclxuICAgICAgICBsZXQgbWRoZCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ21kaGQnLCBtZGlhKTtcclxuXHJcbiAgICAgICAgbWRoZC52ZXJzaW9uID0gMTsgLy8gdmVyc2lvbiA9IDEgIGluIG9yZGVyIHRvIGhhdmUgNjRiaXRzIGR1cmF0aW9uIHZhbHVlXHJcblxyXG4gICAgICAgIG1kaGQuY3JlYXRpb25fdGltZSA9IDA7IC8vIHRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSBwcmVzZW50YXRpb24gPT4gaWdub3JlIChzZXQgdG8gMClcclxuICAgICAgICBtZGhkLm1vZGlmaWNhdGlvbl90aW1lID0gMDsgLy8gdGhlIG1vc3QgcmVjZW50IHRpbWUgdGhlIHByZXNlbnRhdGlvbiB3YXMgbW9kaWZpZWQgPT4gaWdub3JlIChzZXQgdG8gMClcclxuICAgICAgICBtZGhkLnRpbWVzY2FsZSA9IHRpbWVzY2FsZTsgLy8gdGhlIHRpbWUtc2NhbGUgZm9yIHRoZSBlbnRpcmUgcHJlc2VudGF0aW9uXHJcbiAgICAgICAgbWRoZC5kdXJhdGlvbiA9IE1hdGgucm91bmQocGVyaW9kLmR1cmF0aW9uICogdGltZXNjYWxlKTsgLy8gdGhlIGR1cmF0aW9uIG9mIHRoaXMgbWVkaWEgKGluIHRoZSBzY2FsZSBvZiB0aGUgdGltZXNjYWxlKS4gSWYgdGhlIGR1cmF0aW9uIGNhbm5vdCBiZSBkZXRlcm1pbmVkIHRoZW4gZHVyYXRpb24gaXMgc2V0IHRvIGFsbCAxcy5cclxuICAgICAgICBtZGhkLmxhbmd1YWdlID0gYWRhcHRhdGlvblNldC5sYW5nIHx8ICd1bmQnOyAvLyBkZWNsYXJlcyB0aGUgbGFuZ3VhZ2UgY29kZSBmb3IgdGhpcyBtZWRpYSAoc2VlIGdldExhbmd1YWdlQ29kZSgpKVxyXG4gICAgICAgIG1kaGQucHJlX2RlZmluZWQgPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gbWRoZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVIZGxyQm94KG1kaWEpIHtcclxuXHJcbiAgICAgICAgbGV0IGhkbHIgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdoZGxyJywgbWRpYSk7XHJcblxyXG4gICAgICAgIGhkbHIucHJlX2RlZmluZWQgPSAwO1xyXG4gICAgICAgIHN3aXRjaCAoYWRhcHRhdGlvblNldC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLlZJREVPOlxyXG4gICAgICAgICAgICAgICAgaGRsci5oYW5kbGVyX3R5cGUgPSAndmlkZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQVVESU86XHJcbiAgICAgICAgICAgICAgICBoZGxyLmhhbmRsZXJfdHlwZSA9ICdzb3VuJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaGRsci5oYW5kbGVyX3R5cGUgPSAnbWV0YSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaGRsci5uYW1lID0gcmVwcmVzZW50YXRpb24uaWQ7XHJcbiAgICAgICAgaGRsci5yZXNlcnZlZCA9IFswLCAwLCAwXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhkbHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVm1oZEJveChtaW5mKSB7XHJcblxyXG4gICAgICAgIGxldCB2bWhkID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgndm1oZCcsIG1pbmYpO1xyXG5cclxuICAgICAgICB2bWhkLmZsYWdzID0gMTtcclxuXHJcbiAgICAgICAgdm1oZC5ncmFwaGljc21vZGUgPSAwOyAvLyBzcGVjaWZpZXMgYSBjb21wb3NpdGlvbiBtb2RlIGZvciB0aGlzIHZpZGVvIHRyYWNrLCBmcm9tIHRoZSBmb2xsb3dpbmcgZW51bWVyYXRlZCBzZXQsIHdoaWNoIG1heSBiZSBleHRlbmRlZCBieSBkZXJpdmVkIHNwZWNpZmljYXRpb25zOiBjb3B5ID0gMCBjb3B5IG92ZXIgdGhlIGV4aXN0aW5nIGltYWdlXHJcbiAgICAgICAgdm1oZC5vcGNvbG9yID0gWzAsIDAsIDBdOyAvLyBpcyBhIHNldCBvZiAzIGNvbG91ciB2YWx1ZXMgKHJlZCwgZ3JlZW4sIGJsdWUpIGF2YWlsYWJsZSBmb3IgdXNlIGJ5IGdyYXBoaWNzIG1vZGVzXHJcblxyXG4gICAgICAgIHJldHVybiB2bWhkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNtaGRCb3gobWluZikge1xyXG5cclxuICAgICAgICBsZXQgc21oZCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3NtaGQnLCBtaW5mKTtcclxuXHJcbiAgICAgICAgc21oZC5mbGFncyA9IDE7XHJcblxyXG4gICAgICAgIHNtaGQuYmFsYW5jZSA9IDA7IC8vIGlzIGEgZml4ZWQtcG9pbnQgOC44IG51bWJlciB0aGF0IHBsYWNlcyBtb25vIGF1ZGlvIHRyYWNrcyBpbiBhIHN0ZXJlbyBzcGFjZTsgMCBpcyBjZW50cmUgKHRoZSBub3JtYWwgdmFsdWUpOyBmdWxsIGxlZnQgaXMgLTEuMCBhbmQgZnVsbCByaWdodCBpcyAxLjAuXHJcbiAgICAgICAgc21oZC5yZXNlcnZlZCA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBzbWhkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURyZWZCb3goZGluZikge1xyXG5cclxuICAgICAgICBsZXQgZHJlZiA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ2RyZWYnLCBkaW5mKTtcclxuXHJcbiAgICAgICAgZHJlZi5lbnRyeV9jb3VudCA9IDE7XHJcbiAgICAgICAgZHJlZi5lbnRyaWVzID0gW107XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCd1cmwgJywgZHJlZiwgZmFsc2UpO1xyXG4gICAgICAgIHVybC5sb2NhdGlvbiA9ICcnO1xyXG4gICAgICAgIHVybC5mbGFncyA9IDE7XHJcblxyXG4gICAgICAgIGRyZWYuZW50cmllcy5wdXNoKHVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiBkcmVmO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0c2RCb3goc3RibCkge1xyXG5cclxuICAgICAgICBsZXQgc3RzZCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3N0c2QnLCBzdGJsKTtcclxuXHJcbiAgICAgICAgc3RzZC5lbnRyaWVzID0gW107XHJcbiAgICAgICAgc3dpdGNoIChhZGFwdGF0aW9uU2V0LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuVklERU86XHJcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFVRElPOlxyXG4gICAgICAgICAgICAgICAgc3RzZC5lbnRyaWVzLnB1c2goY3JlYXRlU2FtcGxlRW50cnkoc3RzZCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0c2QuZW50cnlfY291bnQgPSBzdHNkLmVudHJpZXMubGVuZ3RoOyAvLyBpcyBhbiBpbnRlZ2VyIHRoYXQgY291bnRzIHRoZSBhY3R1YWwgZW50cmllc1xyXG4gICAgICAgIHJldHVybiBzdHNkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNhbXBsZUVudHJ5KHN0c2QpIHtcclxuICAgICAgICBsZXQgY29kZWMgPSByZXByZXNlbnRhdGlvbi5jb2RlY3Muc3Vic3RyaW5nKDAsIHJlcHJlc2VudGF0aW9uLmNvZGVjcy5pbmRleE9mKCcuJykpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvZGVjKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2F2YzEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFWQ1Zpc3VhbFNhbXBsZUVudHJ5KHN0c2QsIGNvZGVjKTtcclxuICAgICAgICAgICAgY2FzZSAnbXA0YSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlTVA0QXVkaW9TYW1wbGVFbnRyeShzdHNkLCBjb2RlYyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogTXNzRXJyb3JzLk1TU19VTlNVUFBPUlRFRF9DT0RFQ19DT0RFLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IE1zc0Vycm9ycy5NU1NfVU5TVVBQT1JURURfQ09ERUNfTUVTU0FHRSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVjOiBjb2RlY1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFWQ1Zpc3VhbFNhbXBsZUVudHJ5KHN0c2QsIGNvZGVjKSB7XHJcbiAgICAgICAgbGV0IGF2YzE7XHJcblxyXG4gICAgICAgIGlmIChjb250ZW50UHJvdGVjdGlvbikge1xyXG4gICAgICAgICAgICBhdmMxID0gSVNPQm94ZXIuY3JlYXRlQm94KCdlbmN2Jywgc3RzZCwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF2YzEgPSBJU09Cb3hlci5jcmVhdGVCb3goJ2F2YzEnLCBzdHNkLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTYW1wbGVFbnRyeSBmaWVsZHNcclxuICAgICAgICBhdmMxLnJlc2VydmVkMSA9IFsweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwXTtcclxuICAgICAgICBhdmMxLmRhdGFfcmVmZXJlbmNlX2luZGV4ID0gMTtcclxuXHJcbiAgICAgICAgLy8gVmlzdWFsU2FtcGxlRW50cnkgZmllbGRzXHJcbiAgICAgICAgYXZjMS5wcmVfZGVmaW5lZDEgPSAwO1xyXG4gICAgICAgIGF2YzEucmVzZXJ2ZWQyID0gMDtcclxuICAgICAgICBhdmMxLnByZV9kZWZpbmVkMiA9IFswLCAwLCAwXTtcclxuICAgICAgICBhdmMxLmhlaWdodCA9IHJlcHJlc2VudGF0aW9uLmhlaWdodDtcclxuICAgICAgICBhdmMxLndpZHRoID0gcmVwcmVzZW50YXRpb24ud2lkdGg7XHJcbiAgICAgICAgYXZjMS5ob3JpenJlc29sdXRpb24gPSA3MjsgLy8gNzIgZHBpXHJcbiAgICAgICAgYXZjMS52ZXJ0cmVzb2x1dGlvbiA9IDcyOyAvLyA3MiBkcGlcclxuICAgICAgICBhdmMxLnJlc2VydmVkMyA9IDA7XHJcbiAgICAgICAgYXZjMS5mcmFtZV9jb3VudCA9IDE7IC8vIDEgY29tcHJlc3NlZCB2aWRlbyBmcmFtZSBwZXIgc2FtcGxlXHJcbiAgICAgICAgYXZjMS5jb21wcmVzc29ybmFtZSA9IFtcclxuICAgICAgICAgICAgMHgwQSwgMHg0MSwgMHg1NiwgMHg0MywgMHgyMCwgMHg0MywgMHg2RiwgMHg2NCwgLy8gPSAnQVZDIENvZGluZyc7XHJcbiAgICAgICAgICAgIDB4NjksIDB4NkUsIDB4NjcsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGF2YzEuZGVwdGggPSAweDAwMTg7IC8vIDB4MDAxOCDigJMgaW1hZ2VzIGFyZSBpbiBjb2xvdXIgd2l0aCBubyBhbHBoYS5cclxuICAgICAgICBhdmMxLnByZV9kZWZpbmVkMyA9IDY1NTM1O1xyXG4gICAgICAgIGF2YzEuY29uZmlnID0gY3JlYXRlQVZDMUNvbmZpZ3VyYXRpb25SZWNvcmQoKTtcclxuICAgICAgICBpZiAoY29udGVudFByb3RlY3Rpb24pIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgUHJvdGVjdGlvbiBTY2hlbWUgSW5mbyBCb3hcclxuICAgICAgICAgICAgbGV0IHNpbmYgPSBJU09Cb3hlci5jcmVhdGVCb3goJ3NpbmYnLCBhdmMxKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIE9yaWdpbmFsIEZvcm1hdCBCb3ggPT4gaW5kaWNhdGUgY29kZWMgdHlwZSBvZiB0aGUgZW5jcnlwdGVkIGNvbnRlbnRcclxuICAgICAgICAgICAgY3JlYXRlT3JpZ2luYWxGb3JtYXRCb3goc2luZiwgY29kZWMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgU2NoZW1lIFR5cGUgYm94XHJcbiAgICAgICAgICAgIGNyZWF0ZVNjaGVtZVR5cGVCb3goc2luZik7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCBTY2hlbWUgSW5mb3JtYXRpb24gQm94XHJcbiAgICAgICAgICAgIGNyZWF0ZVNjaGVtZUluZm9ybWF0aW9uQm94KHNpbmYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF2YzE7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQVZDMUNvbmZpZ3VyYXRpb25SZWNvcmQoKSB7XHJcblxyXG4gICAgICAgIGxldCBhdmNDID0gbnVsbDtcclxuICAgICAgICBsZXQgYXZjQ0xlbmd0aCA9IDE1OyAvLyBsZW5ndGggPSAxNSBieSBkZWZhdWx0ICgwIFNQUyBhbmQgMCBQUFMpXHJcblxyXG4gICAgICAgIC8vIEZpcnN0IGdldCBhbGwgU1BTIGFuZCBQUFMgZnJvbSBjb2RlY1ByaXZhdGVEYXRhXHJcbiAgICAgICAgbGV0IHNwcyA9IFtdO1xyXG4gICAgICAgIGxldCBwcHMgPSBbXTtcclxuICAgICAgICBsZXQgQVZDUHJvZmlsZUluZGljYXRpb24gPSAwO1xyXG4gICAgICAgIGxldCBBVkNMZXZlbEluZGljYXRpb24gPSAwO1xyXG4gICAgICAgIGxldCBwcm9maWxlX2NvbXBhdGliaWxpdHkgPSAwO1xyXG5cclxuICAgICAgICBsZXQgbmFsdXMgPSByZXByZXNlbnRhdGlvbi5jb2RlY1ByaXZhdGVEYXRhLnNwbGl0KCcwMDAwMDAwMScpLnNsaWNlKDEpO1xyXG4gICAgICAgIGxldCBuYWx1Qnl0ZXMsIG5hbHVUeXBlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5hbHVCeXRlcyA9IGhleFN0cmluZ3RvQnVmZmVyKG5hbHVzW2ldKTtcclxuXHJcbiAgICAgICAgICAgIG5hbHVUeXBlID0gbmFsdUJ5dGVzWzBdICYgMHgxRjtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAobmFsdVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTkFMVVRZUEVfU1BTOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwcy5wdXNoKG5hbHVCeXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZjQ0xlbmd0aCArPSBuYWx1Qnl0ZXMubGVuZ3RoICsgMjsgLy8gMiA9IHNlcXVlbmNlUGFyYW1ldGVyU2V0TGVuZ3RoIGZpZWxkIGxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBOQUxVVFlQRV9QUFM6XHJcbiAgICAgICAgICAgICAgICAgICAgcHBzLnB1c2gobmFsdUJ5dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBhdmNDTGVuZ3RoICs9IG5hbHVCeXRlcy5sZW5ndGggKyAyOyAvLyAyID0gcGljdHVyZVBhcmFtZXRlclNldExlbmd0aCBmaWVsZCBsZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBwcm9maWxlIGFuZCBsZXZlbCBmcm9tIFNQU1xyXG4gICAgICAgIGlmIChzcHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBBVkNQcm9maWxlSW5kaWNhdGlvbiA9IHNwc1swXVsxXTtcclxuICAgICAgICAgICAgcHJvZmlsZV9jb21wYXRpYmlsaXR5ID0gc3BzWzBdWzJdO1xyXG4gICAgICAgICAgICBBVkNMZXZlbEluZGljYXRpb24gPSBzcHNbMF1bM107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBhdmNDIGJ1ZmZlclxyXG4gICAgICAgIGF2Y0MgPSBuZXcgVWludDhBcnJheShhdmNDTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIC8vIGxlbmd0aFxyXG4gICAgICAgIGF2Y0NbaSsrXSA9IChhdmNDTGVuZ3RoICYgMHhGRjAwMDAwMCkgPj4gMjQ7XHJcbiAgICAgICAgYXZjQ1tpKytdID0gKGF2Y0NMZW5ndGggJiAweDAwRkYwMDAwKSA+PiAxNjtcclxuICAgICAgICBhdmNDW2krK10gPSAoYXZjQ0xlbmd0aCAmIDB4MDAwMEZGMDApID4+IDg7XHJcbiAgICAgICAgYXZjQ1tpKytdID0gKGF2Y0NMZW5ndGggJiAweDAwMDAwMEZGKTtcclxuICAgICAgICBhdmNDLnNldChbMHg2MSwgMHg3NiwgMHg2MywgMHg0M10sIGkpOyAvLyB0eXBlID0gJ2F2Y0MnXHJcbiAgICAgICAgaSArPSA0O1xyXG4gICAgICAgIGF2Y0NbaSsrXSA9IDE7IC8vIGNvbmZpZ3VyYXRpb25WZXJzaW9uID0gMVxyXG4gICAgICAgIGF2Y0NbaSsrXSA9IEFWQ1Byb2ZpbGVJbmRpY2F0aW9uO1xyXG4gICAgICAgIGF2Y0NbaSsrXSA9IHByb2ZpbGVfY29tcGF0aWJpbGl0eTtcclxuICAgICAgICBhdmNDW2krK10gPSBBVkNMZXZlbEluZGljYXRpb247XHJcbiAgICAgICAgYXZjQ1tpKytdID0gMHhGRjsgLy8gJzExMTExJyArIGxlbmd0aFNpemVNaW51c09uZSA9IDNcclxuICAgICAgICBhdmNDW2krK10gPSAweEUwIHwgc3BzLmxlbmd0aDsgLy8gJzExMScgKyBudW1PZlNlcXVlbmNlUGFyYW1ldGVyU2V0c1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgc3BzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIGF2Y0NbaSsrXSA9IChzcHNbbl0ubGVuZ3RoICYgMHhGRjAwKSA+PiA4O1xyXG4gICAgICAgICAgICBhdmNDW2krK10gPSAoc3BzW25dLmxlbmd0aCAmIDB4MDBGRik7XHJcbiAgICAgICAgICAgIGF2Y0Muc2V0KHNwc1tuXSwgaSk7XHJcbiAgICAgICAgICAgIGkgKz0gc3BzW25dLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXZjQ1tpKytdID0gcHBzLmxlbmd0aDsgLy8gbnVtT2ZQaWN0dXJlUGFyYW1ldGVyU2V0c1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgcHBzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIGF2Y0NbaSsrXSA9IChwcHNbbl0ubGVuZ3RoICYgMHhGRjAwKSA+PiA4O1xyXG4gICAgICAgICAgICBhdmNDW2krK10gPSAocHBzW25dLmxlbmd0aCAmIDB4MDBGRik7XHJcbiAgICAgICAgICAgIGF2Y0Muc2V0KHBwc1tuXSwgaSk7XHJcbiAgICAgICAgICAgIGkgKz0gcHBzW25dLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhdmNDO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1QNEF1ZGlvU2FtcGxlRW50cnkoc3RzZCwgY29kZWMpIHtcclxuICAgICAgICBsZXQgbXA0YTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnRQcm90ZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIG1wNGEgPSBJU09Cb3hlci5jcmVhdGVCb3goJ2VuY2EnLCBzdHNkLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbXA0YSA9IElTT0JveGVyLmNyZWF0ZUJveCgnbXA0YScsIHN0c2QsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNhbXBsZUVudHJ5IGZpZWxkc1xyXG4gICAgICAgIG1wNGEucmVzZXJ2ZWQxID0gWzB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDBdO1xyXG4gICAgICAgIG1wNGEuZGF0YV9yZWZlcmVuY2VfaW5kZXggPSAxO1xyXG5cclxuICAgICAgICAvLyBBdWRpb1NhbXBsZUVudHJ5IGZpZWxkc1xyXG4gICAgICAgIG1wNGEucmVzZXJ2ZWQyID0gWzB4MCwgMHgwXTtcclxuICAgICAgICBtcDRhLmNoYW5uZWxjb3VudCA9IHJlcHJlc2VudGF0aW9uLmF1ZGlvQ2hhbm5lbHM7XHJcbiAgICAgICAgbXA0YS5zYW1wbGVzaXplID0gMTY7XHJcbiAgICAgICAgbXA0YS5wcmVfZGVmaW5lZCA9IDA7XHJcbiAgICAgICAgbXA0YS5yZXNlcnZlZF8zID0gMDtcclxuICAgICAgICBtcDRhLnNhbXBsZXJhdGUgPSByZXByZXNlbnRhdGlvbi5hdWRpb1NhbXBsaW5nUmF0ZSA8PCAxNjtcclxuXHJcbiAgICAgICAgbXA0YS5lc2RzID0gY3JlYXRlTVBFRzRBQUNFU0Rlc2NyaXB0b3IoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnRQcm90ZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFByb3RlY3Rpb24gU2NoZW1lIEluZm8gQm94XHJcbiAgICAgICAgICAgIGxldCBzaW5mID0gSVNPQm94ZXIuY3JlYXRlQm94KCdzaW5mJywgbXA0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCBPcmlnaW5hbCBGb3JtYXQgQm94ID0+IGluZGljYXRlIGNvZGVjIHR5cGUgb2YgdGhlIGVuY3J5cHRlZCBjb250ZW50XHJcbiAgICAgICAgICAgIGNyZWF0ZU9yaWdpbmFsRm9ybWF0Qm94KHNpbmYsIGNvZGVjKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFNjaGVtZSBUeXBlIGJveFxyXG4gICAgICAgICAgICBjcmVhdGVTY2hlbWVUeXBlQm94KHNpbmYpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgU2NoZW1lIEluZm9ybWF0aW9uIEJveFxyXG4gICAgICAgICAgICBjcmVhdGVTY2hlbWVJbmZvcm1hdGlvbkJveChzaW5mKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtcDRhO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1QRUc0QUFDRVNEZXNjcmlwdG9yKCkge1xyXG5cclxuICAgICAgICAvLyBBdWRpb1NwZWNpZmljQ29uZmlnIChzZWUgSVNPL0lFQyAxNDQ5Ni0zLCBzdWJwYXJ0IDEpID0+IGNvcnJlc3BvbmRzIHRvIGhleCBieXRlcyBjb250YWluZWQgaW4gJ2NvZGVjUHJpdmF0ZURhdGEnIGZpZWxkXHJcbiAgICAgICAgbGV0IGF1ZGlvU3BlY2lmaWNDb25maWcgPSBoZXhTdHJpbmd0b0J1ZmZlcihyZXByZXNlbnRhdGlvbi5jb2RlY1ByaXZhdGVEYXRhKTtcclxuXHJcbiAgICAgICAgLy8gRVNEUyBsZW5ndGggPSBlc2RzIGJveCBoZWFkZXIgbGVuZ3RoICg9IDEyKSArXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICBFU19EZXNjcmlwdG9yIGhlYWRlciBsZW5ndGggKD0gNSkgK1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgRGVjb2RlckNvbmZpZ0Rlc2NyaXB0b3IgaGVhZGVyIGxlbmd0aCAoPSAxNSkgK1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgZGVjb2RlclNwZWNpZmljSW5mbyBoZWFkZXIgbGVuZ3RoICg9IDIpICtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgIEF1ZGlvU3BlY2lmaWNDb25maWcgbGVuZ3RoICg9IGNvZGVjUHJpdmF0ZURhdGEgbGVuZ3RoKVxyXG4gICAgICAgIGxldCBlc2RzTGVuZ3RoID0gMzQgKyBhdWRpb1NwZWNpZmljQ29uZmlnLmxlbmd0aDtcclxuICAgICAgICBsZXQgZXNkcyA9IG5ldyBVaW50OEFycmF5KGVzZHNMZW5ndGgpO1xyXG5cclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgLy8gZXNkcyBib3hcclxuICAgICAgICBlc2RzW2krK10gPSAoZXNkc0xlbmd0aCAmIDB4RkYwMDAwMDApID4+IDI0OyAvLyBlc2RzIGJveCBsZW5ndGhcclxuICAgICAgICBlc2RzW2krK10gPSAoZXNkc0xlbmd0aCAmIDB4MDBGRjAwMDApID4+IDE2OyAvLyAnJ1xyXG4gICAgICAgIGVzZHNbaSsrXSA9IChlc2RzTGVuZ3RoICYgMHgwMDAwRkYwMCkgPj4gODsgLy8gJydcclxuICAgICAgICBlc2RzW2krK10gPSAoZXNkc0xlbmd0aCAmIDB4MDAwMDAwRkYpOyAvLyAnJ1xyXG4gICAgICAgIGVzZHMuc2V0KFsweDY1LCAweDczLCAweDY0LCAweDczXSwgaSk7IC8vIHR5cGUgPSAnZXNkcydcclxuICAgICAgICBpICs9IDQ7XHJcbiAgICAgICAgZXNkcy5zZXQoWzAsIDAsIDAsIDBdLCBpKTsgLy8gdmVyc2lvbiA9IDAsIGZsYWdzID0gMFxyXG4gICAgICAgIGkgKz0gNDtcclxuICAgICAgICAvLyBFU19EZXNjcmlwdG9yIChzZWUgSVNPL0lFQyAxNDQ5Ni0xIChTeXN0ZW1zKSlcclxuICAgICAgICBlc2RzW2krK10gPSAweDAzOyAvLyB0YWcgPSAweDAzIChFU19EZXNjclRhZylcclxuICAgICAgICBlc2RzW2krK10gPSAyMCArIGF1ZGlvU3BlY2lmaWNDb25maWcubGVuZ3RoOyAvLyBzaXplXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHRyYWNrSWQgJiAweEZGMDApID4+IDg7IC8vIEVTX0lEID0gdHJhY2tfaWRcclxuICAgICAgICBlc2RzW2krK10gPSAodHJhY2tJZCAmIDB4MDBGRik7IC8vICcnXHJcbiAgICAgICAgZXNkc1tpKytdID0gMDsgLy8gZmxhZ3MgYW5kIHN0cmVhbVByaW9yaXR5XHJcblxyXG4gICAgICAgIC8vIERlY29kZXJDb25maWdEZXNjcmlwdG9yIChzZWUgSVNPL0lFQyAxNDQ5Ni0xIChTeXN0ZW1zKSlcclxuICAgICAgICBlc2RzW2krK10gPSAweDA0OyAvLyB0YWcgPSAweDA0IChEZWNvZGVyQ29uZmlnRGVzY3JUYWcpXHJcbiAgICAgICAgZXNkc1tpKytdID0gMTUgKyBhdWRpb1NwZWNpZmljQ29uZmlnLmxlbmd0aDsgLy8gc2l6ZVxyXG4gICAgICAgIGVzZHNbaSsrXSA9IDB4NDA7IC8vIG9iamVjdFR5cGVJbmRpY2F0aW9uID0gMHg0MCAoTVBFRy00IEFBQylcclxuICAgICAgICBlc2RzW2ldID0gMHgwNSA8PCAyOyAvLyBzdHJlYW1UeXBlID0gMHgwNSAoQXVkaW9zdHJlYW0pXHJcbiAgICAgICAgZXNkc1tpXSB8PSAwIDw8IDE7IC8vIHVwU3RyZWFtID0gMFxyXG4gICAgICAgIGVzZHNbaSsrXSB8PSAxOyAvLyByZXNlcnZlZCA9IDFcclxuICAgICAgICBlc2RzW2krK10gPSAweEZGOyAvLyBidWZmZXJzaXplREIgPSB1bmRlZmluZWRcclxuICAgICAgICBlc2RzW2krK10gPSAweEZGOyAvLyAnJ1xyXG4gICAgICAgIGVzZHNbaSsrXSA9IDB4RkY7IC8vICcnXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4RkYwMDAwMDApID4+IDI0OyAvLyBtYXhCaXRyYXRlXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDBGRjAwMDApID4+IDE2OyAvLyAnJ1xyXG4gICAgICAgIGVzZHNbaSsrXSA9IChyZXByZXNlbnRhdGlvbi5iYW5kd2lkdGggJiAweDAwMDBGRjAwKSA+PiA4OyAvLyAnJ1xyXG4gICAgICAgIGVzZHNbaSsrXSA9IChyZXByZXNlbnRhdGlvbi5iYW5kd2lkdGggJiAweDAwMDAwMEZGKTsgLy8gJydcclxuICAgICAgICBlc2RzW2krK10gPSAocmVwcmVzZW50YXRpb24uYmFuZHdpZHRoICYgMHhGRjAwMDAwMCkgPj4gMjQ7IC8vIGF2Z2JpdHJhdGVcclxuICAgICAgICBlc2RzW2krK10gPSAocmVwcmVzZW50YXRpb24uYmFuZHdpZHRoICYgMHgwMEZGMDAwMCkgPj4gMTY7IC8vICcnXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDAwMEZGMDApID4+IDg7IC8vICcnXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDAwMDAwRkYpOyAvLyAnJ1xyXG5cclxuICAgICAgICAvLyBEZWNvZGVyU3BlY2lmaWNJbmZvIChzZWUgSVNPL0lFQyAxNDQ5Ni0xIChTeXN0ZW1zKSlcclxuICAgICAgICBlc2RzW2krK10gPSAweDA1OyAvLyB0YWcgPSAweDA1IChEZWNTcGVjaWZpY0luZm9UYWcpXHJcbiAgICAgICAgZXNkc1tpKytdID0gYXVkaW9TcGVjaWZpY0NvbmZpZy5sZW5ndGg7IC8vIHNpemVcclxuICAgICAgICBlc2RzLnNldChhdWRpb1NwZWNpZmljQ29uZmlnLCBpKTsgLy8gQXVkaW9TcGVjaWZpY0NvbmZpZyBieXRlc1xyXG5cclxuICAgICAgICByZXR1cm4gZXNkcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPcmlnaW5hbEZvcm1hdEJveChzaW5mLCBjb2RlYykge1xyXG4gICAgICAgIGxldCBmcm1hID0gSVNPQm94ZXIuY3JlYXRlQm94KCdmcm1hJywgc2luZik7XHJcbiAgICAgICAgZnJtYS5kYXRhX2Zvcm1hdCA9IHN0cmluZ1RvQ2hhckNvZGUoY29kZWMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNjaGVtZVR5cGVCb3goc2luZikge1xyXG4gICAgICAgIGxldCBzY2htID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc2NobScsIHNpbmYpO1xyXG5cclxuICAgICAgICBzY2htLmZsYWdzID0gMDtcclxuICAgICAgICBzY2htLnZlcnNpb24gPSAwO1xyXG4gICAgICAgIHNjaG0uc2NoZW1lX3R5cGUgPSAweDYzNjU2RTYzOyAvLyAnY2VuYycgPT4gY29tbW9uIGVuY3J5cHRpb25cclxuICAgICAgICBzY2htLnNjaGVtZV92ZXJzaW9uID0gMHgwMDAxMDAwMDsgLy8gdmVyc2lvbiBzZXQgdG8gMHgwMDAxMDAwMCAoTWFqb3IgdmVyc2lvbiAxLCBNaW5vciB2ZXJzaW9uIDApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2NoZW1lSW5mb3JtYXRpb25Cb3goc2luZikge1xyXG4gICAgICAgIGxldCBzY2hpID0gSVNPQm94ZXIuY3JlYXRlQm94KCdzY2hpJywgc2luZik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFRyYWNrIEVuY3J5cHRpb24gQm94XHJcbiAgICAgICAgY3JlYXRlVHJhY2tFbmNyeXB0aW9uQm94KHNjaGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3RlY3Rpb25TeXN0ZW1TcGVjaWZpY0hlYWRlckJveChtb292LCBrZXlTeXN0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHBzc2hfYnl0ZXMsXHJcbiAgICAgICAgICAgIHBzc2gsXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHBhcnNlZEJ1ZmZlcjtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleVN5c3RlbXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgcHNzaF9ieXRlcyA9IGtleVN5c3RlbXNbaV0uaW5pdERhdGE7XHJcbiAgICAgICAgICAgIHBhcnNlZEJ1ZmZlciA9IElTT0JveGVyLnBhcnNlQnVmZmVyKHBzc2hfYnl0ZXMpO1xyXG4gICAgICAgICAgICBwc3NoID0gcGFyc2VkQnVmZmVyLmZldGNoKCdwc3NoJyk7XHJcbiAgICAgICAgICAgIGlmIChwc3NoKSB7XHJcbiAgICAgICAgICAgICAgICBJU09Cb3hlci5VdGlscy5hcHBlbmRCb3gobW9vdiwgcHNzaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVHJhY2tFbmNyeXB0aW9uQm94KHNjaGkpIHtcclxuICAgICAgICBsZXQgdGVuYyA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3RlbmMnLCBzY2hpKTtcclxuXHJcbiAgICAgICAgdGVuYy5mbGFncyA9IDA7XHJcbiAgICAgICAgdGVuYy52ZXJzaW9uID0gMDtcclxuXHJcbiAgICAgICAgdGVuYy5kZWZhdWx0X0lzRW5jcnlwdGVkID0gMHgxO1xyXG4gICAgICAgIHRlbmMuZGVmYXVsdF9JVl9zaXplID0gODtcclxuICAgICAgICB0ZW5jLmRlZmF1bHRfS0lEID0gKGNvbnRlbnRQcm90ZWN0aW9uICYmIChjb250ZW50UHJvdGVjdGlvbi5sZW5ndGgpID4gMCAmJiBjb250ZW50UHJvdGVjdGlvblswXVsnY2VuYzpkZWZhdWx0X0tJRCddKSA/XHJcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9uWzBdWydjZW5jOmRlZmF1bHRfS0lEJ10gOiBbMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUcmV4Qm94KG1vb3YpIHtcclxuICAgICAgICBsZXQgdHJleCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3RyZXgnLCBtb292KTtcclxuXHJcbiAgICAgICAgdHJleC50cmFja19JRCA9IHRyYWNrSWQ7XHJcbiAgICAgICAgdHJleC5kZWZhdWx0X3NhbXBsZV9kZXNjcmlwdGlvbl9pbmRleCA9IDE7XHJcbiAgICAgICAgdHJleC5kZWZhdWx0X3NhbXBsZV9kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgdHJleC5kZWZhdWx0X3NhbXBsZV9zaXplID0gMDtcclxuICAgICAgICB0cmV4LmRlZmF1bHRfc2FtcGxlX2ZsYWdzID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRyZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGV4U3RyaW5ndG9CdWZmZXIoc3RyKSB7XHJcbiAgICAgICAgbGV0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KHN0ci5sZW5ndGggLyAyKTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGggLyAyOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYnVmW2ldID0gcGFyc2VJbnQoJycgKyBzdHJbaSAqIDJdICsgc3RyW2kgKiAyICsgMV0sIDE2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdHJpbmdUb0NoYXJDb2RlKHN0cikge1xyXG4gICAgICAgIGxldCBjb2RlID0gMDtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb2RlIHw9IHN0ci5jaGFyQ29kZUF0KGkpIDw8ICgoc3RyLmxlbmd0aCAtIGkgLSAxKSAqIDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29kZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1vb3YocmVwKSB7XHJcbiAgICAgICAgaWYgKCFyZXAgfHwgIXJlcC5hZGFwdGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpc29GaWxlLFxyXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcjtcclxuXHJcbiAgICAgICAgcmVwcmVzZW50YXRpb24gPSByZXA7XHJcbiAgICAgICAgYWRhcHRhdGlvblNldCA9IHJlcHJlc2VudGF0aW9uLmFkYXB0YXRpb247XHJcblxyXG4gICAgICAgIHBlcmlvZCA9IGFkYXB0YXRpb25TZXQucGVyaW9kO1xyXG4gICAgICAgIHRyYWNrSWQgPSBhZGFwdGF0aW9uU2V0LmluZGV4ICsgMTtcclxuICAgICAgICBjb250ZW50UHJvdGVjdGlvbiA9IHBlcmlvZC5tcGQubWFuaWZlc3QuUGVyaW9kX2FzQXJyYXlbcGVyaW9kLmluZGV4XS5BZGFwdGF0aW9uU2V0X2FzQXJyYXlbYWRhcHRhdGlvblNldC5pbmRleF0uQ29udGVudFByb3RlY3Rpb247XHJcblxyXG4gICAgICAgIHRpbWVzY2FsZSA9IHBlcmlvZC5tcGQubWFuaWZlc3QuUGVyaW9kX2FzQXJyYXlbcGVyaW9kLmluZGV4XS5BZGFwdGF0aW9uU2V0X2FzQXJyYXlbYWRhcHRhdGlvblNldC5pbmRleF0uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZTtcclxuXHJcbiAgICAgICAgaXNvRmlsZSA9IElTT0JveGVyLmNyZWF0ZUZpbGUoKTtcclxuICAgICAgICBjcmVhdGVGdHlwQm94KGlzb0ZpbGUpO1xyXG4gICAgICAgIGNyZWF0ZU1vb3ZCb3goaXNvRmlsZSk7XHJcblxyXG4gICAgICAgIGFycmF5QnVmZmVyID0gaXNvRmlsZS53cml0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXlCdWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2UgPSB7XHJcbiAgICAgICAgZ2VuZXJhdGVNb292OiBnZW5lcmF0ZU1vb3ZcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5Nc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3IuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvcic7XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqLyIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IE1TU0ZyYWdtZW50TW9vZlByb2Nlc3NvciBmcm9tICcuL01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcic7XHJcbmltcG9ydCBNU1NGcmFnbWVudE1vb3ZQcm9jZXNzb3IgZnJvbSAnLi9Nc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3InO1xyXG5pbXBvcnQgTXNzRXZlbnRzIGZyb20gJy4vTXNzRXZlbnRzJztcclxuXHJcblxyXG4vLyBBZGQgc3BlY2lmaWMgYm94IHByb2Nlc3NvcnMgbm90IHByb3ZpZGVkIGJ5IGNvZGVtLWlzb2JveGVyIGxpYnJhcnlcclxuXHJcbmZ1bmN0aW9uIGFycmF5RXF1YWwoYXJyMSwgYXJyMikge1xyXG4gICAgcmV0dXJuIChhcnIxLmxlbmd0aCA9PT0gYXJyMi5sZW5ndGgpICYmIGFycjEuZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGFycjJbaW5kZXhdO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhaW9Qcm9jZXNzb3IoKSB7XHJcbiAgICB0aGlzLl9wcm9jRnVsbEJveCgpO1xyXG4gICAgaWYgKHRoaXMuZmxhZ3MgJiAxKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdhdXhfaW5mb190eXBlJywgJ3VpbnQnLCAzMik7XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdhdXhfaW5mb190eXBlX3BhcmFtZXRlcicsICd1aW50JywgMzIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcHJvY0ZpZWxkKCdlbnRyeV9jb3VudCcsICd1aW50JywgMzIpO1xyXG4gICAgdGhpcy5fcHJvY0ZpZWxkQXJyYXkoJ29mZnNldCcsIHRoaXMuZW50cnlfY291bnQsICd1aW50JywgKHRoaXMudmVyc2lvbiA9PT0gMSkgPyA2NCA6IDMyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2FpelByb2Nlc3NvcigpIHtcclxuICAgIHRoaXMuX3Byb2NGdWxsQm94KCk7XHJcbiAgICBpZiAodGhpcy5mbGFncyAmIDEpIHtcclxuICAgICAgICB0aGlzLl9wcm9jRmllbGQoJ2F1eF9pbmZvX3R5cGUnLCAndWludCcsIDMyKTtcclxuICAgICAgICB0aGlzLl9wcm9jRmllbGQoJ2F1eF9pbmZvX3R5cGVfcGFyYW1ldGVyJywgJ3VpbnQnLCAzMik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9wcm9jRmllbGQoJ2RlZmF1bHRfc2FtcGxlX2luZm9fc2l6ZScsICd1aW50JywgOCk7XHJcbiAgICB0aGlzLl9wcm9jRmllbGQoJ3NhbXBsZV9jb3VudCcsICd1aW50JywgMzIpO1xyXG4gICAgaWYgKHRoaXMuZGVmYXVsdF9zYW1wbGVfaW5mb19zaXplID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkQXJyYXkoJ3NhbXBsZV9pbmZvX3NpemUnLCB0aGlzLnNhbXBsZV9jb3VudCwgJ3VpbnQnLCA4KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VuY1Byb2Nlc3NvcigpIHtcclxuICAgIHRoaXMuX3Byb2NGdWxsQm94KCk7XHJcbiAgICB0aGlzLl9wcm9jRmllbGQoJ3NhbXBsZV9jb3VudCcsICd1aW50JywgMzIpO1xyXG4gICAgaWYgKHRoaXMuZmxhZ3MgJiAxKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdJVl9zaXplJywgJ3VpbnQnLCA4KTtcclxuICAgIH1cclxuICAgIHRoaXMuX3Byb2NFbnRyaWVzKCdlbnRyeScsIHRoaXMuc2FtcGxlX2NvdW50LCBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICB0aGlzLl9wcm9jRW50cnlGaWVsZChlbnRyeSwgJ0luaXRpYWxpemF0aW9uVmVjdG9yJywgJ2RhdGEnLCA4KTtcclxuICAgICAgICBpZiAodGhpcy5mbGFncyAmIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvY0VudHJ5RmllbGQoZW50cnksICdOdW1iZXJPZkVudHJpZXMnLCAndWludCcsIDE2KTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvY1N1YkVudHJpZXMoZW50cnksICdjbGVhckFuZENyeXB0ZWREYXRhJywgZW50cnkuTnVtYmVyT2ZFbnRyaWVzLCBmdW5jdGlvbiAoY2xlYXJBbmRDcnlwdGVkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY0VudHJ5RmllbGQoY2xlYXJBbmRDcnlwdGVkRGF0YSwgJ0J5dGVzT2ZDbGVhckRhdGEnLCAndWludCcsIDE2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2NFbnRyeUZpZWxkKGNsZWFyQW5kQ3J5cHRlZERhdGEsICdCeXRlc09mRW5jcnlwdGVkRGF0YScsICd1aW50JywgMzIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXVpZFByb2Nlc3NvcigpIHtcclxuICAgIGxldCB0ZnhkVXNlclR5cGUgPSBbMHg2RCwgMHgxRCwgMHg5QiwgMHgwNSwgMHg0MiwgMHhENSwgMHg0NCwgMHhFNiwgMHg4MCwgMHhFMiwgMHgxNCwgMHgxRCwgMHhBRiwgMHhGNywgMHg1NywgMHhCMl07XHJcbiAgICBsZXQgdGZyZlVzZXJUeXBlID0gWzB4RDQsIDB4ODAsIDB4N0UsIDB4RjIsIDB4Q0EsIDB4MzksIDB4NDYsIDB4OTUsIDB4OEUsIDB4NTQsIDB4MjYsIDB4Q0IsIDB4OUUsIDB4NDYsIDB4QTcsIDB4OUZdO1xyXG4gICAgbGV0IHNlcGlmZlVzZXJUeXBlID0gWzB4QTIsIDB4MzksIDB4NEYsIDB4NTIsIDB4NUEsIDB4OUIsIDB4NGYsIDB4MTQsIDB4QTIsIDB4NDQsIDB4NkMsIDB4NDIsIDB4N0MsIDB4NjQsIDB4OEQsIDB4RjRdO1xyXG5cclxuICAgIGlmIChhcnJheUVxdWFsKHRoaXMudXNlcnR5cGUsIHRmeGRVc2VyVHlwZSkpIHtcclxuICAgICAgICB0aGlzLl9wcm9jRnVsbEJveCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJzaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICd0ZnhkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdmcmFnbWVudF9hYnNvbHV0ZV90aW1lJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xyXG4gICAgICAgIHRoaXMuX3Byb2NGaWVsZCgnZnJhZ21lbnRfZHVyYXRpb24nLCAndWludCcsICh0aGlzLnZlcnNpb24gPT09IDEpID8gNjQgOiAzMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFycmF5RXF1YWwodGhpcy51c2VydHlwZSwgdGZyZlVzZXJUeXBlKSkge1xyXG4gICAgICAgIHRoaXMuX3Byb2NGdWxsQm94KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcnNpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gJ3RmcmYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wcm9jRmllbGQoJ2ZyYWdtZW50X2NvdW50JywgJ3VpbnQnLCA4KTtcclxuICAgICAgICB0aGlzLl9wcm9jRW50cmllcygnZW50cnknLCB0aGlzLmZyYWdtZW50X2NvdW50LCBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvY0VudHJ5RmllbGQoZW50cnksICdmcmFnbWVudF9hYnNvbHV0ZV90aW1lJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9jRW50cnlGaWVsZChlbnRyeSwgJ2ZyYWdtZW50X2R1cmF0aW9uJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcnJheUVxdWFsKHRoaXMudXNlcnR5cGUsIHNlcGlmZlVzZXJUeXBlKSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJzaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICdzZXBpZmYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZW5jUHJvY2Vzc29yLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1zc0ZyYWdtZW50UHJvY2Vzc29yKGNvbmZpZykge1xyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjb25zdCBtZXRyaWNzTW9kZWwgPSBjb25maWcubWV0cmljc01vZGVsO1xyXG4gICAgY29uc3QgcGxheWJhY2tDb250cm9sbGVyID0gY29uZmlnLnBsYXliYWNrQ29udHJvbGxlcjtcclxuICAgIGNvbnN0IGV2ZW50QnVzID0gY29uZmlnLmV2ZW50QnVzO1xyXG4gICAgY29uc3QgcHJvdGVjdGlvbkNvbnRyb2xsZXIgPSBjb25maWcucHJvdGVjdGlvbkNvbnRyb2xsZXI7XHJcbiAgICBjb25zdCBJU09Cb3hlciA9IGNvbmZpZy5JU09Cb3hlcjtcclxuICAgIGNvbnN0IGRlYnVnID0gY29uZmlnLmRlYnVnO1xyXG4gICAgbGV0IG1zc0ZyYWdtZW50TW9vdlByb2Nlc3NvcixcclxuICAgICAgICBtc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IsXHJcbiAgICAgICAgaW5zdGFuY2U7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgICAgSVNPQm94ZXIuYWRkQm94UHJvY2Vzc29yKCd1dWlkJywgdXVpZFByb2Nlc3Nvcik7XHJcbiAgICAgICAgSVNPQm94ZXIuYWRkQm94UHJvY2Vzc29yKCdzYWlvJywgc2Fpb1Byb2Nlc3Nvcik7XHJcbiAgICAgICAgSVNPQm94ZXIuYWRkQm94UHJvY2Vzc29yKCdzYWl6Jywgc2FpelByb2Nlc3Nvcik7XHJcbiAgICAgICAgSVNPQm94ZXIuYWRkQm94UHJvY2Vzc29yKCdzZW5jJywgc2VuY1Byb2Nlc3Nvcik7XHJcblxyXG4gICAgICAgIG1zc0ZyYWdtZW50TW9vdlByb2Nlc3NvciA9IE1TU0ZyYWdtZW50TW9vdlByb2Nlc3Nvcihjb250ZXh0KS5jcmVhdGUoe3Byb3RlY3Rpb25Db250cm9sbGVyOiBwcm90ZWN0aW9uQ29udHJvbGxlcixcclxuICAgICAgICAgICAgY29uc3RhbnRzOiBjb25maWcuY29uc3RhbnRzLCBJU09Cb3hlcjogSVNPQm94ZXJ9KTtcclxuXHJcbiAgICAgICAgbXNzRnJhZ21lbnRNb29mUHJvY2Vzc29yID0gTVNTRnJhZ21lbnRNb29mUHJvY2Vzc29yKGNvbnRleHQpLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBtZXRyaWNzTW9kZWw6IG1ldHJpY3NNb2RlbCxcclxuICAgICAgICAgICAgICAgIHBsYXliYWNrQ29udHJvbGxlcjogcGxheWJhY2tDb250cm9sbGVyLFxyXG4gICAgICAgICAgICAgICAgSVNPQm94ZXI6IElTT0JveGVyLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRCdXM6IGV2ZW50QnVzLFxyXG4gICAgICAgICAgICAgICAgZGVidWc6IGRlYnVnLFxyXG4gICAgICAgICAgICAgICAgZXJySGFuZGxlcjogY29uZmlnLmVyckhhbmRsZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVNb292KHJlcCkge1xyXG4gICAgICAgIHJldHVybiBtc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3IuZ2VuZXJhdGVNb292KHJlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0ZyYWdtZW50KGUsIHNwKSB7XHJcbiAgICAgICAgaWYgKCFlIHx8ICFlLnJlcXVlc3QgfHwgIWUucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlIHBhcmFtZXRlciBpcyBtaXNzaW5nIG9yIG1hbGZvcm1lZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBlLnJlcXVlc3Q7XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdNZWRpYVNlZ21lbnQnKSB7XHJcbiAgICAgICAgICAgIC8vIGl0J3MgYSBNZWRpYVNlZ21lbnQsIGxldCdzIGNvbnZlcnQgZnJhZ21lbnRcclxuICAgICAgICAgICAgbXNzRnJhZ21lbnRNb29mUHJvY2Vzc29yLmNvbnZlcnRGcmFnbWVudChlLCBzcCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC50eXBlID09PSAnRnJhZ21lbnRJbmZvU2VnbWVudCcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGl0J3MgYSBGcmFnbWVudEluZm8sIGFzayByZWxhdGl2ZSBmcmFnbWVudCBpbmZvIGNvbnRyb2xsZXIgdG8gaGFuZGxlIGl0XHJcbiAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoTXNzRXZlbnRzLkZSQUdNRU5UX0lORk9fTE9BRElOR19DT01QTEVURUQsIHtcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50SW5mbzogZSxcclxuICAgICAgICAgICAgICAgIHN0cmVhbVByb2Nlc3Nvcjogc3BcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIHNlbmRlciB2YWx1ZSB0byBzdG9wIGV2ZW50IHRvIGJlIHByb3BhZ2F0ZWQgKGZyYWdtZW50IGluZm8gbXVzdCBub3QgYmUgYWRkZWQgdG8gYnVmZmVyKVxyXG4gICAgICAgICAgICBlLnNlbmRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluc3RhbmNlID0ge1xyXG4gICAgICAgIGdlbmVyYXRlTW9vdjogZ2VuZXJhdGVNb292LFxyXG4gICAgICAgIHByb2Nlc3NGcmFnbWVudDogcHJvY2Vzc0ZyYWdtZW50XHJcbiAgICB9O1xyXG5cclxuICAgIHNldHVwKCk7XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5Nc3NGcmFnbWVudFByb2Nlc3Nvci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnTXNzRnJhZ21lbnRQcm9jZXNzb3InO1xyXG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShNc3NGcmFnbWVudFByb2Nlc3Nvcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqLyIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IERhdGFDaHVuayBmcm9tICcuLi9zdHJlYW1pbmcvdm8vRGF0YUNodW5rJztcclxuaW1wb3J0IEZyYWdtZW50UmVxdWVzdCBmcm9tICcuLi9zdHJlYW1pbmcvdm8vRnJhZ21lbnRSZXF1ZXN0JztcclxuaW1wb3J0IE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIgZnJvbSAnLi9Nc3NGcmFnbWVudEluZm9Db250cm9sbGVyJztcclxuaW1wb3J0IE1zc0ZyYWdtZW50UHJvY2Vzc29yIGZyb20gJy4vTXNzRnJhZ21lbnRQcm9jZXNzb3InO1xyXG5pbXBvcnQgTXNzUGFyc2VyIGZyb20gJy4vcGFyc2VyL01zc1BhcnNlcic7XHJcbmltcG9ydCBNc3NFcnJvcnMgZnJvbSAnLi9lcnJvcnMvTXNzRXJyb3JzJztcclxuaW1wb3J0IERhc2hKU0Vycm9yIGZyb20gJy4uL3N0cmVhbWluZy92by9EYXNoSlNFcnJvcic7XHJcblxyXG5mdW5jdGlvbiBNc3NIYW5kbGVyKGNvbmZpZykge1xyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgbGV0IGV2ZW50QnVzID0gY29uZmlnLmV2ZW50QnVzO1xyXG4gICAgY29uc3QgZXZlbnRzID0gY29uZmlnLmV2ZW50cztcclxuICAgIGNvbnN0IGNvbnN0YW50cyA9IGNvbmZpZy5jb25zdGFudHM7XHJcbiAgICBjb25zdCBpbml0U2VnbWVudFR5cGUgPSBjb25maWcuaW5pdFNlZ21lbnRUeXBlO1xyXG4gICAgbGV0IG1ldHJpY3NNb2RlbCA9IGNvbmZpZy5tZXRyaWNzTW9kZWw7XHJcbiAgICBsZXQgcGxheWJhY2tDb250cm9sbGVyID0gY29uZmlnLnBsYXliYWNrQ29udHJvbGxlcjtcclxuICAgIGxldCBwcm90ZWN0aW9uQ29udHJvbGxlciA9IGNvbmZpZy5wcm90ZWN0aW9uQ29udHJvbGxlcjtcclxuICAgIGxldCBtc3NGcmFnbWVudFByb2Nlc3NvciA9IE1zc0ZyYWdtZW50UHJvY2Vzc29yKGNvbnRleHQpLmNyZWF0ZSh7XHJcbiAgICAgICAgbWV0cmljc01vZGVsOiBtZXRyaWNzTW9kZWwsXHJcbiAgICAgICAgcGxheWJhY2tDb250cm9sbGVyOiBwbGF5YmFja0NvbnRyb2xsZXIsXHJcbiAgICAgICAgcHJvdGVjdGlvbkNvbnRyb2xsZXI6IHByb3RlY3Rpb25Db250cm9sbGVyLFxyXG4gICAgICAgIGV2ZW50QnVzOiBldmVudEJ1cyxcclxuICAgICAgICBjb25zdGFudHM6IGNvbnN0YW50cyxcclxuICAgICAgICBJU09Cb3hlcjogY29uZmlnLklTT0JveGVyLFxyXG4gICAgICAgIGRlYnVnOiBjb25maWcuZGVidWcsXHJcbiAgICAgICAgZXJySGFuZGxlcjogY29uZmlnLmVyckhhbmRsZXJcclxuICAgIH0pO1xyXG4gICAgbGV0IG1zc1BhcnNlcixcclxuICAgICAgICBpbnN0YW5jZTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cCgpIHt9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Jbml0aWFsaXphdGlvblJlcXVlc3RlZChlKSB7XHJcbiAgICAgICAgbGV0IHN0cmVhbVByb2Nlc3NvciA9IGUuc2VuZGVyLmdldFN0cmVhbVByb2Nlc3NvcigpO1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IEZyYWdtZW50UmVxdWVzdCgpO1xyXG4gICAgICAgIGxldCByZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0UmVwcmVzZW50YXRpb25Db250cm9sbGVyKCk7XHJcbiAgICAgICAgbGV0IHJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb25Db250cm9sbGVyLmdldEN1cnJlbnRSZXByZXNlbnRhdGlvbigpO1xyXG5cclxuICAgICAgICByZXF1ZXN0Lm1lZGlhVHlwZSA9IHJlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24udHlwZTtcclxuICAgICAgICByZXF1ZXN0LnR5cGUgPSBpbml0U2VnbWVudFR5cGU7XHJcbiAgICAgICAgcmVxdWVzdC5yYW5nZSA9IHJlcHJlc2VudGF0aW9uLnJhbmdlO1xyXG4gICAgICAgIHJlcXVlc3QucXVhbGl0eSA9IHJlcHJlc2VudGF0aW9uLmluZGV4O1xyXG4gICAgICAgIHJlcXVlc3QubWVkaWFJbmZvID0gc3RyZWFtUHJvY2Vzc29yLmdldE1lZGlhSW5mbygpO1xyXG4gICAgICAgIHJlcXVlc3QucmVwcmVzZW50YXRpb25JZCA9IHJlcHJlc2VudGF0aW9uLmlkO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVuayA9IGNyZWF0ZURhdGFDaHVuayhyZXF1ZXN0LCBzdHJlYW1Qcm9jZXNzb3IuZ2V0U3RyZWFtSW5mbygpLmlkLCBlLnR5cGUgIT09IGV2ZW50cy5GUkFHTUVOVF9MT0FESU5HX1BST0dSRVNTKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgaW5pdGlhbGl6YXRpb24gc2VnbWVudCAobW9vdilcclxuICAgICAgICAgICAgY2h1bmsuYnl0ZXMgPSBtc3NGcmFnbWVudFByb2Nlc3Nvci5nZW5lcmF0ZU1vb3YocmVwcmVzZW50YXRpb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uZmlnLmVyckhhbmRsZXIuZXJyb3IobmV3IERhc2hKU0Vycm9yKGUuY29kZSwgZS5tZXNzYWdlLCBlLmRhdGEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLklOSVRfRlJBR01FTlRfTE9BREVELCB7XHJcbiAgICAgICAgICAgIGNodW5rOiBjaHVuayxcclxuICAgICAgICAgICAgZnJhZ21lbnRNb2RlbDogc3RyZWFtUHJvY2Vzc29yLmdldEZyYWdtZW50TW9kZWwoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHNlbmRlciB2YWx1ZSB0byBzdG9wIGV2ZW50IHRvIGJlIHByb3BhZ2F0ZWRcclxuICAgICAgICBlLnNlbmRlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0YUNodW5rKHJlcXVlc3QsIHN0cmVhbUlkLCBlbmRGcmFnbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGNodW5rID0gbmV3IERhdGFDaHVuaygpO1xyXG5cclxuICAgICAgICBjaHVuay5zdHJlYW1JZCA9IHN0cmVhbUlkO1xyXG4gICAgICAgIGNodW5rLm1lZGlhSW5mbyA9IHJlcXVlc3QubWVkaWFJbmZvO1xyXG4gICAgICAgIGNodW5rLnNlZ21lbnRUeXBlID0gcmVxdWVzdC50eXBlO1xyXG4gICAgICAgIGNodW5rLnN0YXJ0ID0gcmVxdWVzdC5zdGFydFRpbWU7XHJcbiAgICAgICAgY2h1bmsuZHVyYXRpb24gPSByZXF1ZXN0LmR1cmF0aW9uO1xyXG4gICAgICAgIGNodW5rLmVuZCA9IGNodW5rLnN0YXJ0ICsgY2h1bmsuZHVyYXRpb247XHJcbiAgICAgICAgY2h1bmsuaW5kZXggPSByZXF1ZXN0LmluZGV4O1xyXG4gICAgICAgIGNodW5rLnF1YWxpdHkgPSByZXF1ZXN0LnF1YWxpdHk7XHJcbiAgICAgICAgY2h1bmsucmVwcmVzZW50YXRpb25JZCA9IHJlcXVlc3QucmVwcmVzZW50YXRpb25JZDtcclxuICAgICAgICBjaHVuay5lbmRGcmFnbWVudCA9IGVuZEZyYWdtZW50O1xyXG5cclxuICAgICAgICByZXR1cm4gY2h1bms7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRGcmFnbWVudEluZm9Db250cm9sbGVycygpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0cmVhbUNvbnRyb2xsZXIgPSBwbGF5YmFja0NvbnRyb2xsZXIuZ2V0U3RyZWFtQ29udHJvbGxlcigpO1xyXG4gICAgICAgIGlmICghc3RyZWFtQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlcnMgZm9yIGVhY2ggU3RyZWFtUHJvY2Vzc29yIG9mIGFjdGl2ZSBzdHJlYW0gKG9ubHkgZm9yIGF1ZGlvLCB2aWRlbyBvciBmcmFnbWVudGVkVGV4dClcclxuICAgICAgICBsZXQgcHJvY2Vzc29ycyA9IHN0cmVhbUNvbnRyb2xsZXIuZ2V0QWN0aXZlU3RyZWFtUHJvY2Vzc29ycygpO1xyXG4gICAgICAgIHByb2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvY2Vzc29yKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzb3IuZ2V0VHlwZSgpID09PSBjb25zdGFudHMuVklERU8gfHxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Nvci5nZXRUeXBlKCkgPT09IGNvbnN0YW50cy5BVURJTyB8fFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc29yLmdldFR5cGUoKSA9PT0gY29uc3RhbnRzLkZSQUdNRU5URURfVEVYVCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIgYWxyZWFkeSByZWdpc3RlcmVkIHRvIFN0cmVhbVByb2Nlc3NvclxyXG4gICAgICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxyZWFkeVJlZ2lzdGVyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBleHRlcm5hbENvbnRyb2xsZXJzID0gcHJvY2Vzc29yLmdldEV4dGVybmFsQ29udHJvbGxlcnMoKTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBleHRlcm5hbENvbnRyb2xsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsQ29udHJvbGxlcnNbaV0uY29udHJvbGxlclR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxDb250cm9sbGVyc1tpXS5jb250cm9sbGVyVHlwZSA9PT0gJ01zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlSZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFhbHJlYWR5UmVnaXN0ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmFnbWVudEluZm9Db250cm9sbGVyID0gTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlcihjb250ZXh0KS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1Qcm9jZXNzb3I6IHByb2Nlc3NvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXM6IGV2ZW50QnVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRyaWNzTW9kZWw6IG1ldHJpY3NNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWJhY2tDb250cm9sbGVyOiBwbGF5YmFja0NvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VVUkxDb250cm9sbGVyOiBjb25maWcuYmFzZVVSTENvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElTT0JveGVyOiBjb25maWcuSVNPQm94ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnOiBjb25maWcuZGVidWdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudEluZm9Db250cm9sbGVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudEluZm9Db250cm9sbGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblNlZ21lbnRNZWRpYUxvYWRlZChlKSB7XHJcbiAgICAgICAgaWYgKGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcm9jZXNzIG1vb2YgdG8gdHJhbnNjb2RlIGl0IGZyb20gTVNTIHRvIERBU0hcclxuICAgICAgICBsZXQgc3RyZWFtUHJvY2Vzc29yID0gZS5zZW5kZXIuZ2V0U3RyZWFtUHJvY2Vzc29yKCk7XHJcbiAgICAgICAgbXNzRnJhZ21lbnRQcm9jZXNzb3IucHJvY2Vzc0ZyYWdtZW50KGUsIHN0cmVhbVByb2Nlc3Nvcik7XHJcblxyXG4gICAgICAgIC8vIFN0YXJ0IE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXJzIGluIGNhc2Ugb2Ygc3RhcnQtb3ZlciBzdHJlYW1zXHJcbiAgICAgICAgbGV0IHN0cmVhbUluZm8gPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0U3RyZWFtSW5mbygpO1xyXG4gICAgICAgIGlmICghc3RyZWFtSW5mby5tYW5pZmVzdEluZm8uaXNEeW5hbWljICYmIHN0cmVhbUluZm8ubWFuaWZlc3RJbmZvLkRWUldpbmRvd1NpemUgIT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RnJhZ21lbnRJbmZvQ29udHJvbGxlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25QbGF5YmFja1BhdXNlZCgpIHtcclxuICAgICAgICBpZiAocGxheWJhY2tDb250cm9sbGVyLmdldElzRHluYW1pYygpICYmIHBsYXliYWNrQ29udHJvbGxlci5nZXRUaW1lKCkgIT09IDApIHtcclxuICAgICAgICAgICAgc3RhcnRGcmFnbWVudEluZm9Db250cm9sbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblBsYXliYWNrU2Vla0Fza2VkKCkge1xyXG4gICAgICAgIGlmIChwbGF5YmFja0NvbnRyb2xsZXIuZ2V0SXNEeW5hbWljKCkgJiYgcGxheWJhY2tDb250cm9sbGVyLmdldFRpbWUoKSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzdGFydEZyYWdtZW50SW5mb0NvbnRyb2xsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uVFRNTFByZVByb2Nlc3ModHRtbFN1YnRpdGxlcykge1xyXG4gICAgICAgIGlmICghdHRtbFN1YnRpdGxlcyB8fCAhdHRtbFN1YnRpdGxlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHR0bWxTdWJ0aXRsZXMuZGF0YSA9IHR0bWxTdWJ0aXRsZXMuZGF0YS5yZXBsYWNlKC9odHRwOlxcL1xcL3d3dy53My5vcmdcXC8yMDA2XFwvMTBcXC90dGFmMS9naSwgJ2h0dHA6Ly93d3cudzMub3JnL25zL3R0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpIHtcclxuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuSU5JVF9SRVFVRVNURUQsIG9uSW5pdGlhbGl6YXRpb25SZXF1ZXN0ZWQsIGluc3RhbmNlLCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnlCeU5hbWUoZXZlbnRCdXMuZ2V0Q2xhc3NOYW1lKCkpLkVWRU5UX1BSSU9SSVRZX0hJR0gpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuUExBWUJBQ0tfUEFVU0VELCBvblBsYXliYWNrUGF1c2VkLCBpbnN0YW5jZSwgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRTaW5nbGV0b25GYWN0b3J5QnlOYW1lKGV2ZW50QnVzLmdldENsYXNzTmFtZSgpKS5FVkVOVF9QUklPUklUWV9ISUdIKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXHJcbiAgICAgICAgZXZlbnRCdXMub24oZXZlbnRzLlBMQVlCQUNLX1NFRUtfQVNLRUQsIG9uUGxheWJhY2tTZWVrQXNrZWQsIGluc3RhbmNlLCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnlCeU5hbWUoZXZlbnRCdXMuZ2V0Q2xhc3NOYW1lKCkpLkVWRU5UX1BSSU9SSVRZX0hJR0gpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuRlJBR01FTlRfTE9BRElOR19DT01QTEVURUQsIG9uU2VnbWVudE1lZGlhTG9hZGVkLCBpbnN0YW5jZSwgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRTaW5nbGV0b25GYWN0b3J5QnlOYW1lKGV2ZW50QnVzLmdldENsYXNzTmFtZSgpKS5FVkVOVF9QUklPUklUWV9ISUdIKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXHJcbiAgICAgICAgZXZlbnRCdXMub24oZXZlbnRzLlRUTUxfVE9fUEFSU0UsIG9uVFRNTFByZVByb2Nlc3MsIGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldCgpIHtcclxuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLklOSVRfUkVRVUVTVEVELCBvbkluaXRpYWxpemF0aW9uUmVxdWVzdGVkLCB0aGlzKTtcclxuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLlBMQVlCQUNLX1BBVVNFRCwgb25QbGF5YmFja1BhdXNlZCwgdGhpcyk7XHJcbiAgICAgICAgZXZlbnRCdXMub2ZmKGV2ZW50cy5QTEFZQkFDS19TRUVLX0FTS0VELCBvblBsYXliYWNrU2Vla0Fza2VkLCB0aGlzKTtcclxuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLkZSQUdNRU5UX0xPQURJTkdfQ09NUExFVEVELCBvblNlZ21lbnRNZWRpYUxvYWRlZCwgdGhpcyk7XHJcbiAgICAgICAgZXZlbnRCdXMub2ZmKGV2ZW50cy5UVE1MX1RPX1BBUlNFLCBvblRUTUxQcmVQcm9jZXNzLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNc3NQYXJzZXIoKSB7XHJcbiAgICAgICAgbXNzUGFyc2VyID0gTXNzUGFyc2VyKGNvbnRleHQpLmNyZWF0ZShjb25maWcpO1xyXG4gICAgICAgIHJldHVybiBtc3NQYXJzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2UgPSB7XHJcbiAgICAgICAgcmVzZXQ6IHJlc2V0LFxyXG4gICAgICAgIGNyZWF0ZU1zc1BhcnNlcjogY3JlYXRlTXNzUGFyc2VyLFxyXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzOiByZWdpc3RlckV2ZW50c1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXR1cCgpO1xyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuTXNzSGFuZGxlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnTXNzSGFuZGxlcic7XHJcbmNvbnN0IGZhY3RvcnkgPSBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShNc3NIYW5kbGVyKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXHJcbmZhY3RvcnkuZXJyb3JzID0gTXNzRXJyb3JzO1xyXG5kYXNoanMuRmFjdG9yeU1ha2VyLnVwZGF0ZUNsYXNzRmFjdG9yeShNc3NIYW5kbGVyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSwgZmFjdG9yeSk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xyXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5OyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuIiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcbmltcG9ydCBFcnJvcnNCYXNlIGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL0Vycm9yc0Jhc2UnO1xyXG4vKipcclxuICogQGNsYXNzXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBNc3NFcnJvcnMgZXh0ZW5kcyBFcnJvcnNCYXNlIHtcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gbm8gdGZyZiBib3ggaXMgZGV0ZWN0ZWQgaW4gTVNTIGxpdmUgc3RyZWFtXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5NU1NfTk9fVEZSRl9DT0RFID0gMjAwO1xyXG4gICAgICAgIHRoaXMuTVNTX1VOU1VQUE9SVEVEX0NPREVDX0NPREUgPSAyMDE7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXJyb3IgbWVzc2FnZSByZXR1cm5lZCB3aGVuIG5vIHRmcmYgYm94IGlzIGRldGVjdGVkIGluIE1TUyBsaXZlIHN0cmVhbVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuTVNTX05PX1RGUkZfTUVTU0FHRSA9ICdNaXNzaW5nIHRmcmYgaW4gbGl2ZSBtZWRpYSBzZWdtZW50JztcclxuICAgICAgICB0aGlzLk1TU19VTlNVUFBPUlRFRF9DT0RFQ19NRVNTQUdFID0gJ1Vuc3VwcG9ydGVkIGNvZGVjJztcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1zc0Vycm9ycyA9IG5ldyBNc3NFcnJvcnMoKTtcclxuZXhwb3J0IGRlZmF1bHQgbXNzRXJyb3JzOyIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IE1zc0hhbmRsZXIgZnJvbSAnLi9Nc3NIYW5kbGVyJztcclxuXHJcbi8vIFNob3ZlIGJvdGggb2YgdGhlc2UgaW50byB0aGUgZ2xvYmFsIHNjb3BlXHJcbnZhciBjb250ZXh0ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykgfHwgZ2xvYmFsO1xyXG5cclxudmFyIGRhc2hqcyA9IGNvbnRleHQuZGFzaGpzO1xyXG5pZiAoIWRhc2hqcykge1xyXG4gICAgZGFzaGpzID0gY29udGV4dC5kYXNoanMgPSB7fTtcclxufVxyXG5cclxuZGFzaGpzLk1zc0hhbmRsZXIgPSBNc3NIYW5kbGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaGpzO1xyXG5leHBvcnQgeyBNc3NIYW5kbGVyIH07XHJcbiIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBtb2R1bGUgTXNzUGFyc2VyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBNc3NQYXJzZXIoY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBCQVNFNjQgPSBjb25maWcuQkFTRTY0O1xyXG4gICAgY29uc3QgZGVidWcgPSBjb25maWcuZGVidWc7XHJcbiAgICBjb25zdCBjb25zdGFudHMgPSBjb25maWcuY29uc3RhbnRzO1xyXG4gICAgY29uc3QgbWFuaWZlc3RNb2RlbCA9IGNvbmZpZy5tYW5pZmVzdE1vZGVsO1xyXG5cclxuICAgIGNvbnN0IERFRkFVTFRfVElNRV9TQ0FMRSA9IDEwMDAwMDAwLjA7XHJcbiAgICBjb25zdCBTVVBQT1JURURfQ09ERUNTID0gWydBQUMnLCAnQUFDTCcsICdBVkMxJywgJ0gyNjQnLCAnVFRNTCcsICdERlhQJ107XHJcbiAgICAvLyBNUEVHLURBU0ggUm9sZSBhbmQgYWNjZXNzaWJpbGl0eSBtYXBwaW5nIGFjY29yZGluZyB0byBFVFNJIFRTIDEwMyAyODUgdjEuMS4xIChzZWN0aW9uIDcuMS4yKVxyXG4gICAgY29uc3QgUk9MRSA9IHtcclxuICAgICAgICAnU1VCVCc6ICdhbHRlcm5hdGUnLFxyXG4gICAgICAgICdDQVBUJzogJ2FsdGVybmF0ZScsIC8vICdDQVBUJyBpcyBjb21tb25seSBlcXVpdmFsZW50IHRvICdTVUJUJ1xyXG4gICAgICAgICdERVNDJzogJ21haW4nXHJcbiAgICB9O1xyXG4gICAgY29uc3QgQUNDRVNTSUJJTElUWSA9IHtcclxuICAgICAgICAnREVTQyc6ICcyJ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNhbXBsaW5nRnJlcXVlbmN5SW5kZXggPSB7XHJcbiAgICAgICAgOTYwMDA6IDB4MCxcclxuICAgICAgICA4ODIwMDogMHgxLFxyXG4gICAgICAgIDY0MDAwOiAweDIsXHJcbiAgICAgICAgNDgwMDA6IDB4MyxcclxuICAgICAgICA0NDEwMDogMHg0LFxyXG4gICAgICAgIDMyMDAwOiAweDUsXHJcbiAgICAgICAgMjQwMDA6IDB4NixcclxuICAgICAgICAyMjA1MDogMHg3LFxyXG4gICAgICAgIDE2MDAwOiAweDgsXHJcbiAgICAgICAgMTIwMDA6IDB4OSxcclxuICAgICAgICAxMTAyNTogMHhBLFxyXG4gICAgICAgIDgwMDA6IDB4QixcclxuICAgICAgICA3MzUwOiAweENcclxuICAgIH07XHJcbiAgICBjb25zdCBtaW1lVHlwZU1hcCA9IHtcclxuICAgICAgICAndmlkZW8nOiAndmlkZW8vbXA0JyxcclxuICAgICAgICAnYXVkaW8nOiAnYXVkaW8vbXA0JyxcclxuICAgICAgICAndGV4dCc6ICdhcHBsaWNhdGlvbi9tcDQnXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBpbnN0YW5jZSxcclxuICAgICAgICBsb2dnZXIsXHJcbiAgICAgICAgbWVkaWFQbGF5ZXJNb2RlbDtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAgICAgbG9nZ2VyID0gZGVidWcuZ2V0TG9nZ2VyKGluc3RhbmNlKTtcclxuICAgICAgICBtZWRpYVBsYXllck1vZGVsID0gY29uZmlnLm1lZGlhUGxheWVyTW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFwUGVyaW9kKHNtb290aFN0cmVhbWluZ01lZGlhLCB0aW1lc2NhbGUpIHtcclxuICAgICAgICBjb25zdCBwZXJpb2QgPSB7fTtcclxuICAgICAgICBsZXQgc3RyZWFtcyxcclxuICAgICAgICAgICAgYWRhcHRhdGlvbjtcclxuXHJcbiAgICAgICAgLy8gRm9yIGVhY2ggU3RyZWFtSW5kZXggbm9kZSwgY3JlYXRlIGFuIEFkYXB0YXRpb25TZXQgZWxlbWVudFxyXG4gICAgICAgIHBlcmlvZC5BZGFwdGF0aW9uU2V0X2FzQXJyYXkgPSBbXTtcclxuICAgICAgICBzdHJlYW1zID0gc21vb3RoU3RyZWFtaW5nTWVkaWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1N0cmVhbUluZGV4Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJlYW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFkYXB0YXRpb24gPSBtYXBBZGFwdGF0aW9uU2V0KHN0cmVhbXNbaV0sIHRpbWVzY2FsZSk7XHJcbiAgICAgICAgICAgIGlmIChhZGFwdGF0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5LnB1c2goYWRhcHRhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcGVyaW9kLkFkYXB0YXRpb25TZXQgPSAocGVyaW9kLkFkYXB0YXRpb25TZXRfYXNBcnJheS5sZW5ndGggPiAxKSA/IHBlcmlvZC5BZGFwdGF0aW9uU2V0X2FzQXJyYXkgOiBwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5WzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBlcmlvZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXBBZGFwdGF0aW9uU2V0KHN0cmVhbUluZGV4LCB0aW1lc2NhbGUpIHtcclxuICAgICAgICBjb25zdCBhZGFwdGF0aW9uU2V0ID0ge307XHJcbiAgICAgICAgY29uc3QgcmVwcmVzZW50YXRpb25zID0gW107XHJcbiAgICAgICAgbGV0IHNlZ21lbnRUZW1wbGF0ZTtcclxuICAgICAgICBsZXQgcXVhbGl0eUxldmVscyxcclxuICAgICAgICAgICAgcmVwcmVzZW50YXRpb24sXHJcbiAgICAgICAgICAgIHNlZ21lbnRzLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBhZGFwdGF0aW9uU2V0LmlkID0gc3RyZWFtSW5kZXguZ2V0QXR0cmlidXRlKCdOYW1lJykgPyBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ05hbWUnKSA6IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnVHlwZScpO1xyXG4gICAgICAgIGFkYXB0YXRpb25TZXQuY29udGVudFR5cGUgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ1R5cGUnKTtcclxuICAgICAgICBhZGFwdGF0aW9uU2V0LmxhbmcgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ0xhbmd1YWdlJykgfHwgJ3VuZCc7XHJcbiAgICAgICAgYWRhcHRhdGlvblNldC5taW1lVHlwZSA9IG1pbWVUeXBlTWFwW2FkYXB0YXRpb25TZXQuY29udGVudFR5cGVdO1xyXG4gICAgICAgIGFkYXB0YXRpb25TZXQuc3ViVHlwZSA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnU3VidHlwZScpO1xyXG4gICAgICAgIGFkYXB0YXRpb25TZXQubWF4V2lkdGggPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ01heFdpZHRoJyk7XHJcbiAgICAgICAgYWRhcHRhdGlvblNldC5tYXhIZWlnaHQgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ01heEhlaWdodCcpO1xyXG5cclxuICAgICAgICAvLyBNYXAgc3ViVHlwZXMgdG8gTVBFRy1EQVNIIEFkYXB0YXRpb25TZXQgcm9sZSBhbmQgYWNjZXNzaWJpbGl0eSAoc2VlIEVUU0kgVFMgMTAzIDI4NSB2MS4xLjEsIHNlY3Rpb24gNy4xLjIpXHJcbiAgICAgICAgaWYgKGFkYXB0YXRpb25TZXQuc3ViVHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoUk9MRVthZGFwdGF0aW9uU2V0LnN1YlR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzY2hlbWVJZFVyaTogJ3VybjptcGVnOmRhc2g6cm9sZToyMDExJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogUk9MRVthZGFwdGF0aW9uU2V0LnN1YlR5cGVdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYWRhcHRhdGlvblNldC5Sb2xlID0gcm9sZTtcclxuICAgICAgICAgICAgICAgIGFkYXB0YXRpb25TZXQuUm9sZV9hc0FycmF5ID0gW3JvbGVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChBQ0NFU1NJQklMSVRZW2FkYXB0YXRpb25TZXQuc3ViVHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBhY2Nlc3NpYmlsaXR5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZUlkVXJpOiAndXJuOnR2YTptZXRhZGF0YTpjczpBdWRpb1B1cnBvc2VDUzoyMDA3JyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogQUNDRVNTSUJJTElUWVthZGFwdGF0aW9uU2V0LnN1YlR5cGVdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYWRhcHRhdGlvblNldC5BY2Nlc3NpYmlsaXR5ID0gYWNjZXNzaWJpbGl0eTtcclxuICAgICAgICAgICAgICAgIGFkYXB0YXRpb25TZXQuQWNjZXNzaWJpbGl0eV9hc0FycmF5ID0gW2FjY2Vzc2liaWxpdHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBTZWdtZW50VGVtcGxhdGUgd2l0aCBhIFNlZ21lbnRUaW1lbGluZVxyXG4gICAgICAgIHNlZ21lbnRUZW1wbGF0ZSA9IG1hcFNlZ21lbnRUZW1wbGF0ZShzdHJlYW1JbmRleCwgdGltZXNjYWxlKTtcclxuXHJcbiAgICAgICAgcXVhbGl0eUxldmVscyA9IHN0cmVhbUluZGV4LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdRdWFsaXR5TGV2ZWwnKTtcclxuICAgICAgICAvLyBGb3IgZWFjaCBRdWFsaXR5TGV2ZWwgbm9kZSwgY3JlYXRlIGEgUmVwcmVzZW50YXRpb24gZWxlbWVudFxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBxdWFsaXR5TGV2ZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIFByb3BhZ2F0ZSBCYXNlVVJMIGFuZCBtaW1lVHlwZVxyXG4gICAgICAgICAgICBxdWFsaXR5TGV2ZWxzW2ldLkJhc2VVUkwgPSBhZGFwdGF0aW9uU2V0LkJhc2VVUkw7XHJcbiAgICAgICAgICAgIHF1YWxpdHlMZXZlbHNbaV0ubWltZVR5cGUgPSBhZGFwdGF0aW9uU2V0Lm1pbWVUeXBlO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHF1YWxpdHkgbGV2ZWwgaWRcclxuICAgICAgICAgICAgcXVhbGl0eUxldmVsc1tpXS5JZCA9IGFkYXB0YXRpb25TZXQuaWQgKyAnXycgKyBxdWFsaXR5TGV2ZWxzW2ldLmdldEF0dHJpYnV0ZSgnSW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1hcCBSZXByZXNlbnRhdGlvbiB0byBRdWFsaXR5TGV2ZWxcclxuICAgICAgICAgICAgcmVwcmVzZW50YXRpb24gPSBtYXBSZXByZXNlbnRhdGlvbihxdWFsaXR5TGV2ZWxzW2ldLCBzdHJlYW1JbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVwcmVzZW50YXRpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIENvcHkgU2VnbWVudFRlbXBsYXRlIGludG8gUmVwcmVzZW50YXRpb25cclxuICAgICAgICAgICAgICAgIHJlcHJlc2VudGF0aW9uLlNlZ21lbnRUZW1wbGF0ZSA9IHNlZ21lbnRUZW1wbGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXByZXNlbnRhdGlvbnMucHVzaChyZXByZXNlbnRhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXByZXNlbnRhdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRhcHRhdGlvblNldC5SZXByZXNlbnRhdGlvbiA9IChyZXByZXNlbnRhdGlvbnMubGVuZ3RoID4gMSkgPyByZXByZXNlbnRhdGlvbnMgOiByZXByZXNlbnRhdGlvbnNbMF07XHJcbiAgICAgICAgYWRhcHRhdGlvblNldC5SZXByZXNlbnRhdGlvbl9hc0FycmF5ID0gcmVwcmVzZW50YXRpb25zO1xyXG5cclxuICAgICAgICAvLyBTZXQgU2VnbWVudFRlbXBsYXRlXHJcbiAgICAgICAgYWRhcHRhdGlvblNldC5TZWdtZW50VGVtcGxhdGUgPSBzZWdtZW50VGVtcGxhdGU7XHJcblxyXG4gICAgICAgIHNlZ21lbnRzID0gc2VnbWVudFRlbXBsYXRlLlNlZ21lbnRUaW1lbGluZS5TX2FzQXJyYXk7XHJcblxyXG4gICAgICAgIHJldHVybiBhZGFwdGF0aW9uU2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hcFJlcHJlc2VudGF0aW9uKHF1YWxpdHlMZXZlbCwgc3RyZWFtSW5kZXgpIHtcclxuICAgICAgICBjb25zdCByZXByZXNlbnRhdGlvbiA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ1R5cGUnKTtcclxuICAgICAgICBsZXQgZm91ckNDVmFsdWUgPSBudWxsO1xyXG5cclxuICAgICAgICByZXByZXNlbnRhdGlvbi5pZCA9IHF1YWxpdHlMZXZlbC5JZDtcclxuICAgICAgICByZXByZXNlbnRhdGlvbi5iYW5kd2lkdGggPSBwYXJzZUludChxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdCaXRyYXRlJyksIDEwKTtcclxuICAgICAgICByZXByZXNlbnRhdGlvbi5taW1lVHlwZSA9IHF1YWxpdHlMZXZlbC5taW1lVHlwZTtcclxuICAgICAgICByZXByZXNlbnRhdGlvbi53aWR0aCA9IHBhcnNlSW50KHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ01heFdpZHRoJyksIDEwKTtcclxuICAgICAgICByZXByZXNlbnRhdGlvbi5oZWlnaHQgPSBwYXJzZUludChxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdNYXhIZWlnaHQnKSwgMTApO1xyXG5cclxuICAgICAgICBmb3VyQ0NWYWx1ZSA9IHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ0ZvdXJDQycpO1xyXG5cclxuICAgICAgICAvLyBJZiBGb3VyQ0Mgbm90IGRlZmluZWQgYXQgUXVhbGl0eUxldmVsIGxldmVsLCB0aGVuIGdldCBpdCBmcm9tIFN0cmVhbUluZGV4IGxldmVsXHJcbiAgICAgICAgaWYgKGZvdXJDQ1ZhbHVlID09PSBudWxsIHx8IGZvdXJDQ1ZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBmb3VyQ0NWYWx1ZSA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnRm91ckNDJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBzdGlsbCBub3QgZGVmaW5lZCAob3B0aW9ubmFsIGZvciBhdWRpbyBzdHJlYW0sIHNlZSBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2ZmNzI4MTE2JTI4dj12cy45NSUyOS5hc3B4KSxcclxuICAgICAgICAvLyB0aGVuIHdlIGNvbnNpZGVyIHRoZSBzdHJlYW0gaXMgYW4gYXVkaW8gQUFDIHN0cmVhbVxyXG4gICAgICAgIGlmIChmb3VyQ0NWYWx1ZSA9PT0gbnVsbCB8fCBmb3VyQ0NWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcclxuICAgICAgICAgICAgICAgIGZvdXJDQ1ZhbHVlID0gJ0FBQyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdGb3VyQ0MgaXMgbm90IGRlZmluZWQgd2hlcmVhcyBpdCBpcyByZXF1aXJlZCBmb3IgYSBRdWFsaXR5TGV2ZWwgZWxlbWVudCBmb3IgYSBTdHJlYW1JbmRleCBvZiB0eXBlIFwidmlkZW9cIicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIGNvZGVjIGlzIHN1cHBvcnRlZFxyXG4gICAgICAgIGlmIChTVVBQT1JURURfQ09ERUNTLmluZGV4T2YoZm91ckNDVmFsdWUudG9VcHBlckNhc2UoKSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIERvIG5vdCBzZW5kIHdhcm5pbmdcclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ0NvZGVjIG5vdCBzdXBwb3J0ZWQ6ICcgKyBmb3VyQ0NWYWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2V0IGNvZGVjcyB2YWx1ZSBhY2NvcmRpbmcgdG8gRm91ckNDIGZpZWxkXHJcbiAgICAgICAgaWYgKGZvdXJDQ1ZhbHVlID09PSAnSDI2NCcgfHwgZm91ckNDVmFsdWUgPT09ICdBVkMxJykge1xyXG4gICAgICAgICAgICByZXByZXNlbnRhdGlvbi5jb2RlY3MgPSBnZXRIMjY0Q29kZWMocXVhbGl0eUxldmVsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZvdXJDQ1ZhbHVlLmluZGV4T2YoJ0FBQycpID49IDApIHtcclxuICAgICAgICAgICAgcmVwcmVzZW50YXRpb24uY29kZWNzID0gZ2V0QUFDQ29kZWMocXVhbGl0eUxldmVsLCBmb3VyQ0NWYWx1ZSk7XHJcbiAgICAgICAgICAgIHJlcHJlc2VudGF0aW9uLmF1ZGlvU2FtcGxpbmdSYXRlID0gcGFyc2VJbnQocXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnU2FtcGxpbmdSYXRlJyksIDEwKTtcclxuICAgICAgICAgICAgcmVwcmVzZW50YXRpb24uYXVkaW9DaGFubmVscyA9IHBhcnNlSW50KHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ0NoYW5uZWxzJyksIDEwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZvdXJDQ1ZhbHVlLmluZGV4T2YoJ1RUTUwnKSB8fCBmb3VyQ0NWYWx1ZS5pbmRleE9mKCdERlhQJykpIHtcclxuICAgICAgICAgICAgcmVwcmVzZW50YXRpb24uY29kZWNzID0gY29uc3RhbnRzLlNUUFA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXByZXNlbnRhdGlvbi5jb2RlY1ByaXZhdGVEYXRhID0gJycgKyBxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdDb2RlY1ByaXZhdGVEYXRhJyk7XHJcbiAgICAgICAgcmVwcmVzZW50YXRpb24uQmFzZVVSTCA9IHF1YWxpdHlMZXZlbC5CYXNlVVJMO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVwcmVzZW50YXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SDI2NENvZGVjKHF1YWxpdHlMZXZlbCkge1xyXG4gICAgICAgIGxldCBjb2RlY1ByaXZhdGVEYXRhID0gcXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnQ29kZWNQcml2YXRlRGF0YScpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IG5hbEhlYWRlcixcclxuICAgICAgICAgICAgYXZjb3RpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBDb2RlY1ByaXZhdGVEYXRhIGZpZWxkIHRoZSBoZXhhZGVjaW1hbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZm9sbG93aW5nXHJcbiAgICAgICAgLy8gdGhyZWUgYnl0ZXMgaW4gdGhlIHNlcXVlbmNlIHBhcmFtZXRlciBzZXQgTkFMIHVuaXQuXHJcbiAgICAgICAgLy8gPT4gRmluZCB0aGUgU1BTIG5hbCBoZWFkZXJcclxuICAgICAgICBuYWxIZWFkZXIgPSAvMDAwMDAwMDFbMC05XTcvLmV4ZWMoY29kZWNQcml2YXRlRGF0YSk7XHJcbiAgICAgICAgLy8gPT4gRmluZCB0aGUgNiBjaGFyYWN0ZXJzIGFmdGVyIHRoZSBTUFMgbmFsSGVhZGVyIChpZiBpdCBleGlzdHMpXHJcbiAgICAgICAgYXZjb3RpID0gbmFsSGVhZGVyICYmIG5hbEhlYWRlclswXSA/IChjb2RlY1ByaXZhdGVEYXRhLnN1YnN0cihjb2RlY1ByaXZhdGVEYXRhLmluZGV4T2YobmFsSGVhZGVyWzBdKSArIDEwLCA2KSkgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiAnYXZjMS4nICsgYXZjb3RpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFBQ0NvZGVjKHF1YWxpdHlMZXZlbCwgZm91ckNDVmFsdWUpIHtcclxuICAgICAgICBjb25zdCBzYW1wbGluZ1JhdGUgPSBwYXJzZUludChxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdTYW1wbGluZ1JhdGUnKSwgMTApO1xyXG4gICAgICAgIGxldCBjb2RlY1ByaXZhdGVEYXRhID0gcXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnQ29kZWNQcml2YXRlRGF0YScpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IG9iamVjdFR5cGUgPSAwO1xyXG4gICAgICAgIGxldCBjb2RlY1ByaXZhdGVEYXRhSGV4LFxyXG4gICAgICAgICAgICBhcnIxNixcclxuICAgICAgICAgICAgaW5kZXhGcmVxLFxyXG4gICAgICAgICAgICBleHRlbnNpb25TYW1wbGluZ0ZyZXF1ZW5jeUluZGV4O1xyXG5cclxuICAgICAgICAvL2Nocm9tZSBwcm9ibGVtLCBpbiBpbXBsaWNpdCBBQUMgSEUgZGVmaW5pdGlvbiwgc28gd2hlbiBBQUNIIGlzIGRldGVjdGVkIGluIEZvdXJDQ1xyXG4gICAgICAgIC8vc2V0IG9iamVjdFR5cGUgdG8gNSA9PiBzdHJhbmdlLCBpdCBzaG91bGQgYmUgMlxyXG4gICAgICAgIGlmIChmb3VyQ0NWYWx1ZSA9PT0gJ0FBQ0gnKSB7XHJcbiAgICAgICAgICAgIG9iamVjdFR5cGUgPSAweDA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIGNvZGVjUHJpdmF0ZURhdGEgaXMgZW1wdHksIGJ1aWxkIGl0IDpcclxuICAgICAgICBpZiAoY29kZWNQcml2YXRlRGF0YSA9PT0gdW5kZWZpbmVkIHx8IGNvZGVjUHJpdmF0ZURhdGEgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG9iamVjdFR5cGUgPSAweDAyOyAvL0FBQyBNYWluIExvdyBDb21wbGV4aXR5ID0+IG9iamVjdCBUeXBlID0gMlxyXG4gICAgICAgICAgICBpbmRleEZyZXEgPSBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4W3NhbXBsaW5nUmF0ZV07XHJcbiAgICAgICAgICAgIGlmIChmb3VyQ0NWYWx1ZSA9PT0gJ0FBQ0gnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyA0IGJ5dGVzIDogICAgIFhYWFhYICAgICAgICAgWFhYWCAgICAgICAgICBYWFhYICAgICAgICAgICAgIFhYWFggICAgICAgICAgICAgICAgICBYWFhYWCAgICAgIFhYWCAgIFhYWFhYWFhcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAnIE9iamVjdFR5cGUnICdGcmVxIEluZGV4JyAnQ2hhbm5lbHMgdmFsdWUnICAgJ0V4dGVucyBTYW1wbCBGcmVxJyAgJ09iamVjdFR5cGUnICAnR0FTJyAnYWxpZ25tZW50ID0gMCdcclxuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgPSAweDA1OyAvLyBIaWdoIEVmZmljaWVuY3kgQUFDIFByb2ZpbGUgPSBvYmplY3QgVHlwZSA9IDUgU0JSXHJcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoNCk7XHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb25TYW1wbGluZ0ZyZXF1ZW5jeUluZGV4ID0gc2FtcGxpbmdGcmVxdWVuY3lJbmRleFtzYW1wbGluZ1JhdGUgKiAyXTsgLy8gaW4gSEUgQUFDIEV4dGVuc2lvbiBTYW1wbGluZyBmcmVxdWVuY2VcclxuICAgICAgICAgICAgICAgIC8vIGVxdWFscyB0byBTYW1wbGluZ1JhdGUqMlxyXG4gICAgICAgICAgICAgICAgLy9GcmVxIEluZGV4IGlzIHByZXNlbnQgZm9yIDMgYml0cyBpbiB0aGUgZmlyc3QgYnl0ZSwgbGFzdCBiaXQgaXMgaW4gdGhlIHNlY29uZFxyXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YVswXSA9IChvYmplY3RUeXBlIDw8IDMpIHwgKGluZGV4RnJlcSA+PiAxKTtcclxuICAgICAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGFbMV0gPSAoaW5kZXhGcmVxIDw8IDcpIHwgKHF1YWxpdHlMZXZlbC5DaGFubmVscyA8PCAzKSB8IChleHRlbnNpb25TYW1wbGluZ0ZyZXF1ZW5jeUluZGV4ID4+IDEpO1xyXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YVsyXSA9IChleHRlbnNpb25TYW1wbGluZ0ZyZXF1ZW5jeUluZGV4IDw8IDcpIHwgKDB4MDIgPDwgMik7IC8vIG9yaWdpbiBvYmplY3QgdHlwZSBlcXVhbHMgdG8gMiA9PiBBQUMgTWFpbiBMb3cgQ29tcGxleGl0eVxyXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YVszXSA9IDB4MDsgLy9hbGlnbm1lbnQgYml0c1xyXG5cclxuICAgICAgICAgICAgICAgIGFycjE2ID0gbmV3IFVpbnQxNkFycmF5KDIpO1xyXG4gICAgICAgICAgICAgICAgYXJyMTZbMF0gPSAoY29kZWNQcml2YXRlRGF0YVswXSA8PCA4KSArIGNvZGVjUHJpdmF0ZURhdGFbMV07XHJcbiAgICAgICAgICAgICAgICBhcnIxNlsxXSA9IChjb2RlY1ByaXZhdGVEYXRhWzJdIDw8IDgpICsgY29kZWNQcml2YXRlRGF0YVszXTtcclxuICAgICAgICAgICAgICAgIC8vY29udmVydCBkZWNpbWFsIHRvIGhleCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YUhleCA9IGFycjE2WzBdLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGFIZXggPSBhcnIxNlswXS50b1N0cmluZygxNikgKyBhcnIxNlsxXS50b1N0cmluZygxNik7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gMiBieXRlcyA6ICAgICBYWFhYWCAgICAgICAgIFhYWFggICAgICAgICAgWFhYWCAgICAgICAgICAgICAgWFhYXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgJyBPYmplY3RUeXBlJyAnRnJlcSBJbmRleCcgJ0NoYW5uZWxzIHZhbHVlJyAgICdHQVMgPSAwMDAnXHJcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoMik7XHJcbiAgICAgICAgICAgICAgICAvL0ZyZXEgSW5kZXggaXMgcHJlc2VudCBmb3IgMyBiaXRzIGluIHRoZSBmaXJzdCBieXRlLCBsYXN0IGJpdCBpcyBpbiB0aGUgc2Vjb25kXHJcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhWzBdID0gKG9iamVjdFR5cGUgPDwgMykgfCAoaW5kZXhGcmVxID4+IDEpO1xyXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YVsxXSA9IChpbmRleEZyZXEgPDwgNykgfCAocGFyc2VJbnQocXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnQ2hhbm5lbHMnKSwgMTApIDw8IDMpO1xyXG4gICAgICAgICAgICAgICAgLy8gcHV0IHRoZSAyIGJ5dGVzIGluIGFuIDE2IGJpdHMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGFycjE2ID0gbmV3IFVpbnQxNkFycmF5KDEpO1xyXG4gICAgICAgICAgICAgICAgYXJyMTZbMF0gPSAoY29kZWNQcml2YXRlRGF0YVswXSA8PCA4KSArIGNvZGVjUHJpdmF0ZURhdGFbMV07XHJcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnQgZGVjaW1hbCB0byBoZXggdmFsdWVcclxuICAgICAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGFIZXggPSBhcnIxNlswXS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGEgPSAnJyArIGNvZGVjUHJpdmF0ZURhdGFIZXg7XHJcbiAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGEgPSBjb2RlY1ByaXZhdGVEYXRhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHF1YWxpdHlMZXZlbC5zZXRBdHRyaWJ1dGUoJ0NvZGVjUHJpdmF0ZURhdGEnLCBjb2RlY1ByaXZhdGVEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9iamVjdFR5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0VHlwZSA9IChwYXJzZUludChjb2RlY1ByaXZhdGVEYXRhLnN1YnN0cigwLCAyKSwgMTYpICYgMHhGOCkgPj4gMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnbXA0YS40MC4nICsgb2JqZWN0VHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXBTZWdtZW50VGVtcGxhdGUoc3RyZWFtSW5kZXgsIHRpbWVzY2FsZSkge1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRUZW1wbGF0ZSA9IHt9O1xyXG4gICAgICAgIGxldCBtZWRpYVVybCxcclxuICAgICAgICAgICAgc3RyZWFtSW5kZXhUaW1lU2NhbGU7XHJcblxyXG4gICAgICAgIG1lZGlhVXJsID0gc3RyZWFtSW5kZXguZ2V0QXR0cmlidXRlKCdVcmwnKS5yZXBsYWNlKCd7Yml0cmF0ZX0nLCAnJEJhbmR3aWR0aCQnKTtcclxuICAgICAgICBtZWRpYVVybCA9IG1lZGlhVXJsLnJlcGxhY2UoJ3tzdGFydCB0aW1lfScsICckVGltZSQnKTtcclxuXHJcbiAgICAgICAgc3RyZWFtSW5kZXhUaW1lU2NhbGUgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ1RpbWVTY2FsZScpO1xyXG4gICAgICAgIHN0cmVhbUluZGV4VGltZVNjYWxlID0gc3RyZWFtSW5kZXhUaW1lU2NhbGUgPyBwYXJzZUZsb2F0KHN0cmVhbUluZGV4VGltZVNjYWxlKSA6IHRpbWVzY2FsZTtcclxuXHJcbiAgICAgICAgc2VnbWVudFRlbXBsYXRlLm1lZGlhID0gbWVkaWFVcmw7XHJcbiAgICAgICAgc2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZSA9IHN0cmVhbUluZGV4VGltZVNjYWxlO1xyXG5cclxuICAgICAgICBzZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lID0gbWFwU2VnbWVudFRpbWVsaW5lKHN0cmVhbUluZGV4LCBzZWdtZW50VGVtcGxhdGUudGltZXNjYWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnRUZW1wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXBTZWdtZW50VGltZWxpbmUoc3RyZWFtSW5kZXgsIHRpbWVzY2FsZSkge1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRUaW1lbGluZSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGNodW5rcyA9IHN0cmVhbUluZGV4LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjJyk7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudHMgPSBbXTtcclxuICAgICAgICBsZXQgc2VnbWVudCxcclxuICAgICAgICAgICAgcHJldlNlZ21lbnQsXHJcbiAgICAgICAgICAgIHRNYW5pZmVzdCxcclxuICAgICAgICAgICAgaSxqLHI7XHJcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNodW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZWdtZW50ID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGltZSAndCcgYXR0cmlidXRlIHZhbHVlXHJcbiAgICAgICAgICAgIHRNYW5pZmVzdCA9IGNodW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ3QnKTtcclxuXHJcbiAgICAgICAgICAgIC8vID0+IHNlZ21lbnQudE1hbmlmZXN0ID0gb3JpZ2luYWwgdGltZXN0YW1wIHZhbHVlIGFzIGEgc3RyaW5nIChmb3IgY29uc3RydWN0aW5nIHRoZSBmcmFnbWVudCByZXF1ZXN0IHVybCwgc2VlIERhc2hIYW5kbGVyKVxyXG4gICAgICAgICAgICAvLyA9PiBzZWdtZW50LnQgPSBudW1iZXIgdmFsdWUgb2YgdGltZXN0YW1wIChtYXliZSByb3VuZGVkIHZhbHVlLCBidXQgb25seSBmb3IgMC4xIG1pY3Jvc2Vjb25kKVxyXG4gICAgICAgICAgICBzZWdtZW50LnRNYW5pZmVzdCA9IHBhcnNlRmxvYXQodE1hbmlmZXN0KTtcclxuICAgICAgICAgICAgc2VnbWVudC50ID0gcGFyc2VGbG9hdCh0TWFuaWZlc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IGR1cmF0aW9uICdkJyBhdHRyaWJ1dGUgdmFsdWVcclxuICAgICAgICAgICAgc2VnbWVudC5kID0gcGFyc2VGbG9hdChjaHVua3NbaV0uZ2V0QXR0cmlidXRlKCdkJykpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgJ3QnIG5vdCBkZWZpbmVkIGZvciBmaXJzdCBzZWdtZW50IHRoZW4gdD0wXHJcbiAgICAgICAgICAgIGlmICgoaSA9PT0gMCkgJiYgIXNlZ21lbnQudCkge1xyXG4gICAgICAgICAgICAgICAgc2VnbWVudC50ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2U2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHByZXZpb3VzIHNlZ21lbnQgZHVyYXRpb24gaWYgbm90IGRlZmluZWRcclxuICAgICAgICAgICAgICAgIGlmICghcHJldlNlZ21lbnQuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2VnbWVudC50TWFuaWZlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNlZ21lbnQuZCA9IHBhcnNlRmxvYXQodE1hbmlmZXN0KSAtIHBhcnNlRmxvYXQocHJldlNlZ21lbnQudE1hbmlmZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2U2VnbWVudC5kID0gc2VnbWVudC50IC0gcHJldlNlZ21lbnQudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gKz0gcHJldlNlZ21lbnQuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFNldCBzZWdtZW50IGFic29sdXRlIHRpbWVzdGFtcCBpZiBub3Qgc2V0IGluIG1hbmlmZXN0XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlZ21lbnQudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2VnbWVudC50TWFuaWZlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudC50TWFuaWZlc3QgPSBwYXJzZUZsb2F0KHByZXZTZWdtZW50LnRNYW5pZmVzdCkgKyBwcmV2U2VnbWVudC5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50LnQgPSBwYXJzZUZsb2F0KHNlZ21lbnQudE1hbmlmZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50LnQgPSBwcmV2U2VnbWVudC50ICsgcHJldlNlZ21lbnQuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50LmQpIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uICs9IHNlZ21lbnQuZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBzZWdtZW50XHJcbiAgICAgICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTdXBwb3J0IGZvciAncicgYXR0cmlidXRlIChpLmUuIFwicmVwZWF0XCIgYXMgaW4gTVBFRy1EQVNIKVxyXG4gICAgICAgICAgICByID0gcGFyc2VGbG9hdChjaHVua3NbaV0uZ2V0QXR0cmlidXRlKCdyJykpO1xyXG4gICAgICAgICAgICBpZiAocikge1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCAociAtIDEpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2U2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LnQgPSBwcmV2U2VnbWVudC50ICsgcHJldlNlZ21lbnQuZDtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmQgPSBwcmV2U2VnbWVudC5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2VnbWVudC50TWFuaWZlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudC50TWFuaWZlc3QgID0gcGFyc2VGbG9hdChwcmV2U2VnbWVudC50TWFuaWZlc3QpICsgcHJldlNlZ21lbnQuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gKz0gc2VnbWVudC5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlZ21lbnRUaW1lbGluZS5TID0gc2VnbWVudHM7XHJcbiAgICAgICAgc2VnbWVudFRpbWVsaW5lLlNfYXNBcnJheSA9IHNlZ21lbnRzO1xyXG4gICAgICAgIHNlZ21lbnRUaW1lbGluZS5kdXJhdGlvbiA9IGR1cmF0aW9uIC8gdGltZXNjYWxlO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VnbWVudFRpbWVsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEtJREZyb21Qcm90ZWN0aW9uSGVhZGVyKHByb3RlY3Rpb25IZWFkZXIpIHtcclxuICAgICAgICBsZXQgcHJIZWFkZXIsXHJcbiAgICAgICAgICAgIHdybUhlYWRlcixcclxuICAgICAgICAgICAgeG1sUmVhZGVyLFxyXG4gICAgICAgICAgICBLSUQ7XHJcblxyXG4gICAgICAgIC8vIEdldCBQbGF5UmVhZHkgaGVhZGVyIGFzIGJ5dGUgYXJyYXkgKGJhc2U2NCBkZWNvZGVkKVxyXG4gICAgICAgIHBySGVhZGVyID0gQkFTRTY0LmRlY29kZUFycmF5KHByb3RlY3Rpb25IZWFkZXIuZmlyc3RDaGlsZC5kYXRhKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IFJpZ2h0IE1hbmFnZW1lbnQgaGVhZGVyIChXUk1IRUFERVIpIGZyb20gUGxheVJlYWR5IGhlYWRlclxyXG4gICAgICAgIHdybUhlYWRlciA9IGdldFdSTUhlYWRlckZyb21QUkhlYWRlcihwckhlYWRlcik7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBtdWx0aS1ieXRlIHRvIHVuaWNvZGVcclxuICAgICAgICB3cm1IZWFkZXIgPSBuZXcgVWludDE2QXJyYXkod3JtSGVhZGVyLmJ1ZmZlcik7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgdG8gc3RyaW5nXHJcbiAgICAgICAgd3JtSGVhZGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB3cm1IZWFkZXIpO1xyXG5cclxuICAgICAgICAvLyBQYXJzZSA8V1JNSGVhZGVyPiB0byBnZXQgS0lEIGZpZWxkIHZhbHVlXHJcbiAgICAgICAgeG1sUmVhZGVyID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKHdybUhlYWRlciwgJ2FwcGxpY2F0aW9uL3htbCcpO1xyXG4gICAgICAgIEtJRCA9IHhtbFJlYWRlci5xdWVyeVNlbGVjdG9yKCdLSUQnKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgLy8gR2V0IEtJRCAoYmFzZTY0IGRlY29kZWQpIGFzIGJ5dGUgYXJyYXlcclxuICAgICAgICBLSUQgPSBCQVNFNjQuZGVjb2RlQXJyYXkoS0lEKTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBVVUlEIGZyb20gbGl0dGxlLWVuZGlhbiB0byBiaWctZW5kaWFuXHJcbiAgICAgICAgY29udmVydFV1aWRFbmRpYW5uZXNzKEtJRCk7XHJcblxyXG4gICAgICAgIHJldHVybiBLSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V1JNSGVhZGVyRnJvbVBSSGVhZGVyKHBySGVhZGVyKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCxcclxuICAgICAgICAgICAgcmVjb3JkQ291bnQsXHJcbiAgICAgICAgICAgIHJlY29yZFR5cGUsXHJcbiAgICAgICAgICAgIHJlY29yZExlbmd0aCxcclxuICAgICAgICAgICAgcmVjb3JkVmFsdWU7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICAvLyBQYXJzZSBQbGF5UmVhZHkgaGVhZGVyXHJcblxyXG4gICAgICAgIC8vIExlbmd0aCAtIDMyIGJpdHMgKExFIGZvcm1hdClcclxuICAgICAgICBsZW5ndGggPSAocHJIZWFkZXJbaSArIDNdIDw8IDI0KSArIChwckhlYWRlcltpICsgMl0gPDwgMTYpICsgKHBySGVhZGVyW2kgKyAxXSA8PCA4KSArIHBySGVhZGVyW2ldO1xyXG4gICAgICAgIGkgKz0gNDtcclxuXHJcbiAgICAgICAgLy8gUmVjb3JkIGNvdW50IC0gMTYgYml0cyAoTEUgZm9ybWF0KVxyXG4gICAgICAgIHJlY29yZENvdW50ID0gKHBySGVhZGVyW2kgKyAxXSA8PCA4KSArIHBySGVhZGVyW2ldO1xyXG4gICAgICAgIGkgKz0gMjtcclxuXHJcbiAgICAgICAgLy8gUGFyc2UgcmVjb3Jkc1xyXG4gICAgICAgIHdoaWxlIChpIDwgcHJIZWFkZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFJlY29yZCB0eXBlIC0gMTYgYml0cyAoTEUgZm9ybWF0KVxyXG4gICAgICAgICAgICByZWNvcmRUeXBlID0gKHBySGVhZGVyW2kgKyAxXSA8PCA4KSArIHBySGVhZGVyW2ldO1xyXG4gICAgICAgICAgICBpICs9IDI7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBSaWdodHMgTWFuYWdlbWVudCBoZWFkZXIgKHJlY29yZCB0eXBlID0gMHgwMSlcclxuICAgICAgICAgICAgaWYgKHJlY29yZFR5cGUgPT09IDB4MDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZWNvcmQgbGVuZ3RoIC0gMTYgYml0cyAoTEUgZm9ybWF0KVxyXG4gICAgICAgICAgICAgICAgcmVjb3JkTGVuZ3RoID0gKHBySGVhZGVyW2kgKyAxXSA8PCA4KSArIHBySGVhZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgaSArPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlY29yZCB2YWx1ZSA9PiBjb250YWlucyA8V1JNSEVBREVSPlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkVmFsdWUgPSBuZXcgVWludDhBcnJheShyZWNvcmRMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkVmFsdWUuc2V0KHBySGVhZGVyLnN1YmFycmF5KGksIGkgKyByZWNvcmRMZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29udmVydFV1aWRFbmRpYW5uZXNzKHV1aWQpIHtcclxuICAgICAgICBzd2FwQnl0ZXModXVpZCwgMCwgMyk7XHJcbiAgICAgICAgc3dhcEJ5dGVzKHV1aWQsIDEsIDIpO1xyXG4gICAgICAgIHN3YXBCeXRlcyh1dWlkLCA0LCA1KTtcclxuICAgICAgICBzd2FwQnl0ZXModXVpZCwgNiwgNyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dhcEJ5dGVzKGJ5dGVzLCBwb3MxLCBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGJ5dGVzW3BvczFdO1xyXG4gICAgICAgIGJ5dGVzW3BvczFdID0gYnl0ZXNbcG9zMl07XHJcbiAgICAgICAgYnl0ZXNbcG9zMl0gPSB0ZW1wO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQUkNvbnRlbnRQcm90ZWN0aW9uKHByb3RlY3Rpb25IZWFkZXIpIHtcclxuICAgICAgICBsZXQgcHJvID0ge1xyXG4gICAgICAgICAgICBfX3RleHQ6IHByb3RlY3Rpb25IZWFkZXIuZmlyc3RDaGlsZC5kYXRhLFxyXG4gICAgICAgICAgICBfX3ByZWZpeDogJ21zcHInXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY2hlbWVJZFVyaTogJ3Vybjp1dWlkOjlhMDRmMDc5LTk4NDAtNDI4Ni1hYjkyLWU2NWJlMDg4NWY5NScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnY29tLm1pY3Jvc29mdC5wbGF5cmVhZHknLFxyXG4gICAgICAgICAgICBwcm86IHBybyxcclxuICAgICAgICAgICAgcHJvX2FzQXJyYXk6IHByb1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlV2lkZXZpbmVDb250ZW50UHJvdGVjdGlvbihwcm90ZWN0aW9uSGVhZGVyLCBLSUQpIHtcclxuICAgICAgICAvLyBDcmVhdGUgV2lkZXZpbmUgQ0VOQyBoZWFkZXIgKFByb3RvY29sIEJ1ZmZlcikgd2l0aCBLSUQgdmFsdWVcclxuICAgICAgICBjb25zdCB3dkNlbmNIZWFkZXIgPSBuZXcgVWludDhBcnJheSgyICsgS0lELmxlbmd0aCk7XHJcbiAgICAgICAgd3ZDZW5jSGVhZGVyWzBdID0gMHgxMjtcclxuICAgICAgICB3dkNlbmNIZWFkZXJbMV0gPSAweDEwO1xyXG4gICAgICAgIHd2Q2VuY0hlYWRlci5zZXQoS0lELCAyKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgcHNzaCBib3hcclxuICAgICAgICBjb25zdCBsZW5ndGggPSAxMiAvKiBib3ggbGVuZ3RoLCB0eXBlLCB2ZXJzaW9uIGFuZCBmbGFncyAqLyArIDE2IC8qIFN5c3RlbUlEICovICsgNCAvKiBkYXRhIGxlbmd0aCAqLyArIHd2Q2VuY0hlYWRlci5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHBzc2ggPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgLy8gU2V0IGJveCBsZW5ndGggdmFsdWVcclxuICAgICAgICBwc3NoW2krK10gPSAobGVuZ3RoICYgMHhGRjAwMDAwMCkgPj4gMjQ7XHJcbiAgICAgICAgcHNzaFtpKytdID0gKGxlbmd0aCAmIDB4MDBGRjAwMDApID4+IDE2O1xyXG4gICAgICAgIHBzc2hbaSsrXSA9IChsZW5ndGggJiAweDAwMDBGRjAwKSA+PiA4O1xyXG4gICAgICAgIHBzc2hbaSsrXSA9IChsZW5ndGggJiAweDAwMDAwMEZGKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHR5cGUgKCdwc3NoJyksIHZlcnNpb24gKDApIGFuZCBmbGFncyAoMClcclxuICAgICAgICBwc3NoLnNldChbMHg3MCwgMHg3MywgMHg3MywgMHg2OCwgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMF0sIGkpO1xyXG4gICAgICAgIGkgKz0gODtcclxuXHJcbiAgICAgICAgLy8gU2V0IFN5c3RlbUlEICgnZWRlZjhiYTktNzlkNi00YWNlLWEzYzgtMjdkY2Q1MWQyMWVkJylcclxuICAgICAgICBwc3NoLnNldChbMHhlZCwgMHhlZiwgMHg4YiwgMHhhOSwgIDB4NzksIDB4ZDYsIDB4NGEsIDB4Y2UsIDB4YTMsIDB4YzgsIDB4MjcsIDB4ZGMsIDB4ZDUsIDB4MWQsIDB4MjEsIDB4ZWRdLCBpKTtcclxuICAgICAgICBpICs9IDE2O1xyXG5cclxuICAgICAgICAvLyBTZXQgZGF0YSBsZW5ndGggdmFsdWVcclxuICAgICAgICBwc3NoW2krK10gPSAod3ZDZW5jSGVhZGVyLmxlbmd0aCAmIDB4RkYwMDAwMDApID4+IDI0O1xyXG4gICAgICAgIHBzc2hbaSsrXSA9ICh3dkNlbmNIZWFkZXIubGVuZ3RoICYgMHgwMEZGMDAwMCkgPj4gMTY7XHJcbiAgICAgICAgcHNzaFtpKytdID0gKHd2Q2VuY0hlYWRlci5sZW5ndGggJiAweDAwMDBGRjAwKSA+PiA4O1xyXG4gICAgICAgIHBzc2hbaSsrXSA9ICh3dkNlbmNIZWFkZXIubGVuZ3RoICYgMHgwMDAwMDBGRik7XHJcblxyXG4gICAgICAgIC8vIENvcHkgV2lkZXZpbmUgQ0VOQyBoZWFkZXJcclxuICAgICAgICBwc3NoLnNldCh3dkNlbmNIZWFkZXIsIGkpO1xyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IHRvIEJBU0U2NCBzdHJpbmdcclxuICAgICAgICBwc3NoID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBwc3NoKTtcclxuICAgICAgICBwc3NoID0gQkFTRTY0LmVuY29kZUFTQ0lJKHBzc2gpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY2hlbWVJZFVyaTogJ3Vybjp1dWlkOmVkZWY4YmE5LTc5ZDYtNGFjZS1hM2M4LTI3ZGNkNTFkMjFlZCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnY29tLndpZGV2aW5lLmFscGhhJyxcclxuICAgICAgICAgICAgcHNzaDoge1xyXG4gICAgICAgICAgICAgICAgX190ZXh0OiBwc3NoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NNYW5pZmVzdCh4bWxEb2MsIG1hbmlmZXN0TG9hZGVkVGltZSkge1xyXG4gICAgICAgIGNvbnN0IG1hbmlmZXN0ID0ge307XHJcbiAgICAgICAgY29uc3QgY29udGVudFByb3RlY3Rpb25zID0gW107XHJcbiAgICAgICAgY29uc3Qgc21vb3RoU3RyZWFtaW5nTWVkaWEgPSB4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1Ntb290aFN0cmVhbWluZ01lZGlhJylbMF07XHJcbiAgICAgICAgY29uc3QgcHJvdGVjdGlvbiA9IHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnUHJvdGVjdGlvbicpWzBdO1xyXG4gICAgICAgIGxldCBwcm90ZWN0aW9uSGVhZGVyID0gbnVsbDtcclxuICAgICAgICBsZXQgcGVyaW9kLFxyXG4gICAgICAgICAgICBhZGFwdGF0aW9ucyxcclxuICAgICAgICAgICAgY29udGVudFByb3RlY3Rpb24sXHJcbiAgICAgICAgICAgIEtJRCxcclxuICAgICAgICAgICAgdGltZXN0YW1wT2Zmc2V0LFxyXG4gICAgICAgICAgICBzdGFydFRpbWUsXHJcbiAgICAgICAgICAgIHNlZ21lbnRzLFxyXG4gICAgICAgICAgICB0aW1lc2NhbGUsXHJcbiAgICAgICAgICAgIGksIGo7XHJcblxyXG4gICAgICAgIC8vIFNldCBtYW5pZmVzdCBub2RlIHByb3BlcnRpZXNcclxuICAgICAgICBtYW5pZmVzdC5wcm90b2NvbCA9ICdNU1MnO1xyXG4gICAgICAgIG1hbmlmZXN0LnByb2ZpbGVzID0gJ3VybjptcGVnOmRhc2g6cHJvZmlsZTppc29mZi1saXZlOjIwMTEnO1xyXG4gICAgICAgIG1hbmlmZXN0LnR5cGUgPSBzbW9vdGhTdHJlYW1pbmdNZWRpYS5nZXRBdHRyaWJ1dGUoJ0lzTGl2ZScpID09PSAnVFJVRScgPyAnZHluYW1pYycgOiAnc3RhdGljJztcclxuICAgICAgICB0aW1lc2NhbGUgPSAgc21vb3RoU3RyZWFtaW5nTWVkaWEuZ2V0QXR0cmlidXRlKCdUaW1lU2NhbGUnKTtcclxuICAgICAgICBtYW5pZmVzdC50aW1lc2NhbGUgPSB0aW1lc2NhbGUgPyBwYXJzZUZsb2F0KHRpbWVzY2FsZSkgOiBERUZBVUxUX1RJTUVfU0NBTEU7XHJcbiAgICAgICAgbGV0IGR2cldpbmRvd0xlbmd0aCA9IHBhcnNlRmxvYXQoc21vb3RoU3RyZWFtaW5nTWVkaWEuZ2V0QXR0cmlidXRlKCdEVlJXaW5kb3dMZW5ndGgnKSk7XHJcbiAgICAgICAgaWYgKGR2cldpbmRvd0xlbmd0aCA9PT0gMCAmJiBzbW9vdGhTdHJlYW1pbmdNZWRpYS5nZXRBdHRyaWJ1dGUoJ0NhblNlZWsnKSA9PT0gJ1RSVUUnKSB7XHJcbiAgICAgICAgICAgIGR2cldpbmRvd0xlbmd0aCA9IEluZmluaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHZyV2luZG93TGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA9IGR2cldpbmRvd0xlbmd0aCAvIG1hbmlmZXN0LnRpbWVzY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHBhcnNlRmxvYXQoc21vb3RoU3RyZWFtaW5nTWVkaWEuZ2V0QXR0cmlidXRlKCdEdXJhdGlvbicpKTtcclxuICAgICAgICBtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uID0gKGR1cmF0aW9uID09PSAwKSA/IEluZmluaXR5IDogZHVyYXRpb24gLyBtYW5pZmVzdC50aW1lc2NhbGU7XHJcbiAgICAgICAgbWFuaWZlc3QubWluQnVmZmVyVGltZSA9IG1lZGlhUGxheWVyTW9kZWwuZ2V0U3RhYmxlQnVmZmVyVGltZSgpO1xyXG4gICAgICAgIG1hbmlmZXN0LnR0bWxUaW1lSXNSZWxhdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIExpdmUgbWFuaWZlc3Qgd2l0aCBEdXJhdGlvbiA9IHN0YXJ0LW92ZXJcclxuICAgICAgICBpZiAobWFuaWZlc3QudHlwZSA9PT0gJ2R5bmFtaWMnICYmIGR1cmF0aW9uID4gMCkge1xyXG4gICAgICAgICAgICBtYW5pZmVzdC50eXBlID0gJ3N0YXRpYyc7XHJcbiAgICAgICAgICAgIC8vIFdlIHNldCB0aW1lU2hpZnRCdWZmZXJEZXB0aCB0byBpbml0aWFsIGR1cmF0aW9uLCB0byBiZSB1c2VkIGJ5IE1zc0ZyYWdtZW50Q29udHJvbGxlciB0byB1cGRhdGUgc2VnbWVudCB0aW1lbGluZVxyXG4gICAgICAgICAgICBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA9IGR1cmF0aW9uIC8gbWFuaWZlc3QudGltZXNjYWxlO1xyXG4gICAgICAgICAgICAvLyBEdXJhdGlvbiB3aWxsIGJlIHNldCBhY2NvcmRpbmcgdG8gY3VycmVudCBzZWdtZW50IHRpbWVsaW5lIGR1cmF0aW9uIChzZWUgYmVsb3cpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbiBjYXNlIG9mIGxpdmUgc3RyZWFtcywgc2V0IGF2YWlsYWJpbGl0eVN0YXJ0VGltZSBwcm9wZXJ0eSBhY2NvcmRpbmcgdG8gRFZSV2luZG93TGVuZ3RoXHJcbiAgICAgICAgaWYgKG1hbmlmZXN0LnR5cGUgPT09ICdkeW5hbWljJyAgJiYgbWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPCBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICBtYW5pZmVzdC5hdmFpbGFiaWxpdHlTdGFydFRpbWUgPSBuZXcgRGF0ZShtYW5pZmVzdExvYWRlZFRpbWUuZ2V0VGltZSgpIC0gKG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoICogMTAwMCkpO1xyXG4gICAgICAgICAgICBtYW5pZmVzdC5yZWZyZXNoTWFuaWZlc3RPblN3aXRjaFRyYWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWFuaWZlc3QuZG9Ob3RVcGRhdGVEVlJXaW5kb3dPbkJ1ZmZlclVwZGF0ZWQgPSB0cnVlOyAvLyBEVlJXaW5kb3cgaXMgdXBkYXRlIGJ5IE1zc0ZyYWdtZW50TW9vZlBvY2Vzc29yIGJhc2VkIG9uIHRmcmYgYm94ZXNcclxuICAgICAgICAgICAgbWFuaWZlc3QuaWdub3JlUG9zdHBvbmVUaW1lUGVyaW9kID0gdHJ1ZTsgLy8gTmV2ZXIgdXBkYXRlIG1hbmlmZXN0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNYXAgcGVyaW9kIG5vZGUgdG8gbWFuaWZlc3Qgcm9vdCBub2RlXHJcbiAgICAgICAgbWFuaWZlc3QuUGVyaW9kID0gbWFwUGVyaW9kKHNtb290aFN0cmVhbWluZ01lZGlhLCBtYW5pZmVzdC50aW1lc2NhbGUpO1xyXG4gICAgICAgIG1hbmlmZXN0LlBlcmlvZF9hc0FycmF5ID0gW21hbmlmZXN0LlBlcmlvZF07XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgcGVyaW9kIHN0YXJ0IHRpbWVcclxuICAgICAgICBwZXJpb2QgPSBtYW5pZmVzdC5QZXJpb2Q7XHJcbiAgICAgICAgcGVyaW9kLnN0YXJ0ID0gMDtcclxuXHJcbiAgICAgICAgLy8gVW5jb21tZW50IHRvIHRlc3QgbGl2ZSB0byBzdGF0aWMgbWFuaWZlc3RzXHJcbiAgICAgICAgLy8gaWYgKG1hbmlmZXN0LnR5cGUgIT09ICdzdGF0aWMnKSB7XHJcbiAgICAgICAgLy8gICAgIG1hbmlmZXN0LnR5cGUgPSAnc3RhdGljJztcclxuICAgICAgICAvLyAgICAgbWFuaWZlc3QubWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbiA9IG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoO1xyXG4gICAgICAgIC8vICAgICBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA9IG51bGw7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBDb250ZW50UHJvdGVjdGlvbiBub2RlXHJcbiAgICAgICAgaWYgKHByb3RlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwcm90ZWN0aW9uSGVhZGVyID0geG1sRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdQcm90ZWN0aW9uSGVhZGVyJylbMF07XHJcblxyXG4gICAgICAgICAgICAvLyBTb21lIHBhY2thZ2VycyBwdXQgbmV3bGluZXMgaW50byB0aGUgUHJvdGVjdGlvbkhlYWRlciBiYXNlNjQgc3RyaW5nLCB3aGljaCBpcyBub3QgZ29vZFxyXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHRoaXMgY2Fubm90IGJlIGNvcnJlY3RseSBwYXJzZWQuIExldCdzIGp1c3QgZmlsdGVyIG91dCBhbnkgbmV3bGluZXMgZm91bmQgaW4gdGhlcmUuXHJcbiAgICAgICAgICAgIHByb3RlY3Rpb25IZWFkZXIuZmlyc3RDaGlsZC5kYXRhID0gcHJvdGVjdGlvbkhlYWRlci5maXJzdENoaWxkLmRhdGEucmVwbGFjZSgvXFxufFxcci9nLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgS0lEIChpbiBDRU5DIGZvcm1hdCkgZnJvbSBwcm90ZWN0aW9uIGhlYWRlclxyXG4gICAgICAgICAgICBLSUQgPSBnZXRLSURGcm9tUHJvdGVjdGlvbkhlYWRlcihwcm90ZWN0aW9uSGVhZGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBDb250ZW50UHJvdGVjdGlvbiBmb3IgUGxheVJlYWR5XHJcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9uID0gY3JlYXRlUFJDb250ZW50UHJvdGVjdGlvbihwcm90ZWN0aW9uSGVhZGVyKTtcclxuICAgICAgICAgICAgY29udGVudFByb3RlY3Rpb25bJ2NlbmM6ZGVmYXVsdF9LSUQnXSA9IEtJRDtcclxuICAgICAgICAgICAgY29udGVudFByb3RlY3Rpb25zLnB1c2goY29udGVudFByb3RlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIENvbnRlbnRQcm90ZWN0aW9uIGZvciBXaWRldmluZSAoYXMgYSBDRU5DIHByb3RlY3Rpb24pXHJcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9uID0gY3JlYXRlV2lkZXZpbmVDb250ZW50UHJvdGVjdGlvbihwcm90ZWN0aW9uSGVhZGVyLCBLSUQpO1xyXG4gICAgICAgICAgICBjb250ZW50UHJvdGVjdGlvblsnY2VuYzpkZWZhdWx0X0tJRCddID0gS0lEO1xyXG4gICAgICAgICAgICBjb250ZW50UHJvdGVjdGlvbnMucHVzaChjb250ZW50UHJvdGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBtYW5pZmVzdC5Db250ZW50UHJvdGVjdGlvbiA9IGNvbnRlbnRQcm90ZWN0aW9ucztcclxuICAgICAgICAgICAgbWFuaWZlc3QuQ29udGVudFByb3RlY3Rpb25fYXNBcnJheSA9IGNvbnRlbnRQcm90ZWN0aW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkYXB0YXRpb25zID0gcGVyaW9kLkFkYXB0YXRpb25TZXRfYXNBcnJheTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFkYXB0YXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5pbml0aWFsaXphdGlvbiA9ICckQmFuZHdpZHRoJCc7XHJcbiAgICAgICAgICAgIC8vIFByb3BhZ2F0ZSBjb250ZW50IHByb3RlY3Rpb24gaW5mb3JtYXRpb24gaW50byBlYWNoIGFkYXB0YXRpb25cclxuICAgICAgICAgICAgaWYgKG1hbmlmZXN0LkNvbnRlbnRQcm90ZWN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGFkYXB0YXRpb25zW2ldLkNvbnRlbnRQcm90ZWN0aW9uID0gbWFuaWZlc3QuQ29udGVudFByb3RlY3Rpb247XHJcbiAgICAgICAgICAgICAgICBhZGFwdGF0aW9uc1tpXS5Db250ZW50UHJvdGVjdGlvbl9hc0FycmF5ID0gbWFuaWZlc3QuQ29udGVudFByb3RlY3Rpb25fYXNBcnJheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1hbmlmZXN0LnR5cGUgPT09ICdkeW5hbWljJykge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IGF2YWlsYWJpbGl0eVN0YXJ0VGltZSBmb3IgaW5maW5pdGUgRFZSIFdpbmRvdyBmcm9tIHNlZ21lbnQgdGltZWxpbmUgZHVyYXRpb25cclxuICAgICAgICAgICAgICAgIGlmIChtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdC5hdmFpbGFiaWxpdHlTdGFydFRpbWUgPSBuZXcgRGF0ZShtYW5pZmVzdExvYWRlZFRpbWUuZ2V0VGltZSgpIC0gKGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuZHVyYXRpb24gKiAxMDAwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBNYXRjaCB0aW1lU2hpZnRCdWZmZXJEZXB0aCB0byB2aWRlbyBzZWdtZW50IHRpbWVsaW5lIGR1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAobWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggIT09IEluZmluaXR5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRhdGlvbnNbaV0uY29udGVudFR5cGUgPT09ICd2aWRlbycgJiZcclxuICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA+IGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA9IGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA8IG1hbmlmZXN0Lm1pbkJ1ZmZlclRpbWUpIHtcclxuICAgICAgICAgICAgbWFuaWZlc3QubWluQnVmZmVyVGltZSA9IG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIENvbnRlbnQgUHJvdGVjdGlvbiB1bmRlciByb290IG1hbmlmZXN0IG5vZGVcclxuICAgICAgICBkZWxldGUgbWFuaWZlc3QuQ29udGVudFByb3RlY3Rpb247XHJcbiAgICAgICAgZGVsZXRlIG1hbmlmZXN0LkNvbnRlbnRQcm90ZWN0aW9uX2FzQXJyYXk7XHJcblxyXG4gICAgICAgIC8vIEluIGNhc2Ugb2YgVk9EIHN0cmVhbXMsIGNoZWNrIGlmIHN0YXJ0IHRpbWUgaXMgZ3JlYXRlciB0aGFuIDBcclxuICAgICAgICAvLyBUaGVuIGRldGVybWluZSB0aW1lc3RhbXAgb2Zmc2V0IGFjY29yZGluZyB0byBoaWdoZXIgYXVkaW8vdmlkZW8gc3RhcnQgdGltZVxyXG4gICAgICAgIC8vICh1c2UgY2FzZSA9IGxpdmUgc3RyZWFtIGRlbGluZWFyaXphdGlvbilcclxuICAgICAgICBpZiAobWFuaWZlc3QudHlwZSA9PT0gJ3N0YXRpYycpIHtcclxuICAgICAgICAgICAgLy8gSW4gY2FzZSBvZiBzdGFydC1vdmVyIHN0cmVhbSBhbmQgbWFuaWZlc3QgcmVsb2FkaW5nIChkdWUgdG8gdHJhY2sgc3dpdGNoKVxyXG4gICAgICAgICAgICAvLyB3ZSBjb25zaWRlciBwcmV2aW91cyB0aW1lc3RhbXBPZmZzZXQgdG8ga2VlcCB0aW1lbGluZXMgc3luY2hyb25pemVkXHJcbiAgICAgICAgICAgIHZhciBwcmV2TWFuaWZlc3QgPSBtYW5pZmVzdE1vZGVsLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIGlmIChwcmV2TWFuaWZlc3QgJiYgcHJldk1hbmlmZXN0LnRpbWVzdGFtcE9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wT2Zmc2V0ID0gcHJldk1hbmlmZXN0LnRpbWVzdGFtcE9mZnNldDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhZGFwdGF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGFwdGF0aW9uc1tpXS5jb250ZW50VHlwZSA9PT0gJ2F1ZGlvJyB8fCBhZGFwdGF0aW9uc1tpXS5jb250ZW50VHlwZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuU19hc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBzZWdtZW50c1swXS50IC8gYWRhcHRhdGlvbnNbaV0uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVzdGFtcE9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXBPZmZzZXQgPSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wT2Zmc2V0ID0gTWF0aC5taW4odGltZXN0YW1wT2Zmc2V0LCBzdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0IGNvbnRlbnQgZHVyYXRpb24gYWNjb3JkaW5nIHRvIG1pbmltdW0gYWRhcHRhdGlvbidzIHNlZ21lbnQgdGltZWxpbmUgZHVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgdG8gZm9yY2UgPHZpZGVvPiBlbGVtZW50IHNlbmRpbmcgJ2VuZGVkJyBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uID0gTWF0aC5taW4obWFuaWZlc3QubWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbiwgYWRhcHRhdGlvbnNbaV0uU2VnbWVudFRlbXBsYXRlLlNlZ21lbnRUaW1lbGluZS5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFBhdGNoIHNlZ21lbnQgdGVtcGxhdGVzIHRpbWVzdGFtcHMgYW5kIGRldGVybWluZSBwZXJpb2Qgc3RhcnQgdGltZSAoc2luY2UgYXVkaW8vdmlkZW8gc2hvdWxkIG5vdCBiZSBhbGlnbmVkIHRvIDApXHJcbiAgICAgICAgICAgIGlmICh0aW1lc3RhbXBPZmZzZXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBtYW5pZmVzdC50aW1lc3RhbXBPZmZzZXQgPSB0aW1lc3RhbXBPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWRhcHRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50cyA9IGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuU19hc0FycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBzZWdtZW50cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlZ21lbnRzW2pdLnRNYW5pZmVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHNbal0udE1hbmlmZXN0ID0gc2VnbWVudHNbal0udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50c1tqXS50IC09ICh0aW1lc3RhbXBPZmZzZXQgKiBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUudGltZXNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkYXB0YXRpb25zW2ldLmNvbnRlbnRUeXBlID09PSAnYXVkaW8nIHx8IGFkYXB0YXRpb25zW2ldLmNvbnRlbnRUeXBlID09PSAndmlkZW8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZC5zdGFydCA9IE1hdGgubWF4KHNlZ21lbnRzWzBdLnQsIHBlcmlvZC5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5wcmVzZW50YXRpb25UaW1lT2Zmc2V0ID0gcGVyaW9kLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBlcmlvZC5zdGFydCAvPSBtYW5pZmVzdC50aW1lc2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZsb29yIHRoZSBkdXJhdGlvbiB0byBnZXQgYXJvdW5kIHByZWNpc2lvbiBkaWZmZXJlbmNlcyBiZXR3ZWVuIHNlZ21lbnRzIHRpbWVzdGFtcHMgYW5kIE1TRSBidWZmZXIgdGltZXN0YW1wc1xyXG4gICAgICAgIC8vIGFuZCB0aGUgYXZvaWQgJ2VuZGVkJyBldmVudCBub3QgYmVpbmcgcmFpc2VkXHJcbiAgICAgICAgbWFuaWZlc3QubWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbiA9IE1hdGguZmxvb3IobWFuaWZlc3QubWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbiAqIDEwMDApIC8gMTAwMDtcclxuICAgICAgICBwZXJpb2QuZHVyYXRpb24gPSBtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uO1xyXG5cclxuICAgICAgICByZXR1cm4gbWFuaWZlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VET00oZGF0YSkge1xyXG4gICAgICAgIGxldCB4bWxEb2MgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LkRPTVBhcnNlcikge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xyXG5cclxuICAgICAgICAgICAgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhkYXRhLCAndGV4dC94bWwnKTtcclxuICAgICAgICAgICAgaWYgKHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyc2VyZXJyb3InKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BhcnNpbmcgdGhlIG1hbmlmZXN0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geG1sRG9jO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1hdGNoZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldElyb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW50ZXJuYWxQYXJzZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IHhtbERvYyA9IG51bGw7XHJcbiAgICAgICAgbGV0IG1hbmlmZXN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICAvLyBQYXJzZSB0aGUgTVNTIFhNTCBtYW5pZmVzdFxyXG4gICAgICAgIHhtbERvYyA9IHBhcnNlRE9NKGRhdGEpO1xyXG5cclxuICAgICAgICBjb25zdCB4bWxQYXJzZVRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgIGlmICh4bWxEb2MgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IE1TUyBtYW5pZmVzdCBpbnRvIERBU0ggbWFuaWZlc3RcclxuICAgICAgICBtYW5pZmVzdCA9IHByb2Nlc3NNYW5pZmVzdCh4bWxEb2MsIG5ldyBEYXRlKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBtc3MyZGFzaFRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdQYXJzaW5nIGNvbXBsZXRlOiAoeG1sUGFyc2luZzogJyArICh4bWxQYXJzZVRpbWUgLSBzdGFydFRpbWUpLnRvUHJlY2lzaW9uKDMpICsgJ21zLCBtc3MyZGFzaDogJyArIChtc3MyZGFzaFRpbWUgLSB4bWxQYXJzZVRpbWUpLnRvUHJlY2lzaW9uKDMpICsgJ21zLCB0b3RhbDogJyArICgobXNzMmRhc2hUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDApLnRvUHJlY2lzaW9uKDMpICsgJ3MpJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYW5pZmVzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZSA9IHtcclxuICAgICAgICBwYXJzZTogaW50ZXJuYWxQYXJzZSxcclxuICAgICAgICBnZXRNYXRjaGVyczogZ2V0TWF0Y2hlcnMsXHJcbiAgICAgICAgZ2V0SXJvbjogZ2V0SXJvblxyXG4gICAgfTtcclxuXHJcbiAgICBzZXR1cCgpO1xyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuTXNzUGFyc2VyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdNc3NQYXJzZXInO1xyXG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShNc3NQYXJzZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuIiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcbmltcG9ydCBFdmVudHNCYXNlIGZyb20gJy4uL2NvcmUvZXZlbnRzL0V2ZW50c0Jhc2UnO1xyXG4vKipcclxuICogQGNsYXNzXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBNZWRpYVBsYXllckV2ZW50cyBleHRlbmRzIEV2ZW50c0Jhc2Uge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFB1YmxpYyBmYWNpbmcgZXh0ZXJuYWwgZXZlbnRzIHRvIGJlIHVzZWQgd2hlbiBkZXZlbG9waW5nIGEgcGxheWVyIHRoYXQgaW1wbGVtZW50cyBkYXNoLmpzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHBsYXliYWNrIHdpbGwgbm90IHN0YXJ0IHlldFxyXG4gICAgICAgICAqIGFzIHRoZSBNUEQncyBhdmFpbGFiaWxpdHlTdGFydFRpbWUgaXMgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAgICAgKiBDaGVjayBkZWxheSBwcm9wZXJ0eSBpbiBwYXlsb2FkIHRvIGRldGVybWluZSB0aW1lIGJlZm9yZSBwbGF5YmFjayB3aWxsIHN0YXJ0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuQVNUX0lOX0ZVVFVSRSA9ICdhc3RJbkZ1dHVyZSc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHRoZSB2aWRlbyBlbGVtZW50J3MgYnVmZmVyIHN0YXRlIGNoYW5nZXMgdG8gc3RhbGxlZC5cclxuICAgICAgICAgKiBDaGVjayBtZWRpYVR5cGUgaW4gcGF5bG9hZCB0byBkZXRlcm1pbmUgdHlwZSAoVmlkZW8sIEF1ZGlvLCBGcmFnbWVudGVkVGV4dCkuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI0JVRkZFUl9FTVBUWVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuQlVGRkVSX0VNUFRZID0gJ2J1ZmZlclN0YWxsZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgdmlkZW8gZWxlbWVudCdzIGJ1ZmZlciBzdGF0ZSBjaGFuZ2VzIHRvIGxvYWRlZC5cclxuICAgICAgICAgKiBDaGVjayBtZWRpYVR5cGUgaW4gcGF5bG9hZCB0byBkZXRlcm1pbmUgdHlwZSAoVmlkZW8sIEF1ZGlvLCBGcmFnbWVudGVkVGV4dCkuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI0JVRkZFUl9MT0FERURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkJVRkZFUl9MT0FERUQgPSAnYnVmZmVyTG9hZGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIHZpZGVvIGVsZW1lbnQncyBidWZmZXIgc3RhdGUgY2hhbmdlcywgZWl0aGVyIHN0YWxsZWQgb3IgbG9hZGVkLiBDaGVjayBwYXlsb2FkIGZvciBzdGF0ZS5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjQlVGRkVSX0xFVkVMX1NUQVRFX0NIQU5HRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkJVRkZFUl9MRVZFTF9TVEFURV9DSEFOR0VEID0gJ2J1ZmZlclN0YXRlQ2hhbmdlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGZyb20gdGhlIGVsZW1lbnQgb3IgTVNFIHNvdXJjZSBidWZmZXIuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI0VSUk9SXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5FUlJPUiA9ICdlcnJvcic7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGEgZnJhZ21lbnQgZG93bmxvYWQgaGFzIGNvbXBsZXRlZC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjRlJBR01FTlRfTE9BRElOR19DT01QTEVURURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkZSQUdNRU5UX0xPQURJTkdfQ09NUExFVEVEID0gJ2ZyYWdtZW50TG9hZGluZ0NvbXBsZXRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGEgcGFydGlhbCBmcmFnbWVudCBkb3dubG9hZCBoYXMgY29tcGxldGVkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNGUkFHTUVOVF9MT0FESU5HX1BST0dSRVNTXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5GUkFHTUVOVF9MT0FESU5HX1BST0dSRVNTID0gJ2ZyYWdtZW50TG9hZGluZ1Byb2dyZXNzJztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhIGZyYWdtZW50IGRvd25sb2FkIGhhcyBzdGFydGVkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNGUkFHTUVOVF9MT0FESU5HX1NUQVJURURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkZSQUdNRU5UX0xPQURJTkdfU1RBUlRFRCA9ICdmcmFnbWVudExvYWRpbmdTdGFydGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gYSBmcmFnbWVudCBkb3dubG9hZCBpcyBhYmFuZG9uZWQgZHVlIHRvIGRldGVjdGlvbiBvZiBzbG93IGRvd25sb2FkIGJhc2Ugb24gdGhlIEFCUiBhYmFuZG9uIHJ1bGUuLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNGUkFHTUVOVF9MT0FESU5HX0FCQU5ET05FRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuRlJBR01FTlRfTE9BRElOR19BQkFORE9ORUQgPSAnZnJhZ21lbnRMb2FkaW5nQWJhbmRvbmVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4ge0BsaW5rIG1vZHVsZTpEZWJ1Z30gbG9nZ2VyIG1ldGhvZHMgYXJlIGNhbGxlZC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjTE9HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5MT0cgPSAnbG9nJztcclxuXHJcbiAgICAgICAgLy9UT0RPIHJlZmFjdG9yIHdpdGggaW50ZXJuYWwgZXZlbnRcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgbWFuaWZlc3QgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNNQU5JRkVTVF9MT0FERURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLk1BTklGRVNUX0xPQURFRCA9ICdtYW5pZmVzdExvYWRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCBhbnl0aW1lIHRoZXJlIGlzIGEgY2hhbmdlIHRvIHRoZSBvdmVyYWxsIG1ldHJpY3MuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI01FVFJJQ1NfQ0hBTkdFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuTUVUUklDU19DSEFOR0VEID0gJ21ldHJpY3NDaGFuZ2VkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gYW4gaW5kaXZpZHVhbCBtZXRyaWMgaXMgYWRkZWQsIHVwZGF0ZWQgb3IgY2xlYXJlZC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjTUVUUklDX0NIQU5HRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLk1FVFJJQ19DSEFOR0VEID0gJ21ldHJpY0NoYW5nZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgZXZlcnkgdGltZSBhIG5ldyBtZXRyaWMgaXMgYWRkZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI01FVFJJQ19BRERFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuTUVUUklDX0FEREVEID0gJ21ldHJpY0FkZGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIGV2ZXJ5IHRpbWUgYSBtZXRyaWMgaXMgdXBkYXRlZC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjTUVUUklDX1VQREFURURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLk1FVFJJQ19VUERBVEVEID0gJ21ldHJpY1VwZGF0ZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgYXQgdGhlIHN0cmVhbSBlbmQgb2YgYSBwZXJpb2QuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BFUklPRF9TV0lUQ0hfQ09NUExFVEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QRVJJT0RfU1dJVENIX0NPTVBMRVRFRCA9ICdwZXJpb2RTd2l0Y2hDb21wbGV0ZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhIG5ldyBwZXJpb2Qgc3RhcnRzLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQRVJJT0RfU1dJVENIX1NUQVJURURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBFUklPRF9TV0lUQ0hfU1RBUlRFRCA9ICdwZXJpb2RTd2l0Y2hTdGFydGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gYW4gQUJSIHVwIC9kb3duIHN3aXRjaCBpcyBpbml0aWF0ZWQ7IGVpdGhlciBieSB1c2VyIGluIG1hbnVhbCBtb2RlIG9yIGF1dG8gbW9kZSB2aWEgQUJSIHJ1bGVzLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNRVUFMSVRZX0NIQU5HRV9SRVFVRVNURURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlFVQUxJVFlfQ0hBTkdFX1JFUVVFU1RFRCA9ICdxdWFsaXR5Q2hhbmdlUmVxdWVzdGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIG5ldyBBQlIgcXVhbGl0eSBpcyBiZWluZyByZW5kZXJlZCBvbi1zY3JlZW4uXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1FVQUxJVFlfQ0hBTkdFX1JFTkRFUkVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5RVUFMSVRZX0NIQU5HRV9SRU5ERVJFRCA9ICdxdWFsaXR5Q2hhbmdlUmVuZGVyZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgbmV3IHRyYWNrIGlzIGJlaW5nIHJlbmRlcmVkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNUUkFDS19DSEFOR0VfUkVOREVSRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlRSQUNLX0NIQU5HRV9SRU5ERVJFRCA9ICd0cmFja0NoYW5nZVJlbmRlcmVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIHNvdXJjZSBpcyBzZXR1cCBhbmQgcmVhZHkuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1NPVVJDRV9JTklUSUFMSVpFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuU09VUkNFX0lOSVRJQUxJWkVEID0gJ3NvdXJjZUluaXRpYWxpemVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gYSBzdHJlYW0gKHBlcmlvZCkgaXMgbG9hZGVkXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1NUUkVBTV9JTklUSUFMSVpFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuU1RSRUFNX0lOSVRJQUxJWkVEID0gJ3N0cmVhbUluaXRpYWxpemVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIHBsYXllciBoYXMgYmVlbiByZXNldC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjU1RSRUFNX1RFQVJET1dOX0NPTVBMRVRFXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5TVFJFQU1fVEVBUkRPV05fQ09NUExFVEUgPSAnc3RyZWFtVGVhcmRvd25Db21wbGV0ZSc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCBvbmNlIGFsbCB0ZXh0IHRyYWNrcyBkZXRlY3RlZCBpbiB0aGUgTVBEIGFyZSBhZGRlZCB0byB0aGUgdmlkZW8gZWxlbWVudC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjVEVYVF9UUkFDS1NfQURERURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlRFWFRfVFJBQ0tTX0FEREVEID0gJ2FsbFRleHRUcmFja3NBZGRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGEgdGV4dCB0cmFjayBpcyBhZGRlZCB0byB0aGUgdmlkZW8gZWxlbWVudCdzIFRleHRUcmFja0xpc3RcclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjVEVYVF9UUkFDS19BRERFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuVEVYVF9UUkFDS19BRERFRCA9ICd0ZXh0VHJhY2tBZGRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGEgdHRtbCBjaHVuayBpcyBwYXJzZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1RUTUxfUEFSU0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5UVE1MX1BBUlNFRCA9ICd0dG1sUGFyc2VkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gYSB0dG1sIGNodW5rIGhhcyB0byBiZSBwYXJzZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1RUTUxfVE9fUEFSU0VcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlRUTUxfVE9fUEFSU0UgPSAndHRtbFRvUGFyc2UnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhIGNhcHRpb24gaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI0NBUFRJT05fUkVOREVSRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkNBUFRJT05fUkVOREVSRUQgPSAnY2FwdGlvblJlbmRlcmVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIGNhcHRpb24gY29udGFpbmVyIGlzIHJlc2l6ZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI0NBUFRJT05fQ09OVEFJTkVSX1JFU0laRVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuQ0FQVElPTl9DT05UQUlORVJfUkVTSVpFID0gJ2NhcHRpb25Db250YWluZXJSZXNpemUnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHdoZW4gZW5vdWdoIGRhdGEgaXMgYXZhaWxhYmxlIHRoYXQgdGhlIG1lZGlhIGNhbiBiZSBwbGF5ZWQsXHJcbiAgICAgICAgICogYXQgbGVhc3QgZm9yIGEgY291cGxlIG9mIGZyYW1lcy4gIFRoaXMgY29ycmVzcG9uZHMgdG8gdGhlXHJcbiAgICAgICAgICogSEFWRV9FTk9VR0hfREFUQSByZWFkeVN0YXRlLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNDQU5fUExBWVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuQ0FOX1BMQVkgPSAnY2FuUGxheSc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiBwbGF5YmFjayBjb21wbGV0ZXMuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX0VOREVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19FTkRFRCA9ICdwbGF5YmFja0VuZGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIGFuIGVycm9yIG9jY3Vycy4gIFRoZSBlbGVtZW50J3MgZXJyb3JcclxuICAgICAgICAgKiBhdHRyaWJ1dGUgY29udGFpbnMgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfRVJST1JcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX0VSUk9SID0gJ3BsYXliYWNrRXJyb3InO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHdoZW4gcGxheWJhY2sgaXMgbm90IGFsbG93ZWQgKGZvciBleGFtcGxlIGlmIHVzZXIgZ2VzdHVyZSBpcyBuZWVkZWQpLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19OT1RfQUxMT1dFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfTk9UX0FMTE9XRUQgPSAncGxheWJhY2tOb3RBbGxvd2VkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1lZGlhJ3MgbWV0YWRhdGEgaGFzIGZpbmlzaGVkIGxvYWRpbmc7IGFsbCBhdHRyaWJ1dGVzIG5vd1xyXG4gICAgICAgICAqIGNvbnRhaW4gYXMgbXVjaCB1c2VmdWwgaW5mb3JtYXRpb24gYXMgdGhleSdyZSBnb2luZyB0by5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfTUVUQURBVEFfTE9BREVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19NRVRBREFUQV9MT0FERUQgPSAncGxheWJhY2tNZXRhRGF0YUxvYWRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiBwbGF5YmFjayBpcyBwYXVzZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX1BBVVNFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfUEFVU0VEID0gJ3BsYXliYWNrUGF1c2VkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIHRoZSBtZWRpYSBiZWdpbnMgdG8gcGxheSAoZWl0aGVyIGZvciB0aGUgZmlyc3QgdGltZSwgYWZ0ZXIgaGF2aW5nIGJlZW4gcGF1c2VkLFxyXG4gICAgICAgICAqIG9yIGFmdGVyIGVuZGluZyBhbmQgdGhlbiByZXN0YXJ0aW5nKS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19QTEFZSU5HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19QTEFZSU5HID0gJ3BsYXliYWNrUGxheWluZyc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgcGVyaW9kaWNhbGx5IHRvIGluZm9ybSBpbnRlcmVzdGVkIHBhcnRpZXMgb2YgcHJvZ3Jlc3MgZG93bmxvYWRpbmdcclxuICAgICAgICAgKiB0aGUgbWVkaWEuIEluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IGFtb3VudCBvZiB0aGUgbWVkaWEgdGhhdCBoYXNcclxuICAgICAgICAgKiBiZWVuIGRvd25sb2FkZWQgaXMgYXZhaWxhYmxlIGluIHRoZSBtZWRpYSBlbGVtZW50J3MgYnVmZmVyZWQgYXR0cmlidXRlLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19QUk9HUkVTU1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfUFJPR1JFU1MgPSAncGxheWJhY2tQcm9ncmVzcyc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiB0aGUgcGxheWJhY2sgc3BlZWQgY2hhbmdlcy5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfUkFURV9DSEFOR0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19SQVRFX0NIQU5HRUQgPSAncGxheWJhY2tSYXRlQ2hhbmdlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiBhIHNlZWsgb3BlcmF0aW9uIGNvbXBsZXRlcy5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfU0VFS0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19TRUVLRUQgPSAncGxheWJhY2tTZWVrZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHdoZW4gYSBzZWVrIG9wZXJhdGlvbiBiZWdpbnMuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX1NFRUtJTkdcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX1NFRUtJTkcgPSAncGxheWJhY2tTZWVraW5nJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIGEgc2VlayBvcGVyYXRpb24gaGFzIGJlZW4gYXNrZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX1NFRUtfQVNLRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX1NFRUtfQVNLRUQgPSAncGxheWJhY2tTZWVrQXNrZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHdoZW4gdGhlIHZpZGVvIGVsZW1lbnQgcmVwb3J0cyBzdGFsbGVkXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX1NUQUxMRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX1NUQUxMRUQgPSAncGxheWJhY2tTdGFsbGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIHBsYXliYWNrIG9mIHRoZSBtZWRpYSBzdGFydHMgYWZ0ZXIgaGF2aW5nIGJlZW4gcGF1c2VkO1xyXG4gICAgICAgICAqIHRoYXQgaXMsIHdoZW4gcGxheWJhY2sgaXMgcmVzdW1lZCBhZnRlciBhIHByaW9yIHBhdXNlIGV2ZW50LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX1NUQVJURURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX1NUQVJURUQgPSAncGxheWJhY2tTdGFydGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRpbWUgaW5kaWNhdGVkIGJ5IHRoZSBlbGVtZW50J3MgY3VycmVudFRpbWUgYXR0cmlidXRlIGhhcyBjaGFuZ2VkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19USU1FX1VQREFURURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX1RJTUVfVVBEQVRFRCA9ICdwbGF5YmFja1RpbWVVcGRhdGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIHRoZSBtZWRpYSBwbGF5YmFjayBoYXMgc3RvcHBlZCBiZWNhdXNlIG9mIGEgdGVtcG9yYXJ5IGxhY2sgb2YgZGF0YS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19XQUlUSU5HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19XQUlUSU5HID0gJ3BsYXliYWNrV2FpdGluZyc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmlmZXN0IHZhbGlkaXR5IGNoYW5nZWQgLSBBcyBhIHJlc3VsdCBvZiBhbiBNUEQgdmFsaWRpdHkgZXhwaXJhdGlvbiBldmVudC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjTUFOSUZFU1RfVkFMSURJVFlfQ0hBTkdFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuTUFOSUZFU1RfVkFMSURJVFlfQ0hBTkdFRCA9ICdtYW5pZmVzdFZhbGlkaXR5Q2hhbmdlZCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtZWRpYVBsYXllckV2ZW50cyA9IG5ldyBNZWRpYVBsYXllckV2ZW50cygpO1xyXG5leHBvcnQgZGVmYXVsdCBtZWRpYVBsYXllckV2ZW50cztcclxuIiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcbi8qKlxyXG4gKiBAY2xhc3NcclxuICogQGlnbm9yZVxyXG4gKi9cclxuY2xhc3MgRGFzaEpTRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoY29kZSwgbWVzc2FnZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGUgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoSlNFcnJvcjsiLCIvKipcclxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcclxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXHJcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcclxuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXHJcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxyXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXHJcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxyXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxyXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcclxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcclxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcclxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxyXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxyXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcclxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NcclxuICogQGlnbm9yZVxyXG4gKi9cclxuY2xhc3MgRGF0YUNodW5rIHtcclxuICAgIC8vUmVwcmVzZW50cyBhIGRhdGEgc3RydWN0dXJlIHRoYXQga2VlcCBhbGwgdGhlIG5lY2Vzc2FyeSBpbmZvIGFib3V0IGEgc2luZ2xlIGluaXQvbWVkaWEgc2VnbWVudFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdHJlYW1JZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZWRpYUluZm8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudFR5cGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucXVhbGl0eSA9IE5hTjtcclxuICAgICAgICB0aGlzLmluZGV4ID0gTmFOO1xyXG4gICAgICAgIHRoaXMuYnl0ZXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBOYU47XHJcbiAgICAgICAgdGhpcy5lbmQgPSBOYU47XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE5hTjtcclxuICAgICAgICB0aGlzLnJlcHJlc2VudGF0aW9uSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW5kRnJhZ21lbnQgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhQ2h1bms7IiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcbi8qKlxyXG4gKiBAY2xhc3NcclxuICogQGlnbm9yZVxyXG4gKi9cclxuY2xhc3MgRnJhZ21lbnRSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gRnJhZ21lbnRSZXF1ZXN0LkFDVElPTl9ET1dOTE9BRDtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IE5hTjtcclxuICAgICAgICB0aGlzLm1lZGlhVHlwZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZWRpYUluZm8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE5hTjtcclxuICAgICAgICB0aGlzLnRpbWVzY2FsZSA9IE5hTjtcclxuICAgICAgICB0aGlzLnJhbmdlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVybCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlTG9jYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maXJzdEJ5dGVEYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlcXVlc3RFbmREYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnF1YWxpdHkgPSBOYU47XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IE5hTjtcclxuICAgICAgICB0aGlzLmF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFiaWxpdHlFbmRUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLndhbGxTdGFydFRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYnl0ZXNMb2FkZWQgPSBOYU47XHJcbiAgICAgICAgdGhpcy5ieXRlc1RvdGFsID0gTmFOO1xyXG4gICAgICAgIHRoaXMuZGVsYXlMb2FkaW5nVGltZSA9IE5hTjtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgdGhpcy5yZXByZXNlbnRhdGlvbklkID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuRnJhZ21lbnRSZXF1ZXN0LkFDVElPTl9ET1dOTE9BRCA9ICdkb3dubG9hZCc7XHJcbkZyYWdtZW50UmVxdWVzdC5BQ1RJT05fQ09NUExFVEUgPSAnY29tcGxldGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJhZ21lbnRSZXF1ZXN0O1xyXG4iXX0=
