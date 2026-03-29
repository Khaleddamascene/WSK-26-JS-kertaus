const resturantRow = (restaurant) => {
  const {name, address, city, company} = restaurant;
  const tr = document.createElement('tr');
  // nimisolu
  const nameTd = document.createElement('td');
  nameTd.innerText = name;
  // osoitesolu
  const addressTd = document.createElement('td');
  addressTd.innerText = address;
  // kaupunkisolu
  const cityTd = document.createElement('td');
  cityTd.innerText = city;
  // yrityssolu
  const firmaTd = document.createElement('td');
  firmaTd.innerText = company.name;
  // lisätään solut riviin
  tr.append(nameTd, addressTd, cityTd, firmaTd);
  return tr;
};

export default resturantRow;
