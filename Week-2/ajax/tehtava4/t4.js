const reqresApiKey = 'reqres_cabf9e9219574f34acac693146dcfb7a';

const reqresUrl = 'https://reqres.in/api/users';

const fetchData = async (url, options) => {
  try {
    const data = await fetch(reqresUrl, options);

    if (data.status < 200 || data.status >= 300) {
      throw new Error('Oma virheviesti tähän');
    }

    return await data.json();
  } catch (error) {
    console.log('ei toimi', error);
  }
};

const options = {
  headers: {
    'x-api-key': reqresApiKey,
  },
};

const main = async () => {
  console.log('Logitus ennen kutsua');
  const result = await fetchData(reqresUrl, options);
  console.log('result', result);
};

main();
