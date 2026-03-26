/*
Enhance the existing sortArray function to include an additional parameter that defines whether 
the array should be sorted in ascending or descending order.

Create a function called sortArray that takes two parameters: numbers (an array of numbers) and order 
(a string indicating the sorting order).

If the order parameter is set to "asc" (ascending), the function should sort the numbers array in ascending order.

If the order parameter is set to "desc" (descending), the function should sort the numbers array in descending order.

Return a new array with the sorted numbers.

Test the function by passing different arrays and sorting orders.

Example Usage:

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, "asc")); // Output: [1, 2, 5, 8, 9]
console.log(sortArray(numbers, "desc")); // Output: [9, 8, 5, 2, 1]
3p
*/
/*
'use strict';

function sortArray(numbers, order) {
  const sorted = numbers.slice();

  if (order === 'asc') {
    return sorted.sort((a, b) => a - b);
  } else if (order === 'desc') {
    return sorted.sort((a, b) => a - b);
  }
  return sorted;
}

const numbers = [5, 2, 8, 1, 9];
console.log('Original array:', numbers);
console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));

// Output: [1, 2, 5, 8, 9]
// Output: [9, 8, 5, 2, 1]*/

'use strict';

function sortArray(numbers, order) {
  const copy = numbers.slice();

  if (order === 'desc') {
    return copy.sort((a, b) => b - a);
  }

  return copy.sort((a, b) => a - b);
}

const originalNumbers = [5, 2, 9, 1, 7, 1];

// Sort arrays
const ascendingNumbers = sortArray(originalNumbers, 'asc');
const descendingNumbers = sortArray(originalNumbers, 'desc');

// Log to console
console.log('Original Array:', originalNumbers);
console.log('Ascending:', ascendingNumbers);
console.log('Descending:', descendingNumbers);

// Display in HTML
const resultEl = document.getElementById('result');

resultEl.innerHTML =
  'Original Array: ' +
  originalNumbers.join(', ') +
  '<br><br>' +
  'Ascending Order: ' +
  ascendingNumbers.join(', ') +
  '<br>' +
  'Descending Order: ' +
  descendingNumbers.join(', ');
