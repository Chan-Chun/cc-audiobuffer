/**
 * Created by ChanChun on 17-2-28.
 */

/**
 * 尝试用不同类型封装
 */

/*写一个封装 模块模式*/

let CCAudioBuffer = function (audioUrlList) {
    let audioUrlBag = audioUrlList || new Array()
    let currentAudio = null
    _playNext()
    function _shiftBuffer() {
        return audioUrlBag.shift()
    }
    function _isHasBuffer() {
        return audioUrlBag.length > 0
    }
    function _isHasCurrentAudio(){
        return currentAudio
    }
    function _playNext() {
        if (_isHasBuffer()) {
            currentAudio = _shiftBuffer()
            currentAudio.play()
            currentAudio.addEventListener('ended', function () {
                _playNext()
            }, false)
        }else{
            currentAudio=null
        }
    }
    return {
        pushBuffer(url) {
            if(!_isHasCurrentAudio()){
                let audio = new Audio(url)
                audio.preload = "auto"
                audioUrlBag.push(audio)
                _playNext()
            }
            else{
                let audio = new Audio(url)
                audio.preload = "auto"
                audioUrlBag.push(audio)
            }
        }
    }
}