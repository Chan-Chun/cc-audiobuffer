window.onload = function () {
  let shift = CCAudioBuffer([
    new Audio('../uploads/1')
  ]);
  shift.pushBuffer('../uploads/2')
  setTimeout(()=>{shift.pushBuffer('../uploads/3')},10000)
}
