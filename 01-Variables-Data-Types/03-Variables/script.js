//Variables are containers for Data
//There are various types of Data Types

//Ways to declare Variables
//var, let, const


//let and const were introduced because of scope

//Outside and If Statement is function Scope
//code outside of a method is global scope


let firstName='Caleb';
let lastName='Mbugua';

// console.log(firstName,lastName,ageOne,ageTwo);


//for let, we must initialize a varibale before using it

let age = 30;
let ageOne =30;

//Var fails silently with undefined, if it is called before
//it is initialized
var ageTwo = 30;

console.log(age);

//Naming Conventions
//-Variable Names can be Only Letters,Numbers,Underscores and Dollar Signs
// -Cannot start with a Number

let name='caleb'


//Variable Naming Conventions
//firstName = camelCase;
//first_name = underScore;
//FirstName = Pascal Case (Mostly Classes & Components)
//firstname = lowercase (Handy when your have just one WORD)

//Uses of Let

//Re-assign variables
//A varibale that keeps being reassignes is a perfect use case for let

age = 31;

console.log(age);


//Declare a variable but not assign a Value
let score;
score = 1;
console.log(score);

if(true){
    score = score + 1
}

console.log(score);


//USING CONST
const x  = 100;

//A constant cannot be direcly reassigned like this
// x = 200;

//You cannot also declare a const and not initialize it
// const score1;


//When i name my array with const,what i cannot do 
//is ressign it direcly

//However i can user various array methods

const arr = [1,2,3,4,5]
arr.push(6)
console.log(arr);


const person = {
name:"Caleb"
}

person.name ="Mbugua"

console.log(person);
