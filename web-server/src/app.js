const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');
app.use(express.static(publicDirPath));

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

app.listen('3000', () => {
  console.log('Server is running on port 3000.');
});
