const axios = require('axios');
const { apiKey, locationURI } = require('./constants');


const getcityInfo = async (city) => {
  const query = `?apikey=${apiKey}&q=${city}`;
  const response = await axios.get(locationURI + query);
  const data = await response.data;
  return data[0];
};

const getLocationInfo = async (city) => {
  const locationInfo = await getcityInfo(city);
  return {
    locationInfo
  };
};

module.exports = getLocationInfo;

