
import './App.css';
import { useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Showinfo from './components/ShowInfo';

const Test = () => {
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        edad: '',        
        genero: '',
        dni: '',
        modalidad: '',
    });

    const cambiarNombre = (e) => {
        const value = e.target.value;
        const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s\-\']+$/; // Expresión regular para permitir solo letras y algunos caracteres especiales
        //regex permite solo números y caracteres de retroceso (\b).
        if (value === "" || regex.test(value)) {
        //verificamos si el valor ingresado coincide con la expresión regular y si es así, se actualiza el valor de setForm.
          setForm({
              ...form,
              nombre: value,
          });
        }
    };

    const cambiarApellido = (e) => {
        const value = e.target.value;
        const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s\-\']+$/; // Expresión regular para permitir solo letras y algunos caracteres especiales
        //regex permite solo números y caracteres de retroceso (\b).
        if (value === "" || regex.test(value)) {
        //verificamos si el valor ingresado coincide con la expresión regular y si es así, se actualiza el valor de setForm.
          setForm({
              ...form,
              apellido: value,
          });
        }

    };

    const cambiarEdad = (e) => {
        const value = e.target.value;
        const regex = /^[0-9\b]+$/; 
        //regex permite solo números y caracteres de retroceso (\b).
        if (value === "" || regex.test(value)) {
        //verificamos si el valor ingresado coincide con la expresión regular y si es así, se actualiza el valor de setForm.
          setForm({
              ...form,
              edad: value,
          });
        }
    };
    const cambiarGenero = (e) => {
      const value = e.target.value;

      setForm({
          ...form,
          genero: value,
      });
  };

  const cambiarDni = (e) => {
      const value = e.target.value;
      const regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        setForm({
            ...form,
            dni: value,
        });
      }
  };

  const cambiarModalidad = (e) => {
      const value = e.target.value;

      setForm({
          ...form,
          modalidad: value,
      });
  };
    const enviarInformacion = () => {
        if ((form.dni.length === 8) & (form.edad.length ===3)){
            console.log('enviado');
            console.log(form)
        }
    };
    return (
        <>
          <div className="container">
            <div className="form">
              <p class="title">Registro</p>
              <div class="form-row">
                <label class="name">
                  <span>Nombre</span>
                  <input class="input" type="text" value={form.nombre} onChange={cambiarNombre} />
                </label>
                <label class="apellido">
                  <span>Apellido</span>
                  <input class="input" type="text" value={form.apellido} onChange={cambiarApellido} />
                </label>
              </div>
              <div class="form-row">
                <label class="edad">
                  <span>Edad</span>
                  <input class="input" type="text" value={form.edad} onChange={cambiarEdad} maxLength={3} />
                </label>
                <label class="dni">
                  <span>DNI</span>
                  <input class="input" type="text" value={form.dni} onChange={cambiarDni} maxLength={8} />
                </label>
              </div>
              <div class="form-row">
              <label class="genero">
                <span>Genero</span>
                <div class="select-container">
                  <select class="input" value={form.genero} onChange={cambiarGenero}>
                    <option value="" disabled selected>Genero</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                  </select>
                </div>
              </label>
              <label class="modalidad">
                <span>Modalidad</span>
                <div class="select-container">
                  <select class="input" value={form.modalidad} onChange={cambiarModalidad}>
                    <option value="" disabled selected>Modalidad</option>
                    <option value="Grupal">Grupal</option>
                    <option value="Individual">Individual</option>
                  </select>
                </div>
              </label>
              </div>
              <button id="btn" onClick={enviarInformacion}>Enviar informacion</button>
            </div>
          </div>

        </>
    );
};

export default Test;
