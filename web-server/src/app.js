const path = require('path');
const express = require('express');

const app = express();

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public');
const viewDirPath = path.join(__dirname, '../../templates');

// Setup static directory to serve
app.use(express.static(publicDirPath));

// Setup handlebars views and views location
// Set express view engine setting to use handlebars as view engine
app.set('view engine', 'hbs');
// Set express view path setting to use absolute path 
app.set('views', viewDirPath);


// Routes
app.get('', (req, res) => {
  // express will fetch the hbs view in views folder nd converts it to html
  // second argument will be used as a dynamic content, it is an object for my view to access; I can inject it to my view using {{}}
  res.render('index', {
    title: 'Weather App',
    name: 'Temesghen Tekeste'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Temesghen Tekeste'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores officiis aliquid inventore illum nisi soluta accusamus enim minus alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut rem nam tempore provident! Similique iusto exercitationem porro soluta nostrum molestias assumenda earum, labore laudantium, inventore nesciunt consequuntur quos odio asperiores laborum veritatis voluptatem placeat minus accusantium commodi facere. Voluptatibus!' 
  })
})
app.get('/weather', (req, res) => {
  res.send([
    {
      city: 'Asmara',
      date: '07 Jan, 2021',
    },
    {
      Temperature: {
        Metric: 21,
        Imperial: 31,
      },
    },
  ]);
});

app.get('/contact', (req, res) => {
  console.log('Conntact Me ...');
  res.send({
    email: 'Enter your email',
    message: 'Your message goes here...',
  });
});

app.listen('3000', () => {
  console.log('Server is running on port 3000.');
});
