const axios = require('axios');

async function searchCatalog(query, locale = 'en-us') {
  const url = `https://learn.microsoft.com/api/catalog?search=${encodeURIComponent(query)}&locale=${locale}`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = { searchCatalog };
