/*
Write a program that prompts the user to enter their score for 
a course assessment and determines their grade based on the following grading scale:
Scores between 0 and 39 receive a grade of 0.
Scores between 40 and 51 receive a grade of 1.
Scores between 52 and 63 receive a grade of 2.
Scores between 64 and 75 receive a grade of 3.
Scores between 76 and 87 receive a grade of 4.
Scores between 88 and 100 receive a grade of 5.
Print the result on the HTML document.
3p
*/
'use stcirt';

let score = Number(prompt('Enter your score (1-100):'));

let grade;

if (isNaN(score) || score < 0 || score > 100) {
  grade = 'Invlid input! Enter a number between 0 and 100.';
} else if (score <= 39) {
  grade = 0;
} else if (score <= 51) {
  grade = 1;
} else if (score <= 64) {
  grade = 2;
} else if (score <= 75) {
  grade = 3;
} else if (score <= 87) {
  grade = 4;
} else {
  grade = 5;
}

console.log(score);

document.querySelector('#result').textContent = ` Your grade: ${grade}`;
