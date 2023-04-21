import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    async function obtenerPersonas() {
      try {
        const response = await axios.get('http://localhost:4000/personas');
        const data = response.data;
        setPersonas(data);
      } catch (error) {
        console.error(error);
      }
    }
    obtenerPersonas();
  }, []);

  return (
    <div>
      <h1>Personas</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Género</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {personas.map(persona => (
            <tr key={persona.DNI}>
              <td>{persona.Nombre}</td>
              <td>{persona.Apellido}</td>
              <td>{persona.DNI}</td>
              <td>{persona.Genero}</td>
              <td>{persona.Edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;