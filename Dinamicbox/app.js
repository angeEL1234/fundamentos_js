const dynamicBox = document.getElementById('dynamicBox');
        const inputHeight = document.getElementById('Alto');
        const inputWidth = document.getElementById('width');
        const inputRadius = document.getElementById('Radio');
        const inputColor = document.getElementById('Color');
        const inputShadow = document.getElementById('Shadow');

let widthC = 300;
let altoC = 300;
let radioC = 50;
let colorC = 300;

const changeContainer = () => {
    container.style.width = `${widthC}px`;
    container.style.height = `${altoC}px`;
    container.style.borderRadius = `${radioC}px`;
    container.style.backgroundColor = `hsl(${colorC}, 100%, 50%)`;
}

hControl.addEventListener('input', e => {
    altoC = e.target.value;
    changeContainer();
})

wControl.addEventListener('input', e => {
    widthC = e.target.value;
    changeContainer();
})

rControl.addEventListener('input', e => {
    radioC = e.target.value;
    changeContainer();
})

kControl.addEventListener('input', e => {
    colorC = e.target.value;
    changeContainer();
})
