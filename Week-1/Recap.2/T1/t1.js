/*
Write a JavaScript program that focuses on the basic concepts of arrays. 
Your program should include the following requirements:

Create an array called fruits and initialize it with the following 
elements: "apple", "banana", "orange", " grape", "kiwi".
Display the contents of the fruits array in the console.
Calculate and display the length of the fruits array.
Access and display the element at index 2 in the fruits array in the console.
Access and display the last element in the fruits array using the length property in the console.

Create an empty array called vegetables.
Prompt the user to enter three vegetables one by one, and add each entered vegetable 
to the vegetables array using the push() method.
Display the contents of the vegetables array in the console.
Calculate and display the length of the vegetables array.
Example Output:

Fruits: ["apple", "banana", "orange", "grape", "kiwi"]
Length of Fruits: 5
Element at Index 2: "orange"
Last Element of Fruits: "kiwi"
Vegetables: ["carrot", "broccoli", "cabbage"]
Length of Vegetables: 3
3p
*/
'use strict';
// fruits array
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits: ', fruits);

// length of fruits array
console.log('Lenght of Fruits: ', fruits.length);

// Elements at index 2
console.log('Element at Index 2:', fruits[2]);

// Last elements using lenght
console.log('Last Element of Fruits', fruits[fruits.length - 1]);

// Display in HTML
const resultDiv = document.getElementById('result');
let output = `Fruits: [${fruits.join(', ')}]\n`;
output += `Length of Fruits: ${fruits.length}\n`;
output += `Element at Index 2: ${fruits[2]}\n`;
output += `Last Element of Fruits: ${fruits[fruits.length - 1]}\n\n`;

// Vegetables array  Create an empty array called vegetables.
const vegetables = [];

//Prompt the user to enter three vegetables one by one, and add each entered vegetable
for (let i = 1; i <= 3; i++) {
  const veg = prompt(`Enter vegetable ${i}:`);
  //to the vegetables array using the push() method.
  vegetables.push(veg);
}

//Display the contents of the vegetables array in the console.
// Display vegetables array
console.log('Vegetables', vegetables);
//Calculate and display the length of the vegetables array.
console.log('Length of Vegetables', vegetables.length);

output += `Vegetables: [${vegetables.join(', ')}]\n`;
output += `Length of Vegetables: ${vegetables.length}`;

resultDiv.textContent = output;
