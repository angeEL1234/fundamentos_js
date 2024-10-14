const tareasDiv = document.querySelector('.tareas');
const myForm = document.querySelector('#form');
const inputTarea = document.querySelector('#inputtarea');

let arrayTareas = [];


const addTarea = () => {
    const tarea = inputTarea.value;
    arrayTareas.push({
        tarea: tarea,
        estado: 'red',
        id: Math.floor(Math.random() * 1000)
    });
    localStorage.setItem('tareas', JSON.stringify(arrayTareas));
    //Crear objetos insertarlo en div
    tareasDiv.appendChild(creaObjeto(arrayTareas[arrayTareas.length - 1]));
    inputTarea.value = '';
}

const creaDivs = () => {
    tareasDiv.innerHTML = '';
    arrayTareas.forEach(tarea => {
        tareasDiv.appendChild(creaObjeto(tarea));
    })
}

const eliminaObjeto = e => {
    const button = e.target;
    const papa = button.parentElement;
    const id = papa.getAttribute('data-id');
    arrayTareas = arrayTareas.filter(t => t.id !== Number(id));
    localStorage.setItem('tarea', JSON.stringify(arrayTareas));
    papa.remove();
}
const changeColor = e => {
    const myDiv = e.target;
    const id = myDiv.getAttribute('data-id');
    const idTarea = arrayTareas.findIndex(t => t.id === Number(id))
    if(myDiv.classList.contains('red')){
        myDiv.classList.remove('red');
        myDiv.classList.add('yellow');
        arrayTareas[idTarea].estado = 'yellow';
    } else if(myDiv.classList.contains('yellow')){
        myDiv.classList.remove('yellow');
        myDiv.classList.add('green');
        arrayTareas[idTarea].estado = 'green';
    }
    localStorage.setItem('tareas', JSON.stringify(arrayTareas)); 
}
const creaObjeto = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = tarea.tarea;
    p.classList.add('task-text'); 
    const button = document.createElement('button');
    button.innerText = 'Eliminar';
    button.addEventListener('click', eliminaObjeto);
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert');
    div.classList.add(tarea.estado);
    div.setAttribute('data-id', tarea.id);
    div.addEventListener('click', changeColor);
    return div;
}

arrayTareas = localStorage.getItem('tareas')
            ? JSON.parse(localStorage.getItem('tareas'))
            : [];
        creaDivs();


myForm.addEventListener('submit', e =>{
    e.preventDefault();
    addTarea();
});