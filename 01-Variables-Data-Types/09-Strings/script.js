//Strings are primitives, but when we call a method from a string,
//JavaScript puts a wrapper around the string to make it an Object

//We can therfore use methods on Strings

let x;

const name = 'Caleb';
const age = 38;

//Concatenation

x = 'Hello, my name is' + name + 'and I am ' + age + ' years old';

//Template Literals
//${value}-->Can handle any expression
x = `Hello, my name is ${name} and I am ${age} years old`;

//String Properties and Methods

//Length is a propery,this we do not add the function
//Properties are more like attributes

// (When we call a sting with a method or property,a wrapper is added around the string )
// const s = new String('Hello World');
const s = 'Hello World';

// x = typeof s;

// //Acess Value by index
// x = s[0];

// //getting all the methods i can call in a string
// x = s.__proto__;

x = s.toUpperCase();
// x = s.toLowerCase;
// x = s.charAt(3);
// x = s.indexOf('H');
// x = s.indexOf('l');
// x = s.substring(1, 5);
// //Will get all strings from the 7 index, going forward
// x = s.substring(7);

// x = s.slice(0, 5);

// //We can get a string starting from the end of the String
// x = s.slice(-3);
// x = s.slice(-11);

//removes the white Space
// x = s.trim(-11);
x = s.trim();
//Replace
x = s.replace('World', 'Caleb');

x = s.includes('Hello');

//Getting the value of the string (True primitive)
x = s.valueOf();

//Split string by space
x = s.split(' ');

//Split string by  Every character
x = s.split('');
console.log(x);
