/**
 * Created by ChanChun on 17-2-28.
 */

export default class CCAudioBuffer {
    constructor(audioUrlBag) {
        this.audioUrlBag = audioUrlBag || new Array()
        this.currentAudio = null
        this._playNext();
    }
    pushBuffer(url) {
        if(!this._isHasCurrentAudio()){
            let audio = new Audio(url)
            audio.preload = "auto"
            this.audioUrlBag.push(audio)
            this._playNext()
        }
        else{
            let audio = new Audio(url)
            audio.preload = "auto"
            this.audioUrlBag.push(audio)
        }
    }
    _shiftBuffer() {
        return this.audioUrlBag.shift()
    }
    _isHasBuffer() {
        return this.audioUrlBag.length > 0
    }
    _isHasCurrentAudio(){
        return this.currentAudio
    }
    _playNext() {
        const _this = this
        if (this._isHasBuffer()) {
            this.currentAudio = this._shiftBuffer()
            this.currentAudio.play()
            this.currentAudio.addEventListener('ended', function () {
                _this._playNext()
            }, false)
        }else{
            this.currentAudio=null
        }
    }
}