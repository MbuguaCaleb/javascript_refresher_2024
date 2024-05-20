let x;

const num = new Number(5);

x = num.toString();
x = num.toString().length;

//Add two decimal points to a Number
x = num.toFixed(2);

//Makes a decimal number to be exactly the same as specified
x = num.toPrecision(2);
x = num.toPrecision(3);
x = num.toExponential(2);

//Representing a digit based on your Locale
x = num.toLocaleString('ar-EG');
x = num.toLocaleString('en-US');

//Logging prototypes is very important
//It helps me know all the methods i can bel able to call

x = num.valueOf();

//Properties on the Number Object itself

x = Number.MAX_VALUE;
x = Number.MIN_VALUE

console.log(x);
console.log(new Number(5));
