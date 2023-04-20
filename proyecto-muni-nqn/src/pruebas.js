import React, { useState, useEffect } from 'react';
import axios from 'axios';

function listaPersonas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    axios.get('https://weblogin.muninqn.gov.ar/api/Examen')
      .then(response => {
        setPersonas(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ul>
      {personas.map(persona => (
        <li key={persona.id}>{persona.dni} {persona.genero}</li>
      ))}
    </ul>
  );
}

export default listaPersonas;