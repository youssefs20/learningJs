/***********01.Functions**************************/

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

/***********02.Function Declarations vs Expressions**************************/

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

/***********03.Arrow Functions**************************/

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

/***********04.Functions Calling Other Functions**************************/

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

/************05.Arrays*****************/

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

/*****************06.Objects***********************/

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

/**************07.Loops***********************/

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

/**************08.Loops Backwards and Loops in Loops***********************/

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

/**************09.The while Loop and challenges***********************/

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
