document.addEventListener('DOMContentLoaded', () => {
    const didUser = document.querySelector('#didUser');  // Apuntar al div del usuario
    const divMaq = document.querySelector('#divMaq');    // Apuntar al div de la máquina
    const message = document.querySelector('#message');  // Apuntar al div del mensaje

    const play = (choiceUser) => {
        const aleatoriamente = Math.floor(Math.random() * 3);

        // Determinar la elección de la máquina
        let choiceMaq;
        if (aleatoriamente === 0) {
            choiceMaq = 'piedra';
        } else if (aleatoriamente === 1) {
            choiceMaq = 'papel';
        } else {
            choiceMaq = 'tijera';
        }

        // Mostrar las elecciones
        didUser.textContent = `Usuario: ${choiceUser}`;
        divMaq.textContent = `Máquina: ${choiceMaq}`;

        // Determinar el ganador
        let resultado;
        if (choiceUser === choiceMaq) {
            resultado = 'Empate';
        } else if (
            (choiceUser === 'piedra' && choiceMaq === 'tijera') ||
            (choiceUser === 'papel' && choiceMaq === 'piedra') ||
            (choiceUser === 'tijera' && choiceMaq === 'papel')
        ) {
            resultado = '¡Ganaste!';
        } else {
            resultado = 'Perdiste';
        }

        // Mostrar el resultado
        message.textContent = resultado;
    };

    // Añadir eventos a los botones
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.getAttribute('data-choice');
            play(userChoice);
        });
    });
});
