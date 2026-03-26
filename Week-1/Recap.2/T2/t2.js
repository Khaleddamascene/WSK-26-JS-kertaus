/*
Write a JavaScript program that focuses on various array operations 
using the push(), includes(), pop(), and numerical sorting functions. 
Your program should include the following requirements:

Create an empty array called numbers.  1

Prompt the user to enter five numbers, one by one, 2
and add each entered number to the numbers array using the push() method. 3

Display the contents of the numbers array on the HTML document or in the console. 4

Prompt the user to enter a number and check if the entered number is included 
in the numbers array using the includes() method.

Display a message indicating whether the entered number is found or not found in the numbers array.

Remove the last number from the numbers array using the pop() method.

Display the updated numbers array on the HTML document or in the console.

Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.

Display the sorted numbers array on the HTML document or in the console.

Example Output:

Enter Number 1: 10
Enter Number 2: 5
Enter Number 3: 7
Enter Number 4: 3
Enter Number 5: 9

Numbers: [10, 5, 7, 3, 9]

Enter a Number to Search: 7
Number 7 is found in the array.

Updated Numbers: [10, 5, 7, 3]

Sorted Numbers: [3, 5, 7, 10]
3p
*/

let numbers = [];

for (let i = 1; i <= 5; i++) {
  let input = prompt(`Enter Number ${i}:`);
  let num = parseFloat(input);

  if (!Number.isNaN(num)) {
    numbers.push(num);
  } else {
    alert('Invalid input. Please enter a valid number.');
    i--;
  }
}

// Display the array
document.getElementById('numbers').textContent =
  'Numbers: [' + numbers.join(', ') + ']';

// Prompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.
//
// Check if number to search
let searchInput = prompt('Enter a Number to Search:');
let searchNumber = parseFloat(searchInput);

if (numbers.includes(searchNumber)) {
  //Display a message indicating whether the entered number is found or not found in the numbers array.
  document.getElementById('searchResult').textContent =
    `Number ${searchNumber} is found in the array.`;
} else {
  document.getElementById('searchResult').textContent =
    `Number ${searchNumber} is NOT found in the array.`;
}

//Remove the last number from the numbers array using the pop() method.
numbers.pop();

// display updated array
document.getElementById('updated').textContent =
  'Updated Numbers: [' + numbers.join(', ') + ']';

//Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.
numbers.sort((a, b) => a - b);

// display sorted array
document.getElementById('sorted').textContent =
  'Sorted Numbers: [' + numbers.join(', ') + ']';
