/**********starter************/

/* 
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('youssef');
let firstName = 'Youssef';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

//let new = test //reserved keyword
//let 3years = 3 //cannot start with number
//let jon&doe = 'JD' //cannot contain special characters except $ and _
//let function = 27 //reserved keyword
let $function = 27 //valid but not recommended
let Pi = 3.14 //valid but not recommended
let KALI = 'Linux' //valid but not recommended

//assignment
let country = 'Egypt';
let continent = 'Africa';
let population = 110;

console.log(country);
console.log(continent);
console.log(population); 
*/

/**********02.Data Types************/

/* 
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Youssef');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //bug 

// assignment
let country = 'Egypt';
let continent = 'Africa';
let population = 110;


let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); 
*/

/**********03.Let, Const and Var************/

/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//  //TypeError because const variable cannot be reassigned
//const job;
//  //SyntaxError because we cannot declare an empty const variable 
*/


/************05.operator precedence*****************/

/* 
console.log(20 - 10 - 5);
//output not the same as 
console.log(5 - 10 - 20);
// because of operator precedence

const marksWeights = 78, marksHeight = 1.69;
const johnWeights = 92, johnHeight = 1.95;

const marksBMI = marksWeights / marksHeight ** 2;
const johnBMI = johnWeights / johnHeight ** 2;
console.log(marksBMI, johnBMI);
console.log(marksBMI > johnBMI);
if (marksWeights > johnWeights) console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})`);
else console.log(`John's BMI (${johnBMI}) is higher than Mark's (${marksBMI})`);
*/


/************06.Strings and Template Literals*****************/


/* 
const fName = "Joe";
const job = "teacher";
const birthYear = "2002";
const joeNew = `im ${fName}, im a ${job}, and im born on ${birthYear}`;
console.log(joeNew);
console.log(`this is a string`);
console.log("this is also a string :)");

console.log("this is \n a string \n and this is \n is what"); 
*/

/************07.If/Else Statements*****************/


/*
const age = 10;
if (age >= 18) {
    console.log(`Sarah can start driving licence`);
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sorry,Sarah is young so she can wait another ${yearsLeft} years`);
}


const birthYear = 2002;
let century;
if (birthYear <= 2000) {
    century = 20;
    //console.log("")
}
else {
    century = 21;
}
console.log(`you are born in ${century}`);

*/

/************08.Type Conversion and Coercion*****************/


/*
const inputYear = "1991";
console.log(inputYear + 18);
//output: 19918

console.log(Number(inputYear) + 18);
console.log(Number(inputYear), inputYear);

console.log("i'm" + 23 + "years old");

console.log("23" - "10" - 3);
//output: 10

let n = "1" + 1;
n = n-1;
console.log(n);
//output: 10
*/

/************09.Truthy and Falsy Values*****************/


/*
const job = 0 
if(money){
    console.log("dont spend it all");
}
else{
    console.log("you should get a job");
}
//output: you should get a job
// 0 is a falsy

let height;
if(height){
    console.log("YaY, height is defined");
}
else{
    console.log("height is undefined");
}
//output: height is undefined 
// => undefined is a falsy
*/


/************10.Equality Operators: == vs. === *****************/

/*
console.log(18 == "18");

console.log(18 === "18");

//const age = prompt("what's your favourite number?");
//will not work in VScode terminal but will work in browser console
*/

/***************11.Logical operators*************************************/

/* 
const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 106) / 3;
console.log(dolphins, koalas);

if (dolphins > koalas && dolphins >= 100)
    console.log("dolphins win the trophy");
else if (koalas > dolphins && koalas >= 100)
    console.log("koalas win the trophy");
else if (dolphins === koalas || dolphins <= 100 && koalas <= 100)
    console.log("Draw"); 
*/

/***************12.The switch Statement*****************************/

/*
const day = "kosm el sisi";
switch (day) {
    case "monday":
        console.log("done");
        break
    case "tuesday":
        console.log("three");
        break
    case "wednesday":
        console.log("enid");
        break
    case "thursday":
        console.log("five");
        break
    case "friday":
        console.log("weekend");
        break
    case "saturday":
        console.log("weekend2");
        break
    case "sunday":
        console.log("weekend3");
        break
    default:
        console.log("not a valid day");
}
*/

/***************13.Ternary Operator*****************************/

/*
//const age = 23;
// age >= 18 ? console.log("i'd like to drink wine") :
//     console.log("i'd like to drink water");
//console.log(`i'd like to drink ${age >= 18 ? "wine" : "water"}`);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

/***********14.Functions**************************/

