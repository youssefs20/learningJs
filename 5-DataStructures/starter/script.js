'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/******33.Destructing arrays**************/

/*  

//declarign an array
const arr = [2, 3, 4];
//without destructing
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructing the array using the destructing feature
const [x, y, z] = arr;

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

//destructing the destructed array
const [f, , g, l] = nested;
console.log(i, j, k);
//2,5,6
*/

/*****34. destructing objects*************/
/* const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

const {
  fri: { open, close },
} = openingHours;
console.log(open); */

/*********35.spread operator*************/

const arr = [7, 8, 9];
const newarr = [2, 3, arr];
console.log(newarr); //[2,3,[7,8,9]]

const str = 'youssef';
console.log(...str);
