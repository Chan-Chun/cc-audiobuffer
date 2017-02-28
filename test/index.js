window.onload = function () {
  let audioBuffer = new CCAudioBuffer([
    new Audio('/uploads/1'),
    new Audio('/uploads/2')
  ]);
  audioBuffer.play()
  audioBuffer.pushBuffer('/uploads/3')
}