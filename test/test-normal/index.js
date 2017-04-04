window.onload = function () {
  let AudioBuffer = new CCAudioBuffer([
    new Audio('../uploads/1')
  ]);
  AudioBuffer.pushBuffer('../uploads/2')
  setTimeout(()=>{AudioBuffer.pushBuffer('../uploads/3')},10000)
}
