/*
Write a program that prompts the user to enter a positive integer and calculates 
the sum of all the natural numbers up to and including that integer using a for loop. 
The program should display the sum on the HTML document.
Natural numbers are positive integers used for counting and representing quantities. 
Let's consider the example of the number 5. When the user enters 5, 
the program will calculate the sum of all the natural numbers up to and including 5. In this case, 
the natural numbers are 1, 2, 3, 4, and 5. The program will 
use a for loop to iterate through each of these numbers and add them together. Finally, 
the program will display the sum, which in this case would be 15, on the HTML document.
3p
*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let input = parseInt(prompt('Enter a positive integer:'));
  let sum = 0;

  if (input > 0) {
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    alert(`The sum of interers from 1 to ${input} is: ${sum}`);
    document.getElementById('#result').textContent =
      `The sum of integers from 1 to ${input} is: ${sum}`;
  } else {
    alert('Please enter a positive integer!');
    document.getElementById('#result').textContent =
      'Please enter a positive integer!';
  }
});
