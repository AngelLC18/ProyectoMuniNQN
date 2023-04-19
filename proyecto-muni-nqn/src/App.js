import logo from './logo.svg';
import './App.css';



import { useEffect, useState } from 'react';

const Test = () => {
    const [form, setForm] = useState({
        uno: '',
        dos: '',
        tres: '',
    });

    const cambiarUno = (e) => {
        const value = e.target.value;

        setForm({
            ...form,
            uno: value,
        });
    };

    const cambiarDos = (e) => {
        const value = e.target.value;

        setForm({
            ...form,
            dos: value,
        });
    };

    const cambiarTres = (e) => {
        const value = e.target.value;

        setForm({
            ...form,
            tres: value,
            otro: null,
        });
    };

    const enviarInformacion = () => {
        if (form.dos.length === 8) {
            console.log('enviado');
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={form.uno}
                        onChange={cambiarUno}
                    />
                    <input
                        type="text"
                        placeholder= "Apellido" 
                        onkeypress= "return (event.charCode >= 48 && event.charCode <= 57)"
                        value={form.dos}
                        onChange={cambiarDos}
                      
                    />

                    <input
                        type="text"
                        placeholder="DNI"
                        value={form.tres}
                        onChange={cambiarTres}
                        pattern="[0-9]" maxlength="8"
                        
                    />

                    <button onClick={enviarInformacion}>Enviar</button>
                </div>
            </div>
        </>
    );
};
export default Test;