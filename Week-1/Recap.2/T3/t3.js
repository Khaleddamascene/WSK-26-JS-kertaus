/*
Write a JavaScript program that prompts the user to enter a series of numbers 
one by one and extracts and displays only the even numbers from 
the entered values using the for...of loop.

Define an empty array to store the numbers entered by the user.

Use a loop (e.g., while or do...while) to prompt the user for numbers and add them 
to the array until the user decides to stop.

Use the for...of loop to iterate over the entered values stored in the array.

Inside the loop, check if the current number is even using the modulo operator %.

If the current number is even, display it on the HTML document.

After the loop completes, display a message indicating the end of the program.

Prompts:

Enter a number (or 'done' to finish): 5
Enter a number (or 'done' to finish): 12
Enter a number (or 'done' to finish): 8
Enter a number (or 'done' to finish): 3
Enter a number (or 'done' to finish): 10
Enter a number (or 'done' to finish): done
Example Output:

Even Numbers: 12, 8, 10
Prompts:

Enter a number (or 'done' to finish): 1
Enter a number (or 'done' to finish): 3
Enter a number (or 'done' to finish): 5
Enter a number (or 'done' to finish): 7
Enter a number (or 'done' to finish): done
Example Output:

Even Numbers: None
6p*/

'use strict';

// Array to store user input
const numbers = [];

while (true) {
  let input = prompt("Enter a number (or 'done' to finish): ");
  // Stop condition
  if (input === null || input.toLowerCase() === 'done') {
    break;
  }

  const num = Number(input);

  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    alert('Please enter a valid number.');
  }

  console.log(numbers);

  // Extract even numbers using for...of
  const evenNumbers = [];

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }

  const resultDiv = document.getElementById('result');

  if (evenNumbers.length > 0) {
    resultDiv.textContent = `Even Numbers: ${evenNumbers.join(', ')}`;
  } else {
    resultDiv.textContent = `Even Numbers: None`;
  }
}
