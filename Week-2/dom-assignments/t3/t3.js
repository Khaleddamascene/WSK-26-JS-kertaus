/*
Open t3 folder in your IDE/editor. Create a web page that dynamically 
displays information about the user's browser and device using the BOM.
 Print the data to #target element. The page should show details such as:

Browser name and version. (e.g. Google Chrome, 114)
(Operating system name.)
Screen width and height.
Available screen space for the browser.
Current date and time. Use Finnish localization
1. helmikuuta 2056 as date format
Hours and minutes for time
Place each item within its own <p> element, for example.
save the web page as t3.html and JS as t3.js to t3 folder
*/

const target = document.querySelector('#target');

// Selain ja versio
const userAgent = navigator.userAgent;

// Yksinkertainen tunnistus
let browser = 'unknown';
if (userAgent.includes('Chrome')) browser = 'Google Chrome';
if (userAgent.includes('Firefox')) browser = 'Mozilla Firefox';
if (userAgent.includes('Safari') && !userAgent.includes('Chrome'))
  browser = 'Safari';
if (userAgent.includes('Edg')) browser = 'Microsoft Edge';

// Version-tiedot
let version = '';
const match = userAgent.match(/(Chrome|Firefox|Safari|Edg)\/(\d+)/);
if (match) {
  version = match[2];
}

let osName = 'unknown OS';
if (userAgent.includes('Windows')) osName = 'Windows';
if (userAgent.includes('Mac')) osName = 'MacOS';
if (userAgent.includes('Linux')) osName = 'Linux';
if (userAgent.includes('Android')) osName = 'Android';
if (userAgent.includes('like Mac')) osName = 'iOS';

// Näyttö
const screenwidth = screen.width;
const screenHeight = screen.height;

// Käytettävissä oleva tila
const availWidth = screen.availWidth;
const availHeight = screen.availHeight;

// Päivämäärä ja aika (Suomi)
const now = new Date();

// Tunnistetaan vain päivä, kuukausi ja vuosi
const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

// Tunnistetaan vain tunnit ja minuutit
const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

// Tulostus
target.innerHTML = `
  <p>Browser: ${browser} ${version}</p>
  <p>Operating System: ${osName}</p>
  <p>Screen size: ${screenwidth} x ${screenHeight}</p>
  <p>Available space: ${availWidth} x ${availHeight}</p>
  <p>Date: ${date}</p>
  <p>Time: ${time}</p>
  `;
