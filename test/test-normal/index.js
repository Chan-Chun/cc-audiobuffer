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

