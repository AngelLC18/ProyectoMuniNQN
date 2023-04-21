import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const PersonTable = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://weblogin.muninqn.gov.ar/api/Examen/personas")
      .then((response) => {
        const uniquePeople = Array.from(
          new Set(response.data.map((person) => person.DNI))
        ).map((dni) =>
          response.data.find((person) => person.DNI === dni)
        );
        setPeople(uniquePeople);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Table striped bordered hover>
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
        {people.map((person) => (
          <tr key={person.DNI}>
            <td>{person.nombre}</td>
            <td>{person.apellido}</td>
            <td>{person.DNI}</td>
            <td>{person.genero}</td>
            <td>{person.edad}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PersonTable;
