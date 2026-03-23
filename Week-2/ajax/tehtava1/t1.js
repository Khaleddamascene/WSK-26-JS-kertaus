const h1 = document.querySelector('h1');

console.log('h1', h1);

const reqresApiKey = 'reqres_cabf9e9219574f34acac693146dcfb7a';

const reqresUrl = 'https://reqres.in/api/users/1';

const callApi = async () => {
  const data = await fetch(reqresUrl, {
    headers: {
      'x-api-key': reqresApiKey,
    },
  });

  const result = await data.json();
  console.log('data', data);
  console.log(result);
};

console.log('Logitus kustun ennen');
callApi();
console.log('logitus kustun jälkeen.');
