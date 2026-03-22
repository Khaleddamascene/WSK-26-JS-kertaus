'use strict';

// Fruits array
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Display fruits array
console.log('Fruits:', fruits);

// Length of fruits array
console.log('Length of Fruits:', fruits.length);

// Element at index 2
console.log('Element at Index 2:', fruits[2]);

// Last element using length
console.log('Last Element of Fruits:', fruits[fruits.length - 1]);

// Display in HTML
const resultDiv = document.getElementById('result');
let output = `Fruits: [${fruits.join(', ')}]\n`;
output += `Length of Fruits: ${fruits.length}\n`;
output += `Element at Index 2: ${fruits[2]}\n`;
output += `Last Element of Fruits: ${fruits[fruits.length - 1]}\n\n`;

// Vegetables array
const vegetables = [];

// Prompt user to enter 3 vegetables
for (let i = 1; i <= 3; i++) {
  const veg = prompt(`Enter vegetable ${i}:`);
  vegetables.push(veg);
}

// Display vegetables array
console.log('Vegetables:', vegetables);
console.log('Length of Vegetables:', vegetables.length);

output += `Vegetables: [${vegetables.join(', ')}]\n`;
output += `Length of Vegetables: ${vegetables.length}`;

resultDiv.textContent = output;
