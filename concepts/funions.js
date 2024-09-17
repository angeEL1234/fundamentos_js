//Sin parametros y sin retorno
function sayHello(){
    console.log("Hello");
}

sayHello();

//Con paremetors parametros y con retorno
function sayHello(name){
    console.log("Hello" + name);
}

sayHello("Juan");

//Con parametros y con retorno
function sum(num1, num2){
    return num1 + num2;
}
const resul = sum(5, 7);
console.log(resul);

//Con parametroa opcionales
function multiply(num1, num2=1){
    return num1 *num2;
}
console.log(multiply(5));
console.log(multiply(5, 3));

//Funciones anónimas
setTimeout(function(){
console.log("Hola Mundo")
},1000);

const duplicate =function(num){
    return num *2;
}
console.log(duplicate(2));

// Arrow functions
// () => ()

const sayHello2 = () => console.log("Hello");
sayHello2();

const sayHelloTo2 = name => console.log("Hello" + name);
sayHelloTo2("Peter");

const sum2 = (sum1, sum2) => sum1 + sum2;
const result2 = sum2(5, 7);

setTimeout(() => console.log("Hola mundo"), 1000)







