/**
 * Created by ChanChun on 17-2-28.
 */

class CCAudioBuffer {
    constructor(AudioUrlBag) {
        this.AudioUrlBag = AudioUrlBag || new Array()
        this.currentAudio = null
    }
    pushBuffer(url) {
        if(!this.isHasCurrentAudio()){
            let audio = new Audio(url)
            audio.preload = "auto"
            this.AudioUrlBag.push(audio)
            this.play()
        }
        else{
            let audio = new Audio(url)
            audio.preload = "auto"
            this.AudioUrlBag.push(audio)
        }
    }
    shiftBuffer() {
        return this.AudioUrlBag.shift()
    }
    isHasBuffer() {
        return this.AudioUrlBag.length > 0
    }
    isHasCurrentAudio(){
        return this.currentAudio
    }
    play() {
        const _this = this
        if (this.isHasBuffer()) {
            this.currentAudio = this.shiftBuffer()
            this.currentAudio.play()
            _this.currentAudio.addEventListener('ended', function () {
                _this.play()
            }, false)
        }else{
            this.currentAudio=null
        }
    }
}
