const string = 'developer';

//challenge (Capitalize the first word in developer)
const result = string.charAt(0).toUpperCase() + string.substring(1);

//solution two
const resultTwo = string[0].toUpperCase() + string.substring(1);

//Solution Three
const resultThree = `${string[0].toUpperCase()}${string.substring(1)}`;

//solution four
//slice is similar to substring but we can start from negative indexes
const resultFour = `${string[0].toUpperCase()}${string.slice(1)}`
const resultFive = `${string[0].toUpperCase()}${string.slice(-8)}`


console.log(result);
console.log(resultTwo);
console.log(resultThree);
console.log(resultFour);
console.log(resultFive);
