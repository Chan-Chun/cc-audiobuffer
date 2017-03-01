"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by ChanChun on 17-2-28.
 */

var CCAudioBuffer = function () {
    function CCAudioBuffer(AudioUrlBag) {
        _classCallCheck(this, CCAudioBuffer);

        this.AudioUrlBag = AudioUrlBag || new Array();
        this.currentAudio = null;
    }

    _createClass(CCAudioBuffer, [{
        key: "pushBuffer",
        value: function pushBuffer(url) {
            if (!this.isHasCurrentAudio()) {
                var audio = new Audio(url);
                audio.preload = "auto";
                this.AudioUrlBag.push(audio);
                this.play();
            } else {
                var _audio = new Audio(url);
                _audio.preload = "auto";
                this.AudioUrlBag.push(_audio);
            }
        }
    }, {
        key: "shiftBuffer",
        value: function shiftBuffer() {
            return this.AudioUrlBag.shift();
        }
    }, {
        key: "isHasBuffer",
        value: function isHasBuffer() {
            return this.AudioUrlBag.length > 0;
        }
    }, {
        key: "isHasCurrentAudio",
        value: function isHasCurrentAudio() {
            return this.currentAudio;
        }
    }, {
        key: "play",
        value: function play() {
            var _this = this;
            if (this.isHasBuffer()) {
                this.currentAudio = this.shiftBuffer();
                this.currentAudio.play();
                _this.currentAudio.addEventListener('ended', function () {
                    _this.play();
                }, false);
            } else {
                this.currentAudio = null;
            }
        }
    }]);

    return CCAudioBuffer;
}();
