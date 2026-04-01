// utils.js

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

export {fetchData};