/* 
function logger() {
    console.log("My name is Joe");
}

logger();

function fruit(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

fruit(10, 10);
const test = fruit(5, 0);
console.log(test);
*/

/***********15.Function Declarations vs Expressions**************************/

/* 
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age1, age2);
*/

/***********16.Arrow Functions**************************/

/*
const calc = test => 2025 - test;

console.log(calc(2002));

const yearsUntil = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntil(2002, "youssef"));
*/

/***********17.Functions Calling Other Functions**************************/

/*
function cutFruit(loot) {
    return loot * 4;
}


function fruit(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);


    console.log(apples, oranges);
    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

//fruit(10, 10);
//const test = fruit(5, 0);
console.log(fruit(10, 10));
*/

/************18.Arrays*****************/

/*
const friends = ["jode", "joe", "joal"];

// const fName = "youssef"
// const joe = [fName, 23, 2037 - 2002, friends];
// console.log(joe);

friends.push("jay");
console.log(friends);

const popped = friends.pop();
console.log(popped);

friends.pop();
console.log(friends);

friends.unshift("john");
console.log(friends);

friends.shift();
console.log(friends);
*/

/*****************19.Objects***********************/

/*
const joeObj = {
    fName: "joe",
    lName: "sameh",
    birthYeah: 2002,
    job: "teacher",
    hadDriver: true,


    calcAge: function () {
        return 2025 - this.birthYeah;
    },

    lol: function () {
        console.log(joeObj.fName, "is a ", joeObj.job, " and he is ", this.calcAge(), " years old");
    }
}
//console.log(joeObj);
console.log(joeObj.fName);
console.log(joeObj["lName"]);

console.log(joeObj.calcAge());
console.log(joeObj.lol());

//////////////Challenge////////////////////////////
const markObj = {
    fName: "mark miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const johnObj = {
    fName: "john smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(markObj.calcBMI());
console.log(johnObj.calcBMI());

if (markObj.calcBMI() > johnObj.calcBMI()) {
    console.log(`${markObj.fName}'s BMI (${markObj.calcBMI()}) is higher than ${johnObj.fName}'s BMI (${johnObj.calcBMI()})!`);
}
else if (johnObj.calcBMI() > markObj.calcBMI()) {
    console.log(`${johnObj.fName}'s BMI (${johnObj.calcBMI()}) is higher than ${markObj.fName}'s BMI (${markObj.calcBMI()})!`);
}
*/

/**************20.Loops***********************/

/*  
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}

const joeArr = [
    "joe",
    "sameh",
    2037 - 2002,
    19343,
    14134,
    "teacher",
    ["seif", "yahia", "hafez"],

]
// continue statement
console.log("-----CONTINUE STATEMENT-----");
for (let i = 0; i < joeArr.length; i++) {
    if (typeof joeArr[i] !== "string") continue;
    console.log(joeArr[i]);
}

// break statement
console.log("-----BREAK STATEMENT-----");
for (let i = 0; i < joeArr[i].length; i++) {
    if (typeof joeArr[i] === "number")
        break;

    console.log(joeArr[i]);
}

const years = [2002, 2003, 2004, 2005];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
*/

/**************21.Loops Backwards and Loops in Loops***********************/

/*  

const joeArr = [
    "joe",
    "sameh",
    2037 - 2002,
    19343,
    14134,
    "teacher",
    ["seif", "yahia", "hafez"],

]

for (let i = joeArr.length - 1; i >= 0; i--) {
    console.log(i, "\n", joeArr[i]);
}
*/

/**************22.The while Loop and challenges***********************/

/* 
let rep = 1;
while (rep <= 5) {
    console.log(`hello from the gym ${rep}`);
    rep++;
}
    

const myCountry = {
    country: "Egypt",
    capital: "cairo",
    language: "aracbic",
    population: "100 million",
    neighbours: ["sudan", "libya", "palestine"],


    describe: function () {
        console.log(`${this.country} has ${this.population} people, has ${this.neighbours.length}`)
    },

    checkIsIsland: function () {
        this.isIsalnd = this.neighbours.length === 0 ? true : false;
    },
}
//console.log(myCountry);
console.log(myCountry.describe())
myCountry.checkIsIsland();
console.log(myCountry.isIsalnd);

//////////calc//////////////////
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

function calcAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calcAvg(totals));
console.log(calcAvg(tips));

*/

/************************************/

// ! this alert
// * this highlighted
// ? this is question
// TODO this is a to do
//FIXME 
/* 
    ! this alert
    * this highlighted
    ? this is question
    TODO this is a to do
    FIXME
 */
//#region 

//#endregion
