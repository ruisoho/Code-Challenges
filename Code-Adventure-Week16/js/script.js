/**
 * Treehouse FSJS Techdegree
 * Code Adventure - Weekend Coding Homework
 * End of the Line - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons */
const next_btn = document.querySelector('#next_btn');
const prev_btn = document.querySelector('#prev_btn');


/* Variable to store NodeList of DOM elements */
const items = document.querySelectorAll('.items');

// Helpful log statement to test function
console.log(items);

// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a variable to store the current_index - initial value set to 0



// 2. Create a function called increment - Inside the function body you'll do three things
  // 2a. Target the item at the current_index and set its innerHTML to an empty string - ''
  // 2b. Use a conditional to check if the current_index is equal to items.length - 1 
      // If current_index is equal to items.length - 1, set the current_index = 0
      // Otherwise, just add 1 to the current_index
  // 2c. Target the item at the current_index and set its innerHTML = '&#9786;' - (this is the code for a smiley face)



// 3. Using the instructions in step 2, see if you can create a decrement function 


/**
 * Event listeners for buttons - Invoke your functions in the body of the callback
 */

/* Next button listener */
next_btn.addEventListener('click', () => {

  // Invoke your increment function here


  // Helpful log statement to test function
  console.log('Next btn is working!');
});


/* Prev button listener */
prev_btn.addEventListener('click', () => {

  // Invoke your decrement function here


  // Helpful log statement to test function
  console.log('Prev btn is working!');
});