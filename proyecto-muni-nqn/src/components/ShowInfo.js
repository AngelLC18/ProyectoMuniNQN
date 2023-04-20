import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../functions';


const ShowInfo = () => {
    const [id,setId] = useState ([]);

    //const [id,setId] = useState('');
    //const [name,setName] = useState ('');
    //const [surname,setSurname] = useState ('');
    //const [age,setAge] = useState ('');
    //const [dni,setDni] = useState ('');
    //const [gender,setGender] = useState ('');
    //const [modality,setModality] = useState ('');
    //const [title,setTitle] = useState ('');
    //const [operation,setOperation] = useState ('1');

    useEffect ( () =>{
        axios.get('https://weblogin.muninqn.gov.ar/api/Examen')
        .then(response => {
            setId(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    },[]);
    //console.log(personas.length)
    //if(personas.length === 0)
    //return <h1>No hay personas</h1>

    return (
        <div className='App'>
            <ul>

            </ul>
        </div>
    )
}

export default ShowInfo