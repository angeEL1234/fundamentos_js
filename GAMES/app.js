const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const snake =  [{
    x: 2,
    y: 1,
    show: function() {
        ctx.font = '24px serif';
        ctx.fillText('🚂', this.x * 20, this.y * 20);
    }
},
{
    x: 1,
    y: 1,
    show: function() {
        ctx.font = '24px serif';
        ctx.fillText('🚋', this.x * 20, this.y * 20);
    }
},
{
    x: 0,
    y: 1,
    show: function() {
        ctx.font = '24px serif';
        ctx.fillText('🚋', this.x * 20, this.y * 20);
    }
}
]

const food = {
    x: 0,
    y: 0,
    show: function() {
        ctx.font = '24px serif';
        ctx.fillText('⛽', this.x * 20, this.y * 20);
    },
    fadein: function() {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19 + 1);
    }
};

let x = 2;
let y = 1;
let direction = 1;

function eat() {
    if (snake[0].x === food.x
        && snake[0].y === food.y){
            food.fadein();
            snake.push({...snake[1]});
        }
}

function nextMovie(x, y){
    for(let i = snake.length - 1; i > 0; i--){
        snake[i].x = snake[i-1].x;
        snake[i].y = snake[i-1].y;
    }
    snake[0].x=x;
    snake[0].y=y;

}

food.fadein(); // Inicializar la comida en una posición aleatoria.
setInterval(() => {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    nextMovie(x, y);
    snake.forEach(s => s.show());
    food.show();
    eat();
    if (direction === 1) x++; // Derecha
    else if (direction === 2) y++; // Abajo
    else if (direction === 3) x--; // Izquierda
    else y--; // Arriba

    // Si la serpiente sale del área, vuelve al otro lado
    if (x > 29) x = 0;
    else if (x < 0) x = 29;
    if (y > 20) y = 1;
    else if (y < 1) y = 20;
}, 200);

// Evento para cambiar la dirección de la serpiente
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && direction !== 3) {
        direction = 1; // Derecha
    } else if (e.key === 'ArrowDown' && direction !== 4) {
        direction = 2; // Abajo
    } else if (e.key === 'ArrowLeft' && direction !== 1) {
        direction = 3; // Izquierda
    } else if (e.key === 'ArrowUp' && direction !== 2) {
        direction = 4; // Arriba
    }
});