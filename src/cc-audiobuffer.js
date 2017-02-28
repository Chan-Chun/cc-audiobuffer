/**
 * Created by ChanChun on 17-2-27.
 */

class CCAudioBuffer {
    constructor(AudioUrlBag) {
        this.AudioUrlBag = AudioUrlBag || new Array()
        this.currentAudio = null
    }
    pushBuffer(url) {
        let audio = new Audio(url)
        audio.preload = "auto"
        this.AudioUrlBag.push(audio)
    }
    shiftBuffer() {
        return this.AudioUrlBag.shift()
    }
    isEmptyBuffer() {
        return this.AudioUrlBag.length > 0
    }
    play() {
        const _this = this
        if (this.isEmptyBuffer()) {
            this.currentAudio = this.shiftBuffer()
            this.currentAudio.play()
            _this.currentAudio.addEventListener('ended', function () {
                _this.play()
            }, false)
        }
    }
}
