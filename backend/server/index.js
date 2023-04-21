
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const axios = require('axios');

app.get('/', (req, res) => {
  axios.get('https://weblogin.muninqn.gov.ar/api/Examen')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Servidor iniciado en el puerto ${port}.');
});


