import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { urlBase } from '../constants/constantes';
import CountrySelector from '../constants/CountrySelector'
import {Form, ContainerForm} from '../constants/style'


export default function ApplicationFormPage(props) {
    const [form, setForm] = useState({name:"", age:"", appText:"", profession:"", country:""})
    const navigate = useNavigate()

    const goToHome = () => {
        navigate(-2)
    }

    const goBack = () => {
        navigate(-1)
    }

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    };


    const applyToTrip = (id, event) => {
        event.preventDefault()
        axios.post(`${urlBase}/${id}/apply`, form)
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }



    return (
        <ContainerForm>
           <h2>Formulário de aplicação</h2>
           <Form onSubmit={applyToTrip}>
                <input
                    name="name"
                    value={form.name} 
                    type="text" 
                    onChange={onChange} 
                    placeholder="Nome"
                />
                <input 
                    name="age"
                    value={form.age}
                    type="text" 
                    onChange={onChange} 
                    placeholder="Idade"
                />
                <textarea
                    name="appText"
                    value={form.appText}
                    type="text" 
                    onChange={onChange} 
                    placeholder="Application text"
                />
                <input 
                    name="profession"
                    value={form.profession}
                    type="text" 
                    onChange={onChange}
                    placeholder="Profissão"
                />
                <CountrySelector/>
                <button type="submit">Enviar</button>
           </Form>
           
           <button onClick={goToHome}> Voltar para home page </button>
           <button onClick={goBack}> Voltar para viagens </button>
        </ContainerForm>
    )
}