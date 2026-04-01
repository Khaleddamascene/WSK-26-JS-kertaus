// main.js
import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './comopnents.js';

const table = document.querySelector('#target');
const modal = document.querySelector('#modal');

const btnAll = document.querySelector('#btn-all');
const btnSodexo = document.querySelector('#btn-sodexo');
const btnCompass = document.querySelector('#btn-compass');
const filterBtns = [btnAll, btnSodexo, btnCompass];

let restaurants = []; // store fetched restaurants

// -------------------------
// Helper functions
// -------------------------

// Set active button highlight
const setActive = (btn) => {
  filterBtns.forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
};

// Show error in table
const showError = (message) => {
  table.innerHTML = `<tr><td colspan="3">${message}</td></tr>`;
};

// Clear all table rows except header
const clearTable = () => {
  document
    .querySelectorAll('tr:not(:first-child)')
    .forEach((row) => row.remove());
};

// Fetch all restaurants
const getRestaurants = async () => await fetchData(`${baseUrl}/restaurants`);

// Fetch daily menu for a restaurant
const getDailyMenu = async (id, lang = 'fi') =>
  await fetchData(`${baseUrl}/restaurants/daily/${id}/${lang}`);

// -------------------------
// Render functions
// -------------------------

// Render restaurants into table
const renderRestaurants = (restaurantsToRender) => {
  clearTable();

  if (!restaurantsToRender?.length) {
    showError('No restaurants found for the selected filter.');
    return;
  }

  restaurantsToRender
    .map((restaurant) => {
      const tr = restaurantRow(restaurant);

      tr.addEventListener('click', async () => {
        // Remove highlight from all rows
        document
          .querySelectorAll('.highlight')
          .forEach((el) => el.classList.remove('highlight'));
        tr.classList.add('highlight');

        modal.innerHTML = '';
        modal.showModal();

        // Fetch menu
        const menu = await getDailyMenu(restaurant._id);

        modal.innerHTML = !menu?.courses
          ? '<p>Menua ei saatavilla tänään.</p>'
          : restaurantModal(restaurant, menu);

        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.id = 'closeBtn';
        closeBtn.innerText = 'Sulje';
        closeBtn.addEventListener('click', () => modal.close());
        modal.appendChild(closeBtn);
      });

      return tr;
    })
    .forEach((tr) => table.appendChild(tr));
};

// Higher-order function for filtering and rendering
const filterAndRender = (filterFn, btn) => {
  setActive(btn);
  const filtered = restaurants.filter(filterFn);
  renderRestaurants(filtered);
};

// -------------------------
// Initialization
// -------------------------
(async () => {
  restaurants = await getRestaurants();

  if (!restaurants) {
    showError('Failed to fetch restaurants. Please try again later.');
    return;
  }

  // Sort restaurants alphabetically
  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  // Render all initially
  renderRestaurants(restaurants);
  setActive(btnAll);

  // Attach filter button events
  btnAll.addEventListener('click', () => filterAndRender(() => true, btnAll));
  btnSodexo.addEventListener('click', () =>
    filterAndRender((r) => r.company === 'Sodexo', btnSodexo)
  );
  btnCompass.addEventListener('click', () =>
    filterAndRender((r) => r.company === 'Compass Group', btnCompass)
  );
})();
