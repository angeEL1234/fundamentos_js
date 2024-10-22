const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x= 300;
let y= 200;
let radio = 1;
let crece = true;

setInterval(() => {
ctx.clearRect(0, 0, 600, 400);
ctx.fillStyle = 'hsl(280, 50%, 50%)';
ctx.beginPath();
ctx.arc(x, y, radio, 0, Math.PI * 2);
ctx.fill();
if (crece)radio++;
else radio--;
crece = radio > 100? !crece: crece;
crece = radio < 1? !crece: crece;

}, 100);