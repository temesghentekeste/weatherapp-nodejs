// const bent = require('bent');
const http = require('http');
const axios = require('axios');
const apiKey = require('./utils/api_key');

const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';

const city = 'asmara';
const query = `?apikey=${apiKey}&q=${city}`;
const url = base + query;

const req = http.request(url, (res) => {

  let data = '';

  res.on('data', (d) => {
    data = data + d.toString();
  });

  res.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
    console.log(body[0].Key);
  })
});

req.on('error', (e) => {
  console.error(e);
});
req.end();

// const getCurrentConditions = async (cityInfo) => {
//   const query = `${cityInfo.Key}?apikey=${apiKey}`

//   const response = await axios(weatherURI + query);
//   const data = await response.data;

//   return data[0];
// }

// const getCity = async () => {
  
//   const query = `?apikey=${apiKey}&q=${city}`;
//   const response = await axios.get(base + query);
//   const data = await response.data;
//   return data[0];
// };

// const getCityUpdateInfo = async () => {
//   const cityInfo = await getCity();
//   const weatherInfo = await getCurrentConditions(cityInfo);

//   return {
//     cityInfo,
//     weatherInfo,
//   };
// };

// getCityUpdateInfo()
//   .then((data) => {
//     const { cityInfo, weatherInfo } = data;
//     console.log(cityInfo, weatherInfo);
//     const info = `Current temperature Info:
//         City Name: ${cityInfo.EnglishName}
//         Celcius: ${weatherInfo.Temperature.Metric.Value}
//         Fahrenheit: ${weatherInfo.Temperature.Imperial.Value}
//         `;
//         console.log(info);
//   })
//   .catch((err) => console.log('Unable to fetch weather information'));

  








// .then( info => console.log(info))
  // .catch( err => console.log(err));

// const getJSON = bent('json');

// const cityWithBent = async (city) => {
//   const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

//   const query = `?apikey=${key}&q=${city}`;
//   let obj = await getJSON(base + query);
//   console.log(obj);
//   return obj[0];
// };

// cityWithBent('kampala')
//   .then((data) => {
//     const { Key } = data;
//     console.log(Key);
//   })
//   .catch((err) => console.log(err));

