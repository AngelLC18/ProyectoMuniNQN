import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../functions';


const ShowInfo = () => {
    const url = 'https://weblogin.muninqn.gov.ar/api/Examen';
    const [personas,setPersonas] = useState ([]);
    const [id,setId] = useState('');
    const [name,setName] = useState ('');
    const [surname,setSurname] = useState ('');
    const [age,setAge] = useState ('');
    const [dni,setDni] = useState ('');
    const [gender,setGender] = useState ('');
    const [modality,setModality] = useState ('');
    const [title,setTittle] = useState ('');
    const [operation,setOperation] = useState ('1');

    const getPersonas = async () =>{
        const r = await axios.get(url);
        setPersonas(r.data);
    }

    useEffect ( () =>{
        getPersonas();
    },[]);

  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className = 'row mt -3'>
                <div className = 'col-md-4 offset -4'>
                    <div className = 'd-grid mx-auto'>
                        <button className = 'd-grid mx-auto' data-bs-toggle = "modal data-bs-target='#modalPersonas">
                            <i className='fa-solid fa-circle-plus'></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-6'></div>
                <div className='col 12 col-lg-8 offset-0 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr><th>#</th><th>Nombre</th><th>Apellido</th><th>Edad</th><th>DNI</th><th>Genero</th><th>Modalidad</th></tr>
                            </thead>
                            <tbody className='table-groud-divider'>
                                {personas.map( (personas,i)=>(
                                    <tr key={(personas.id)}>
                                        <td>{(i+1)}</td>
                                        <td>{personas.name}</td>
                                        <td>{personas.surname}</td>
                                        <td>{personas.age}</td>
                                        <td>{personas.dni}</td>
                                        <td>{personas.gender}</td>
                                        <td>{personas.modality}</td>
                                        <td>
                                            <button className='btn btn-warning'>
                                                <i className='fa-solid fa-edit'></i>
                                            </button>
                                            &nbsp
                                            <button className='btn btn-danger'>
                                                <i className='fa-solid fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    </div>
)
}

export default ShowInfo