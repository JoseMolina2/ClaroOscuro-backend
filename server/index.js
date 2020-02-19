const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('./queries');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/clientes', db.getClientes);
app.post('/clientes', db.createCliente);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});