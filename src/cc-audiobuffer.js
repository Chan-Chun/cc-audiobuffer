/**
 * Created by ChanChun on 17-4-29.
 */

export default class CCAudioBuffer {
    constructor(audioUrlBag) {
        this.audioUrlBag = audioUrlBag || new Array()
        this.currentAudio = null
        this._playNext();
    }
    pushBuffer(url) {
        if (!this._isHasCurrentAudio()) {
            let audio = new Audio(url)
            audio.preload = "auto"
            this.audioUrlBag.push(audio)
            this._playNext()
        } else {
            let audio = new Audio(url)
            audio.preload = "auto"
            this.audioUrlBag.push(audio)
        }
    }
    clearBuffer() {
        this.audioUrlBag = []
    }
    pauseBuffer() {
        if (this._isHasCurrentAudio()) {
            this._isHasCurrentAudio().pause()
        }
    }
    continueBuffer() {
        if (this._isHasCurrentAudio()) {
            this._isHasCurrentAudio().play()
        }
    }
    _shiftBuffer() {
        return this.audioUrlBag.shift()
    }
    _isHasBuffer() {
        return this.audioUrlBag.length > 0
    }
    _isHasCurrentAudio() {
        return this.currentAudio
    }
    _playNext() {
        const _this = this
        if (this._isHasBuffer() && !this._isHasCurrentAudio()) {
            this.currentAudio = this._shiftBuffer()
            this.currentAudio.play()
        } else if (!this._isHasBuffer()) {
            this.currentAudio = null
        }
        if (this._isHasCurrentAudio()) {
            this.currentAudio.addEventListener('ended', function() {
                _this.currentAudio = null
                _this._playNext()
            }, false)
        }
    }
}
