window.onload = function () {
  let audioBuffer = new CCAudioBuffer([
    new Audio('./uploads/1')
  ]);
  audioBuffer.pushBuffer('./uploads/2')
  setTimeout(()=>{audioBuffer.pushBuffer('./uploads/3')},10000)
}
