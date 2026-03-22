'use strict';

// Ask the user for a positive integer
let n = parseInt(prompt('Enter a positive integer:'));

// Validate input
if (isNaN(n) || n <= 0) {
  document.getElementById('result').textContent =
    'Please enter a valid positive integer!';
} else {
  // Start building the HTML table
  let tableHTML = '<table>';
  tableHTML += `Enter a positive integer: ${n}<br><br>
  Multiplication Table:`;

  // Outer loop: rows
  for (let i = 1; i <= n; i++) {
    tableHTML += '<tr>';

    // Inner loop: columns
    for (let j = 1; j <= n; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }

    tableHTML += '</tr>';
  }

  tableHTML += '</table>';
  console.log(n);

  // Display the table in the HTML document
  document.getElementById('result').innerHTML = tableHTML;
}
