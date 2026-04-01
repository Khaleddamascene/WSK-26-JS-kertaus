import {baseUrl} from '../JS/variables.js';
import {fetchData} from '../JS/utils.js';
import {restaurantRow, restaurantModal} from '../JS/comopnents.js';

const table = document.querySelector('#target');
const modal = document.querySelector('#modal');

const btnAll = document.querySelector('#btn-all');
const btnSodexo = document.querySelector('#btn-sodexo');
const btnCompass = document.querySelector('#btn-compass');

const getRestaurants = async () => {
  return await fetchData(`${baseUrl}/restaurants`);
};

const getDailyMenu = async (id, lang) => {
  return await fetchData(`${baseUrl}/restaurants/daily/${id}/${lang}`);
};

const showError = (message) => {
  table.innerHTML = `<tr><td colspan="3">${message}</td></tr>`;
};

const clearTable = () => {
  const rows = document.querySelectorAll('tr:not(:first-child)');
  rows.forEach((row) => row.remove());
};

const filterBtns = [btnAll, btnSodexo, btnCompass];

const setActive = (btn) => {
  filterBtns.forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
};

const renderRestaurants = (restaurants) => {
  clearTable();

  if (restaurants.length === 0) {
    showError('Ei ravintoloita valitulla suodattimella.');
    return;
  }

  restaurants
    .map((restaurant) => {
      const tr = restaurantRow(restaurant);

      tr.addEventListener('click', async () => {
        document.querySelectorAll('.highlight').forEach((el) => {
          el.classList.remove('highlight');
        });

        tr.classList.add('highlight');
        modal.innerHTML = '';
        modal.showModal();

        const menu = await getDailyMenu(restaurant._id, 'fi');

        if (!menu || !menu.courses) {
          modal.innerHTML = '<p>⚠️ Menua ei saatavilla tänään.</p>';
        } else {
          modal.innerHTML = restaurantModal(restaurant, menu);
        }

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

(async () => {
  const restaurants = await getRestaurants();

  if (!restaurants) {
    showError('Ravintoloiden haku epäonnistui. Yritä myöhemmin uudelleen.');
    return;
  }

  const sorted = restaurants.sort((a, b) => a.name.localeCompare(b.name));
  renderRestaurants(sorted);
  setActive(btnAll);

  btnAll.addEventListener('click', () => {
    setActive(btnAll);
    renderRestaurants(sorted);
  });

  btnSodexo.addEventListener('click', () => {
    setActive(btnSodexo);
    const sodexo = sorted.filter((r) => r.company === 'Sodexo');
    renderRestaurants(sodexo);
  });

  btnCompass.addEventListener('click', () => {
    setActive(btnCompass);
    const compass = sorted.filter((r) => r.company === 'Compass Group');
    renderRestaurants(compass);
  });
})();
