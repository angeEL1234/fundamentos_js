// Obtener elementos del DOM
const rangeRed = document.getElementById('rangeRed');
const outputRed = document.getElementById('outputRed');
const rangeGreen = document.getElementById('rangeGreen');
const outputGreen = document.getElementById('outputGreen');
const rangeBlue = document.getElementById('rangeBlue');
const outputBlue = document.getElementById('outputBlue');
const body = document.body;

const updateColor = () => {
    const red = rangeRed.value;
    const green = rangeGreen.value;
    const blue = rangeBlue.value;

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    outputRed.textContent = `Rojo: ${red}`;
    outputGreen.textContent = `Verde: ${green}`;
    outputBlue.textContent = `Azul: ${blue}`;
}

rangeRed.addEventListener('input', updateColor);
rangeGreen.addEventListener('input', updateColor);
rangeBlue.addEventListener('input', updateColor);
