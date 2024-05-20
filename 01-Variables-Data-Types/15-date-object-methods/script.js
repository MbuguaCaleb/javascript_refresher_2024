let x;
// let d = new Date('2021/08/13');

//Very Important(Date Object)
let d = new Date();

//converting Date to String
x = d.toString();

//Geting timeStamp Value of the Data
x = d.getTime();
x = d.valueOf();

//Getting Year of the Date
x = d.getFullYear();

//The month is zero based (0-january, 1-->Feb)
x = d.getMonth();

//current Month
x = d.getMonth() + 1;

//Gate the date of the week
x = d.getDate();

//Get the Day of week
x = d.getDay();

//Get the current Hours
x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

//By Default JavaScript new Date() gives date in following format
//Mon May 20 2024 16:12:12 GMT+0300 (East Africa Time)
//d = new Date(1716209488857);

//We can format the date better having learnt the methods
//2024-05-20

//remember backticks evaluate expressions
//as ling as i am in backtick i can have more than one expression
//for each expression it must be executed independenty,but i can
//nest them in the backtick

//Remeber because month is zero indexed,i must have plus one

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

//API We can use for Dates//(In Locale sensitive Way)
//INTL DateTime Format

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

//Get Month
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

//Woow.I can invoke the locale API from the date Object
//Newer way of formatting time
x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});


console.log(x);
