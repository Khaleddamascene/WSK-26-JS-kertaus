/*
Write a program that calculates the distance between two points on a 2D plane 
and displays the result in an HTML document. The program should prompt 
the user for the coordinates of two points (x, y) and then calculate 
the Euclidean distance between them using the formula:
Distance = √((x2 - x1)^2 + (y2 - y1)^2)
In total, there will be four prompts to input the x and y coordinates for the two points.
You can do it also with fewer prompts if you use string methods like split().
3p
*/

'use strict';

let point_1 = prompt('Enter point 1 (x, y):');
let point_2 = prompt('Enter point 2 (x, y):');

const [x1, y1] = point_1.split(',').map(Number);
const [x2, y2] = point_2.split(',').map(Number);

console.log(x1, y1, x2, y2);

if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
  document.querySelector('#result').innerHTML =
    'Invalid input! Use format x,y (example: 3,4)';
} else {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  document.querySelector('#result').innerHTML = `
    Distance: ${distance.toFixed(2)}`;
}
