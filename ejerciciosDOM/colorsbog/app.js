const body = document.querySelector('body');
const btnChange = document.getElementById('btnchange');

const changeColor = () => {
    const letras = '0123456789abcdef';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }

    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor);
