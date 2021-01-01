const key = '9s6cSzTp6GnRFfPMpqZBoUbmsGG0ATYO';

const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

  const query = `?apiKey=${key}&q=${city}`;

  const response = await fetch(base + query);

  const data = await response.json();
  console.log(data, '*********');
};

getCity('kampala');
