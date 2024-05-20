// x is a Number between 1 and 100
//y is a random Number between 1 and 50

//Remember,Declaration is not the same as the variable type in JavaScript
let x;
let y;
let sumOutput;
let differenceOutput;
let productOutput;
let quotientOutput;
let rmOutput;

x = Math.floor(Math.random() * 100 + 1);

y = Math.floor(Math.random() * 50 + 1);

//Addition

sumOutput = x + y;
differenceOutput = x - y;
productOutput = x * y;
quotientOutput = x / y;
rmOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} * ${y} = ${productOutput}`);
console.log(`${x} / ${y} = ${quotientOutput}`);
console.log(`${x} % ${y} = ${rmOutput}`);
