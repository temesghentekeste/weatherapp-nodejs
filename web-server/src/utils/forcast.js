const axios = require('axios');
const { apiKey, weatherURI } = require('./constants');
const getLocationInfo = require('./location');

const getCurrentConditions = async (locationCode) => {
  const query = `${locationCode}?apikey=${apiKey}`;

  const response = await axios(weatherURI + query);
  const data = await response.data;
  return data[0];
};

const getCityUpdateInfo = async (city) => {
  const response = await getLocationInfo(city);
  const { locationInfo } = response;
  const weatherInfo = await getCurrentConditions(locationInfo.Key);
  return {
    locationInfo,
    weatherInfo,
  };
};

module.exports = getCityUpdateInfo;
