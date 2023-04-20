import React, { useState, useEffect } from 'react';
import axios from 'axios';

function listaPersonas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
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
        <li key={persona.id}>{persona.email}</li>
      ))}
    </ul>
  );
}

export default listaPersonas;