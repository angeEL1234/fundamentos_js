// High order functions
//funciones de orden superior 
//funciones que reciben como 
// parametros de otras funciones 

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculator = (a,b, callback) =>{
    const result = callback(a,b );
    console.log(result);
}

calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

const foods = ['tamales','chilaquiles','pizza',
                'posole','tacos','maruchan'];

foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.includes('a')));

const   FOODS = foods.map(food => food.toLocaleUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + '🥘');
console.log(foodsEmojis);

const sdoof = foods.map(foods => {
    const separate = foods.split('');
    const reversed = separate.reverse();
    const joined = reversed.join('');
    return joined;
    //food =>
});
console.log(sdoof);

const nums = [1,2,3,4,5,6,7,8,9,10];
const cuarter = nums.map(num => num * num);
console.log(cuarter);
const cube = nums.map(num => num * num * num);
console.log(cube);
const half = nums.map(num => num / num);
console.log(half);

function wrappedGifts(gifts){
    return gifts.map(gift =>{
        const tapa = '*'.repeat(gift.length);
        return `${ tapa }\n*${ gift }*\n${ tapa }`;
    })
}

const foods  = ['tamales', 'pizza', 'chilaquiles','pozole', 'taco', 'maruchan', 'mode de olla'];
const wrappeds = wrappedGifts(foods);
wrappeds.forEach(item => console.log(item));

const containsZ = foods.filter(food => food.includes('2'));
console.log(foods);
console.log(containsZ);

const endWiths = foods.filter(food => food.endsWith('s'));
console.log(endWiths);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Mayores = nums.filter(num => num % num % 2 !== 0);
const Menores = nums.filter(num => num % num % 2 !== 1);
const Mayore5 = nums.filter(num => num > 5 );
const Menore5 = nums.filter(num => num < 5 );

console.log(Mayores);
console.log(Menores);
console.log(Mayore5);
console.log(Menore5);


// foreache map filter


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//reduce
const sumatoria = numeros.reduce((a, b) => a + b);
const factorial = numeros.reduce((a, b) => a * b);
console.log(numeros);
console.log(sumatoria);
console.log(factorial);

// some(or) every(and)
const positivo= numeros.every(n => n > 0);
consola.log(positivo);
const negativo= numeros.every(n => n < 0);
consola.log(negativo);

const ages = [20, 21, 25, 17, 18];
const algunos_mayores = ages.some(n => n >= 18);
console.log(algunos_mayores);
const algunos_menores = ages.some(n => n < 18);
console.log(algunos_menores);