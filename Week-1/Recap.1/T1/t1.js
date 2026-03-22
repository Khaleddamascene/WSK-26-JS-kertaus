'use strict';

const celsius = prompt('Enter temperature in Celsius:');
const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
const kelvin = (celsius + 273.15).toFixed(2);

document.querySelector('#result').innerHTML = `Celsius: ${celsius} °C <br>
    Fahrenheit: ${fahrenheit} °F <br>
    Kelvin: ${kelvin} K
    `;
