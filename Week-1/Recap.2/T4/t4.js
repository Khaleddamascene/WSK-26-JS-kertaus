/*
Create a function called sortArray that accepts an array of numbers as a parameter and returns a new array with 
the numbers sorted in ascending order.

No need to prompt for the numbers. Use a hard coded array. Use console.log to print the original array and the sorted array.
2p
*/

'use strict';

function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

const originalNumbers = [5, 2, 9, 1, 7, 1];

// print original array
console.log('Original Array: ', originalNumbers);

// Get sorted array
const sortedNumbers = sortArray(originalNumbers);

// Print sorted array
console.log('Sorted Array', sortedNumbers);

const resultEl = document.getElementById('result');

resultEl.innerHTML =
  'Original Array: ' +
  originalNumbers.join(', ') +
  '<br>' +
  'Sorted Numbers: ' +
  sortedNumbers.join(', ');
