const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 300;
let y = 200;
let width = 6;
let height = 4;
let crece = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400); // Descomentar si quieres limpiar el lienzo en cada frame
    ctx.fillStyle = `hsl(${width}, 50%, 50%)`; // Corregido el uso de hsl y las comillas
    ctx.fillRect(x, y, width, height);

    if (crece) {
        width += 6;
        x -= 3;
        height += 4;
        y -= 2;
    } else {
        width -= 6;
        x += 3;
        height -= 4;
        y += 2;
    }

    crece = x > 300 ? !crece : crece;
    crece = x < 1 ? !crece : crece;
}, 30);
