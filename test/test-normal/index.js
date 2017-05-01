/*
* 这是1.2.1版本的测试
*/

// window.onload = function () {
//   let AudioBuffer = new CCAudioBuffer([
//     new Audio('../uploads/1')
//   ]);
//   AudioBuffer.pushBuffer('../uploads/2')
//   setTimeout(()=>{AudioBuffer.pushBuffer('../uploads/3')},10000)
// }

var firstTest= document.getElementById("firstTest")

firstTest.onclick = function () {
  let AudioBuffer = new CCAudioBuffer([
    new Audio('../uploads/1')
  ]);
  AudioBuffer.pushBuffer('../uploads/2')
  setTimeout(()=>{AudioBuffer.pushBuffer('../uploads/3')},10000)
}

var secondTestLoad = document.getElementById("secondTestLoad")
var secondTestContinue = document.getElementById("secondTestContinue")
var secondTestPause = document.getElementById("secondTestPause")
var secondTestClear = document.getElementById("secondTestClear")
let AudioBuffer2

secondTestLoad.onclick = function () {
  AudioBuffer2= new CCAudioBuffer([
    new Audio('../uploads/1'),
    new Audio('../uploads/2'),
    new Audio('../uploads/3')
  ]);
}

secondTestPause.onclick = function () {
  if(AudioBuffer2) {
    AudioBuffer2.pauseBuffer()
  }else {
    alert('Did not load audio')
    console.log('Did not load audio') 
  }
}

secondTestContinue.onclick = function () {
  if(AudioBuffer2) {
    AudioBuffer2.continueBuffer()
  }else {
    alert('Did not load audio')
    console.log('Did not load audio') 
  }
}

secondTestClear.onclick = function () {
  if(AudioBuffer2) {
    AudioBuffer2.clearBuffer()
  }else {
    alert('Did not load audio')
    console.log('Did not load audio') 
  }
}
