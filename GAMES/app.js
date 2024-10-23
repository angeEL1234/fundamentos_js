const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let snake = [
    { x: 2, y: 1, show() { ctx.font = '24px serif'; ctx.fillText('🚂', this.x * 20, this.y * 20); } },
    { x: 1, y: 1, show() { ctx.font = '24px serif'; ctx.fillText('🚋', this.x * 20, this.y * 20); } },
    { x: 0, y: 1, show() { ctx.font = '24px serif'; ctx.fillText('🚋', this.x * 20, this.y * 20); } }
];

const food = {
    x: 0,
    y: 0,
    show() {
        ctx.font = '24px serif';
        ctx.fillText('⛽', this.x * 20, this.y * 20);
    },
    fadein() {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19 + 1);
    }
};

let x = 2;
let y = 1;
let direction = 1;
let score = 0;

function eat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.fadein();
        snake.push({ ...snake[snake.length - 1] });
        score++;
    }
}

function nextMove(x, y) {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
    snake[0].x = x;
    snake[0].y = y;
}

function checkCollision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    snake = [
        { x: 2, y: 1, show() { ctx.font = '24px serif'; ctx.fillText('🚂', this.x * 20, this.y * 20); } },
        { x: 1, y: 1, show() { ctx.font = '24px serif'; ctx.fillText('🚋', this.x * 20, this.y * 20); } },
        { x: 0, y: 1, show() { ctx.font = '24px serif'; ctx.fillText('🚋', this.x * 20, this.y * 20); } }
    ];
    x = 2;
    y = 1;
    direction = 1;
    score = 0;
    food.fadein(); // Reubica la comida
}

food.fadein(); 

setInterval(() => {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    nextMove(x, y);
    snake.forEach(s => s.show());
    food.show();
    eat();

    // Muestra la puntuación
    ctx.fillStyle = 'white';
    ctx.font = '20px serif';
    ctx.fillText(`Puntuación: ${score}`, 10, 20);

    if (checkCollision()) {
        resetGame();
    }

    if (direction === 1) x++; // Derecha
    else if (direction === 2) y++; // Abajo
    else if (direction === 3) x--; // Izquierda
    else y--; // Arriba

    if (x > 29) x = 0;
    else if (x < 0) x = 29;
    if (y > 20) y = 1;
    else if (y < 1) y = 20;
}, 200);

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
