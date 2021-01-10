const searchCityForm = document.querySelector('form');
const cityDetailsInfo = document.querySelector('.details');
const card = document.querySelector('.card');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const render = (data) => {
  // updating weather details
  const { locationInfo: cityDetails, weatherInfo } = data;
  const html = `
      <h5 class="my-3">
      <!-- City Name -->
        ${cityDetails.EnglishName}
      </h5>
      <div class="my-3">
        <!-- Weather Conditions -->
        ${weatherInfo.WeatherText}
      </div>
      <div class="display-4 my-4">
        <span>${weatherInfo.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>
  `;
  cityDetailsInfo.innerHTML = html;

  // setting day and night and icon images
  const imgSrc = weatherInfo.IsDayTime ? '../img/day.svg' : '../img/night.svg';
  time.setAttribute('src', imgSrc);

  const iconSrc = `../img/icons/${weatherInfo.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

searchCityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = searchCityForm.city.value.trim();
  searchCityForm.reset();
  console.log(city);

  // update the ui with the city
  fetch('http://localhost:3000/weather?city=kampala')
    .then((response) => {
      response
        .json()
        .then((data) => {
          render(data);
        })
        .catch((err) => console.log(err)); // eslint-disable-line no-console;
    })
    .catch((err) => console.log(err)); // eslint-disable-line no-console;
  // set Local storage
  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  fetch('http://localhost:3000/weather?city=kampala')
    .then((response) => {
      response
        .json()
        .then((data) => {
          render(data);
        })
        .catch((err) => console.log(err)); // eslint-disable-line no-console;
    })
    .catch((err) => console.log(err)); // eslint-disable-line no-console;
}
