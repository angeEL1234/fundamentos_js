//IN RETORNO SIN PARAMETROS
function sayHello(){
    console.log("Hello amigo");
}

sayHello();

//IN RETORNO SIN PARAMETROS
function sayHello(name){
    console.log("Hello" + name);
}
sayHello("Angel");

//IN RETORNO SIN PARAMETROS
function sum(num1 , num2){
    return num1 + num2;
}
const result = sum(5,7);
console.log(result);

//IN RETORNO SIN PARAMETROS
function multiply(num1,num2 = 1){
    return num1 * num2;
}
console.log(multiply(5));
console.log(multiply(5, 3));

//SIN RETORNO SIN PARAMETROS
setTimeout(function (){
    console.log("HOLA MUNDO");
}, 1000);

const duplicate = function (num){
    return num * 2;
}
console.log(duplicate(2));



const sayHello2 = () => console.log("HOLA");
sayHello2();

const sayHelloTo2 = name => console.log("HOLA " + name);
sayHelloTo2("peter");

const sum2 = (num1, num2) => num1 + num2;
const result2 = sum2(5, 7);

setTimeout(() => console.log("HOLA MUNDO"), 1000);







