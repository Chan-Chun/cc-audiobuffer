/**
 * Created by ChanChun on 17-2-28.
 */

/**
 * 尝试用不同类型封装
 */


// class CCAudioBuffer {
//     constructor(AudioUrlBag) {
//         this.AudioUrlBag = AudioUrlBag || new Array()
//         this.currentAudio = null
//         this._play();
//     }
//     pushBuffer(url) {
//         if(!this.isHasCurrentAudio()){
//             let audio = new Audio(url)
//             audio.preload = "auto"
//             this.AudioUrlBag.push(audio)
//             this.play()
//         }
//         else{
//             let audio = new Audio(url)
//             audio.preload = "auto"
//             this.AudioUrlBag.push(audio)
//         }
//     }
//     _shiftBuffer() {
//         return this.AudioUrlBag.shift()
//     }
//     _isHasBuffer() {
//         return this.AudioUrlBag.length > 0
//     }
//     _isHasCurrentAudio(){
//         return this.currentAudio
//     }
//     _play() {
//         const _this = this
//         if (this.isHasBuffer()) {
//             this.currentAudio = this.shiftBuffer()
//             this.currentAudio.play()
//             _this.currentAudio.addEventListener('ended', function () {
//                 _this.play()
//             }, false)
//         }else{
//             this.currentAudio=null
//         }
//     }
// }

/*写一个封装 模块模式*/
function CCAudioBuffer (AudioUrlBag) {
    var AudioUrlBag = AudioUrlBag || new Array()
    var currentAudio = null
    _playNext()
    function _shiftBuffer() {
        return AudioUrlBag.shift()
    }
    function _isHasBuffer() {
        return AudioUrlBag.length > 0
    }
    function _isHasCurrentAudio(){
        return currentAudio
    }
    function _playNext() {
        const _this = this
        if (_isHasBuffer()) {
            currentAudio = shiftBuffer()
            currentAudio._play()
            _this.currentAudio.addEventListener('ended', function () {
                _this.playNext()
            }, false)
        }else{
            this.currentAudio=null
        }
    }
    return {
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
    }
}()
