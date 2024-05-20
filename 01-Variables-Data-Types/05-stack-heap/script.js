//DataTypes

// Primtive Types-->Stored directly in the stack where it is accessed from

//string | Number | Boolean | Null |Undefined  | Symbol | BigInt

//Reference Types-->Stored in the heap and accessed by reference
//Arrays | Functions | Objects

// Stack & Heaps are areas in Memory

//Values on the stack
const name = 'Caleb';
const age = 28;

//Reference Values on the Heap are stored on the heap
const person = {
  name: 'Caleb',
  age: 28,
};

let newName = name;
newName = 'Joshua';
console.log(name, newName);

let newPerson = person;
person.name = 'Humphrey';
console.log(person, newPerson);
