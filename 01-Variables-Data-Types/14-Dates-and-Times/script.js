let d;

//Gives current Date and Time Object
d = new Date();
d = d.toString();

//Creating my OwnDate
//Month is zero indexed.
//0-->January, 1-->February
d = new Date(2021, 1, 10, 12, 32, 23);

//Passing in my date into the JavaScript Date Object
//(If i use a datw with a dash, i will have T to seperate my time)
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 05:30:00');
 
//Known issue when i begin with the date first
d = new Date('2022-07-10');

//Adviseable i start with day when i am using the - format
d = new Date('07-10-2022');

//TimeStamps
//Timestamps show the number of seconds ellapsed since 1970
d = Date.now();

//Converting Dates to TimeStamp Values
d = new Date('06-05-2024 12:56:00');
d = d.getTime();
d = d.valueOf();

//Current timestamp right now
d = new Date();
d = d.getTime();

//Creating Date Objects from timeStamp
//JavaScript time stamp by default is set to milliseconds

d = new Date(1716209488857);
d = Math.floor(Date.now() / 1000);
console.log(d);
