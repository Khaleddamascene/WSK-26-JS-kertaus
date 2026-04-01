// main.js
import {baseUrl} from '../JS/variables.js';
import {fetchData} from '../JS/utils.js';
import {restaurantRow, restaurantModal} from '../JS/comopnents.js';

const table = document.querySelector('#target');
const modal = document.querySelector('#modal');

const btnAll = document.querySelector('#btn-all');
const btnSodexo = document.querySelector('#btn-sodexo');
const btnCompass = document.querySelector('#btn-compass');

const filterBtns = [btnAll, btnSodexo, btnCompass];

// -------------------------
// Apufunktiot
// -------------------------
const setActive = (btn) => {
  filterBtns.forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
};

const showError = (message) => {
  table.innerHTML = `<tr><td colspan="3">${message}</td></tr>`;
};

const clearTable = () => {
  document
    .querySelectorAll('tr:not(:first-child)')
    .forEach((row) => row.remove());
};

const getRestaurants = async () => await fetchData(`${baseUrl}/restaurants`);
const getDailyMenu = async (id, lang) =>
  await fetchData(`${baseUrl}/restaurants/daily/${id}/${lang}`);

// -------------------------
// Renderöinti
// -------------------------
const renderRestaurants = (restaurants) => {
  clearTable();

  if (!restaurants?.length) {
    showError('Ei ravintoloita valitulla suodattimella.');
    return;
  }

  restaurants.forEach((restaurant) => {
    const tr = restaurantRow(restaurant);

    tr.addEventListener('click', async () => {
      // Poistetaan highlight kaikista
      document
        .querySelectorAll('.highlight')
        .forEach((el) => el.classList.remove('highlight'));
      tr.classList.add('highlight');

      modal.innerHTML = '';
      modal.showModal();

      // Hae menu
      const menu = await getDailyMenu(restaurant._id, 'fi');

      modal.innerHTML = !menu?.courses
        ? '<p>Menua ei saatavilla tänään.</p>'
        : restaurantModal(restaurant, menu);

      // Lisää sulje-nappi
      const closeBtn = document.createElement('button');
      closeBtn.id = 'closeBtn';
      closeBtn.innerText = 'Sulje';
      closeBtn.addEventListener('click', () => modal.close());
      modal.appendChild(closeBtn);
    });

    table.appendChild(tr);
  });
};

// -------------------------
// Init
// -------------------------
(async () => {
  const restaurants = await getRestaurants();

  if (!restaurants) {
    showError('Ravintoloiden haku epäonnistui. Yritä myöhemmin uudelleen.');
    return;
  }

  const sorted = restaurants.sort((a, b) => a.name.localeCompare(b.name));

  renderRestaurants(sorted);
  setActive(btnAll);

  // Filter-napit
  btnAll.addEventListener('click', () => {
    setActive(btnAll);
    renderRestaurants(sorted);
  });

  btnSodexo.addEventListener('click', () => {
    setActive(btnSodexo);
    renderRestaurants(sorted.filter((r) => r.company === 'Sodexo'));
  });

  btnCompass.addEventListener('click', () => {
    setActive(btnCompass);
    renderRestaurants(sorted.filter((r) => r.company === 'Compass Group'));
  });
})();
