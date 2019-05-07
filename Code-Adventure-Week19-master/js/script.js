/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Printing Values and Types to the Page and the Console - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store DOM elements - You'll use these */

const stringElement = document.querySelector('#string-element');
const stringTypeElement = document.querySelector('#string-type');


const numberElement = document.querySelector('#number-element');
const numberTypeElement = document.querySelector('#number-type');

const booleanElement = document.querySelector('#boolean-element');
const booleanTypeElement = document.querySelector('#boolean-type');

const arrayElement = document.querySelector('#array-element');
const iterationIndexesElement = document.querySelector('#iteration-indexes-element');

const steps = document.querySelectorAll('.step');


// 1) If you haven't already, preview the index.html file in Chrome, and open the Chrome DevTools
    // If you don't know how to do any of those things, please reach out in Slack for some friendly support
    // PRO TIP: This exercise promotes getting in the habit of logging values to the console after every few lines of code. This process will save you time and debugging headaches down the road.

// 2) Create a `mysString` variable, log it to the console and print it to the screen
    // 2a) Create a variable named myString and set it equal to the string 'Treehouse'
    // 2b) Set the `innerHTML` of the `stringElement` variable above equal to the `mysString` variable
    // 2c) Use `console.log()` to log out the `mysString` variable
    // 2d) Create a variable named `myStringType` and set it equal to `typeof myString`
    // 2e) Set the `innerHTML` of the `stringTypeElement` variable above equal to the `mysStringType` variable
    // 2f) Take a moment to inspect the results on the page and especially in the console
    // NOTE: Comment out or delete log statements that you don't need any more to keep from overcrowding the console
let myString = 'Treehouse';
let myStringType = typeof myString;
document.getElementById("string-element").innerHTML = myString;
document.getElementById("string-type").innerHTML = typeof myStringType;



// 3) Create a `myNumber` variable, log it to the console and print it to the screen
    // 3a) Create a variable named myNumber and set it equal to a number between 1 and 10
    // 3b) Set the `innerHTML` of the `numberElement` variable above equal to the `myNumber` variable
    // 3c) Use `console.log()` to log out the `myNumber` variable
    // 3d) Set the `innerHTML` of the `numberTypeElement` variable above equal to `typeof myNumber`
    // 3e) Take a moment to inspect the results on the page and especially in the console
let myNumber = 3;
document.getElementById("number-element").innerHTML = myNumber;
console.log(myNumber)
let myNumberType = typeof myNumber;
document.getElementById("number-type").innerHTML = typeof myNumber;



// 4) Create `myBoolean` variable, log it to the console and print it to the screen
    // 4a) Create a variable  named myBoolean and set it equal to the keyword true
    // 4b) Set the `innerHTML` of the `booleanElement` variable above equal to the `myBoolean` variable
    // 4c) Use `console.log()` to log out the `myBoolean` variable
    // 4d) Set the `innerHTML` of the `booleanTypeElement` variable above equal to `typeof myBoolean`
    // 4e) Change the value of the `myBoolean` variable to the keyword `false` and refresh the page
    // 4f) Use `console.log()` to log out the `myBoolean` variable again to see the difference in the console
    // 4g) Take a moment to inspect the results on the page and especially in the console
let myBoolean = false;
document.getElementById("boolean-element").innerHTML = myBoolean;
console.log(myBoolean);
document.getElementById("boolean-type").innerHTML = typeof myBoolean;


// 5) Uncomment the array below, and print it the page and table.log() it to the console
    // 5a) Set the `innerHTML` of the `arrayElement` variable above equal to the `arr` variable
    // 5b) Use `console.table()` to log out the `arr` variable
    // 5c) Use a standard `for` loop to iterate over the `arr` variable
    // 5ca) Inside the loop, concatenate the iterator, i, to the `innerHTML` of the `iterationIndexesElement`, like so: `iterationIndexesElement.innerHTML += i;`
    // 5d) Take a moment to inspect the results on the page and especially in the console
const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];    
console.table(arr);
document.getElementById("array-element").innerHTML = arr;
for(let i = 0; i < arr.length; i ++){
    iterationIndexesElement.innerHTML += i;
};

// 6) Print and log out a DOM element and DOM collection
    // 6a) Use `console.log()` to log out the `steps` variable
    // 6d) Use `console.log()` to log out `steps[0]` to get a look at the first item in the collection in the `steps` variable
    // 6d) Use `console.dir()` to log out `steps[0]` to get a look at the difference between `.log` and `.dir`
    // 6e) Take a moment to inspect the results in the console
console.log(steps);
console.log(steps[0]);
console.dir(steps[0]);

// 7) Print and log an `object` and one of its `method`s
    // 7a) Create a variable named windowObject and set it equal to the `this` keyword
    // 7c) Use `console.log()` to log out the `windowObject` variable
    // 7e) Use `console.log()` to log out `windowObject.document`
    // 7g) Take a moment to inspect the results in the console
let windowObject = this;
console.log(windowObject);
console.log(windowObject.document);