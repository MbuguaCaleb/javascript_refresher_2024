//Data in programming Language is associated with a type

//Two main Categories
//Primitive Data Types and Reference Data Types

// (a)String-->Sequence of characters.Must be in quotes or backticks
// (b)Number-->Integers as well as floating point numbers (In Javascript,
// Integers and Decimal types are grouped into a common Category/Datatype

// (c)Boolean - Logical intentity/ true or false
// (d)Null-Intentional absence of any object value (Purposeful)
// (e)undefined - A variable that has not yet been defined or assigned.
//  null is purposeful but undefined is not purposeful
//(f)Symbol--Built in Object whose constrctor returns a Unique Symbol
//(g)BigInt--Numbers that are greater than the Number can Handle

// Reference Types (Objects)

/*
Reference types or objects are a non-primitive value and when assigned
to a variable, the variable is given a reference to that value

Examples include:Object Literals, Arrays and functions are all reference Types


//Static Types Vs Dynamic Types
(a)JavaScript is a dynamically typed language.This means we do not explicitly
define types for our variables.Many other languages are statically-typed
example:Java, C & C++

TypeScript is a superset of JavaScript which allows static-typing.This
can make your code more verbose and less prone to errors.

*/

//String
const firstName = 'sara';

//Number
const age = 30;
const temp = 98.9;

//Boolean
const hasKids = true;

//Null (intentional empty value)
const aptNumber = null;

//Undefined
// let score;
const score = undefined;

//Symbol
const id = Symbol('id');

//BigInt (Has an n at the end)
const n = 9000000000000000111111111n;

//Reference Types

//Arrays
const numbers = [1, 2, 3, 4];

//Objects
const person = { name: 'Caleb' };

//Functions

 function sayHello() {
  console.log('Hello');
}


const output = sayHello;

console.log(output, typeof output);
