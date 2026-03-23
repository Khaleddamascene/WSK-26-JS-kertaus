const h1 = document.querySelector('h1');

console.log('h1', h1);

const reqresApiKey = 'reqres_cabf9e9219574f34acac693146dcfb7a';

const reqresUrl = 'https://reqres.in/api/unknown/1234';

const callApi = async () => {
  try {
    const data = await fetch(reqresUrl, {
      method: 'post',
      body: JSON.stringify({name: 'Juha', job: 'teacher'}),
      headers: {
        'x-api-key': reqresApiKey,
      },
    });

    const result = await data.json();

    console.log('data', data);
    console.log('result', result);
  } catch (error) {
    console.log('ei toimi', error);
  }
};

console.log('Logitus kustun ennen');
callApi();
console.log('logitus kustun jälkeen.');
