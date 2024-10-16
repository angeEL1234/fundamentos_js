const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

/**
 * fillrect(x, y, width, height)
 * strokeRect(x, y, width, height)
 * arc(x, y, radio, ini, fin, sentidohorario)
 */

//Circulo
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2, true);
ctx.fill();

//sejas
ctx.fillStyle = 'black'
ctx.fillRect(170, 180, 20, 5);
ctx.fillRect(210, 180, 20, 5);

//ojos
ctx.beginPath();
ctx.arc(180, 190, 5, 0, Math.PI * 2, true);
ctx.fill();


//ojos
ctx.beginPath();
ctx.arc(220, 190, 5, 0, Math.PI * 2, true);
ctx.fill();

//boca
ctx.beginPath();
ctx.arc(200, 209, 30, 0, Math.PI, false);
ctx.fill();

//sombrero
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.moveTo(170, 150);
ctx.lineTo(230, 150); 
ctx.lineTo(200, 100); 
ctx.closePath();
ctx.fill();
ctx.fillRect(160, 150, 80, 10);

//bola del sombrero
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(200, 100, 10, 0, Math.PI * 2, false);
ctx.fill();

//nariz
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(200, 200, 9, 0, Math.PI * 2, true);
ctx.fill();

//Cuello humano
ctx.fillStyle = 'black'
ctx.fillRect(190, 250, 20, 40);
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.fill();

//DIENTE
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(200, 208, 10, 0, Math.PI * 1, false);
ctx.fill();

//TORZO
ctx.fillStyle = 'blue'
ctx.fillRect(150, 270, 100, 150);

//ombros
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(125, 280, 25, 0, Math.PI * 2, false);
ctx.arc(275, 280, 25, 0, Math.PI * 2, false);
ctx.arc(275, 288, 25, 0, Math.PI * 2, false);
ctx.arc(125, 286, 25, 0, Math.PI * 2, false);
ctx.fill();

//pelo
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(140, 200, 10, 0, Math.PI * 2, false);
ctx.fill();
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(140, 190, 10, 0, Math.PI * 2, false);
ctx.fill();
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(144, 180, 10, 0, Math.PI * 2, false);
ctx.fill();
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(149, 170, 10, 0, Math.PI * 2, false);
ctx.fill();
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.arc(160, 160, 10, 0, Math.PI * 2, false);
ctx.fill();

//pelo2
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(260, 200, 10, 0, Math.PI * 2, false);
ctx.fill();
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(260, 190, 10, 0, Math.PI * 2, false);
ctx.fill();
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(254, 180, 10, 0, Math.PI * 2, false);
ctx.fill();
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(249, 170, 10, 0, Math.PI * 2, false);
ctx.fill();
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.arc(237, 160, 10, 0, Math.PI * 2, false);
ctx.fill();

//CUELLO
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(180, 270);
ctx.lineTo(200, 270); 
ctx.lineTo(180, 250); 
ctx.fill();
ctx.beginPath();
ctx.moveTo(220, 270);
ctx.lineTo(200, 270); 
ctx.lineTo(220, 250); 
ctx.fill();

//camiza
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 350, 10, 0, Math.PI * 2, true);
ctx.arc(200, 320, 10, 0, Math.PI * 2, true);
ctx.arc(200, 380, 10, 0, Math.PI * 2, true);
ctx.fill();

//CORBATA
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(180, 270);
ctx.lineTo(220, 270); 
ctx.lineTo(200, 320); 
ctx.fill();

//BRAZOS
ctx.fillStyle = 'black'
ctx.fillRect(300, 280, 50, 5);