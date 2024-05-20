let amount = 'hello';
//Change string to Number
//string to integer
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

//Change Number to String
// amount = amount.toString();
// amount = String(amount);

//Change String to Decimal
amount = parseFloat(amount);

//Convert Number to Boolean
//1 IS A Truthy value, if we convert to boolean it results to a true
//0 IS A false value
//Any other number is true
// amount = Boolean(amount);

//When i convert a non number string to a number example hello
//Results to NotANumber(NAN)
amount = parseInt(amount);

//Operatiosnt that return NAN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
console.log(amount, typeof amount);
