"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by ChanChun on 17-2-28.
 */

var CCAudioBuffer = function () {
    function CCAudioBuffer(audioUrlBag) {
        _classCallCheck(this, CCAudioBuffer);

        this.audioUrlBag = audioUrlBag || new Array();
        this.currentAudio = null;
        this._playNext();
    }

    _createClass(CCAudioBuffer, [{
        key: "pushBuffer",
        value: function pushBuffer(url) {
            if (!this._isHasCurrentAudio()) {
                var audio = new Audio(url);
                audio.preload = "auto";
                this.audioUrlBag.push(audio);
                this._playNext();
            } else {
                var _audio = new Audio(url);
                _audio.preload = "auto";
                this.audioUrlBag.push(_audio);
            }
        }
    }, {
        key: "_shiftBuffer",
        value: function _shiftBuffer() {
            return this.audioUrlBag.shift();
        }
    }, {
        key: "_isHasBuffer",
        value: function _isHasBuffer() {
            return this.audioUrlBag.length > 0;
        }
    }, {
        key: "_isHasCurrentAudio",
        value: function _isHasCurrentAudio() {
            return this.currentAudio;
        }
    }, {
        key: "_playNext",
        value: function _playNext() {
            var _this = this;
            if (this._isHasBuffer()) {
                this.currentAudio = this._shiftBuffer();
                this.currentAudio.play();
                this.currentAudio.addEventListener('ended', function () {
                    _this._playNext();
                }, false);
            } else {
                this.currentAudio = null;
            }
        }
    }]);

    return CCAudioBuffer;
}();

exports.default = CCAudioBuffer;
