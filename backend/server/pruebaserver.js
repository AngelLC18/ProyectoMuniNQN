const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

// Habilita CORS para aceptar solicitudes desde el frontend
app.use(cors());

// Endpoint para obtener los datos de la API
app.get('/personas', async (req, res) => {
  try {
    const response = await axios.get('https://weblogin.muninqn.gov.ar/api/Examen');
    const personas = response.data.personas;
    // Quita personas duplicadas usando su dni como referencia
    const personasUnicas = Object.values(personas.reduce((tempObj, persona) => {
      tempObj[persona.DNI] = persona;
      return tempObj;
    }, {}));
    res.json(personasUnicas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los datos de la API.' });
  }
});


app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}.`);
});
