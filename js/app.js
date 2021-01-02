const getCityUpdateInfo = require('./utils/forcast');
const city = process.argv[2];

if (!city) {
  console.log('Please provide city name!');
  return;
}

getCityUpdateInfo(city)
  .then((data) => {
    const { locationInfo, weatherInfo } = data;
    console.log(locationInfo, weatherInfo);
    const info = `Current temperature Info:
        City Name: ${locationInfo.EnglishName}
        Celcius: ${weatherInfo.Temperature.Metric.Value}
        Fahrenheit: ${weatherInfo.Temperature.Imperial.Value}
        `;
    console.log(info);
  })
  .catch((err) => console.log('Unable to fetch weather information'));
