'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.get('/hello', (request, response) => {
  response.status(200).send('<h1>Hello</h1>');
});
app.get('/data', (request, response) => {
  let data = [{ name: 'Javascript' }, { name: 'python' }, { name: 'C#' }];
  response.status(200).json(data);
});

app.get('*', (request, response) =>
  response.status(404).send('404 page not found')
);
app.listen(PORT, () => console.log(`listing to port ${PORT}`));