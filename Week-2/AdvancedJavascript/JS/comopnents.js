// components.js
const restaurantRow = (restaurant) => {
  const {name, address, city} = restaurant;
  const tr = document.createElement('tr');

  tr.innerHTML = `
      <td>${name}</td>
      <td>${address}</td>
      <td>${city}</td>
   `;
  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;

  let menuHtml = '';

  courses?.forEach((course) => {
    const {name, price, diets} = course;

    menuHtml += `
      <article class="course">
        <p><strong>${name}</strong></p>
        <p>Hinta: ${price ? price : '?€'}</p>
        <p>Allergeenit: ${diets || 'Ei tietoa'}</p>
      </article>
    `;
  });

  return `
      <h3>${name}</h3>
      <p>${address}</p>
      <p>${postalCode ?? ''}, ${city}</p>
      <p>${phone ?? ''}</p>
      <p>${company ?? ''}</p>
      ${menuHtml}
   `;
};

export {restaurantRow, restaurantModal};
