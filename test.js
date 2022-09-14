function calculateAPhiSpiral(time) {
  return 0.5 * Math.log(time) + 0.5 * Math.PI;
}

function computeSpiral(times) {
  const time = times;
  const a = calculateAPhiSpiral(time);
  const b = 0.5 * Math.log(time*0.1) + 0.5 * Math.PI;
  const c = 0.5 * Math.log(time*0.3) + 0.5 * Math.PI;
  const d = 0.5 * Math.log(time*0.4) + 0.5 * Math.PI;
  const e = 0.5 * Math.log(time*0.5) + 0.5 * Math.PI

  const spiral = [
    [a,b,c,d,e],
  ];  
  return spiral;
}

let date = new Date();
let times = date.getMilliseconds();
console.log(times);
let spir = computeSpiral(times);
console.log(spir);

function drawOnCanvas(id,tweak1,tweak2) {
  const canvas = document.getElementById(`canvas${id}`);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for(let i= 0; i < canvas.width; i++) {
  ctx.moveTo(0, i*canvas.height*tweak1);
  ctx.lineTo(canvas.width*i*tweak2,0 );
  }
  ctx.stroke();
}
drawOnCanvas(1,0.01,0.01)
for(let i = 1; i < 7; i++) {
  drawOnCanvas(i,Math.random()*0.05,Math.random()*0.05)
}
