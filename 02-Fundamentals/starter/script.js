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

/*****************06.Intro to Objects***********************/

const joeObj = {
    fName: "joe",
    lName: "sameh",
    age: 2037 - 2002,
    job: "teacher"
}
console.log(joeObj);
console.log(joeObj.fName);
console.log(joeObj["lName"]);