//Hi! I'm Meri and I'm from Tequexquitla

const name='Angel';
const city='Apizaco';

console.log("Hi! I'm " + name +  "\n and I\'m from " + city);
console.log('Hi! I\'m ' + name + '\n and I\'m from ' + city);
//Template literal
console.log(`Hi! I'm ${ name }
    and I'm form ${city}`);

const message = `Hi! I'm  ${name} I'm from ' ${city}`;
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi!'));
console.log(message.indexOf('Angel'));
console.log(message.split(' '));
console.log(" (XD) ".repeat(5))