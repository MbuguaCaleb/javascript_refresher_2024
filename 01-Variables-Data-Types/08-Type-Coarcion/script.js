//Happens Implicity when we apply operands to values that have different types

let x;

x = 5 + '5';

x = 5 + Number('5');

x = 5 * '5';

x = 5 + null;

x = Number(null);
x = Number(true);
x = Number(false);

x = 5 + true;
x = 5 + false;

// (When we add to something that does not exist really, we get None)
x = 5 + undefined;


console.log(x, typeof x);
