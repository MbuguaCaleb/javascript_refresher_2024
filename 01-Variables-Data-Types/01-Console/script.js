//logging to the console

//we do logging via the console Object
//console Object has got a lot of methods we can call

console.log('Caleb goes back to JavaScript');
console.log(100);
console.log('Hello World');

//can also log more than one data Type
console.log(20, 'Hello', 'Caleb');

//We most of the time Log Variables or results to functions

const x = 100;

console.log(x);
console.log(x);

//Console Logging Errors
console.error('Alert');

console.warn('Warning');

//Takes in an Object
console.table({ name: 'Caleb', email: 'mbuguacaleb30@gmail.com' });

//Can help me group out How i am Logging
//If i have many related things
console.group('Simple');
console.log(x);
console.error('Warning');
console.log('wooow');
console.groupEnd();

//Adding CSS Styles to console logs
const styles = 'padding:10px; background-color:white;color:green';

console.log('%cHello Caleb', styles);
