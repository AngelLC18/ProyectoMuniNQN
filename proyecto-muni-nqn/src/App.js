
import './App.css';
import { useState } from 'react';

const Test = () => {
    const [form, setForm] = useState({
        genero: '',
        edad: '',
        modalidad:'',
    });
    const cambiarUno = (e) => {
        const value = e.target.value;
        setForm({
            ...form,
            genero: value,
        });
    };
  
    const cambiarDos = (e) => {
        const value = e.target.value;
        setForm({
            ...form,
            edad: value,
        });
    };

    const cambiarTres = (e) => {
        const value = e.target.value;
        setForm({
            ...form,
            modalidad: value,
        });
    };

    const enviarInformacion = () => {
        if (form.edad.length === 3) {
            console.log('enviado');

        }
    };
    

    console.log (form);
    return (
        <>
            <div className="container">
                <div>
                  <h1>
                    Cursos
                  </h1>
                </div>
                <div className="row">
                    <select type="text" placeholder="Genero" value={form.edad} onChange={cambiarUno}>
                      <option value="">Género</option>
                      <option value={form.genero}>Femenino</option>
                      <option value={form.genero}>Masculino</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Edad"
                        value={form.edad}
                        onChange={cambiarDos}
                    />
                    <select name="cars" id="cars" onChange={cambiarTres}>
                      <option value="">Seleccióne la modalidad</option>
                      <option value={form.modalidad}>Grupal</option>
                      <option value={form.modalidad}>Individual</option>
                    </select>

                    <button onClick={enviarInformacion}>Enviar informacion</button>
                </div>
            </div>
        </>
    );
};


export default Test;
