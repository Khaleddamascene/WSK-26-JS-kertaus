/*
Write a program that prompts the user to enter the lengths of three sides of a triangle 
and determines the type of triangle based on the side lengths. 
The program should classify the triangle as equilateral (all sides are equal), 
isosceles (two sides are equal), or scalene (no sides are equal). Print the result on the HTML document.
try to use &&, || and ! operators
3p
*/
'use strict';

const a = Number(prompt('Enter side a:'));
const b = Number(prompt('Enter side b:'));
const c = Number(prompt('Enter side c:'));

let result;

// Validate input
if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
  result = 'Invalid input! Enter positive numbers.';
}
// Check triangle validity (triangle inequality)
else if (!(a + b > c && a + c > b && b + c > a)) {
  result = 'Not a valid triangle.';
}
// Equilateral
else if (a === b && b === c) {
  result = 'Equilateral triangle';
}
// Isosceles
else if (a === b || a === c || b === c) {
  result = 'Isosceles triangle';
}
// Scalene
else {
  result = 'Scalene triangle';
}

document.querySelector('#result').textContent = result;
