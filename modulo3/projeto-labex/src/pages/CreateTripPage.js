import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useProtectedPage, urlBase} from '../constants/constantes';
import axios from 'axios';
import {Button, Form, ContainerForm} from '../constants/style';

export default function CreateTripPage() {
    const token = window.localStorage.getItem('token')
    useProtectedPage();
    const [form, setForm] = useState({name:"", planet:"", date:"", description:"", durationInDays:""})
    
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    };
   
    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${urlBase}/trips`, form, { 
            headers: { 
                auth: token }})
        .then((res) => {
            alert("Viagem cadastrada com sucesso!")  
            setForm({name:"", planet:"", date:"", description:"", durationInDays:""})

        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <ContainerForm>
            <h2>Criar Viagem</h2>
            <Form onSubmit={createTrip}>
                <input
                    name="name"
                    value={form.name} 
                    type="text" 
                    onChange={onChange} 
                    placeholder="Nome da Viagem"
                />

                <input
                    name="planet"
                    value={form.planet} 
                    type="text" 
                    onChange={onChange} 
                    placeholder="Planeta"
                />

                <input
                    name="date"
                    value={form.date} 
                    type="date" 
                    onChange={onChange} 
                    placeholder="Data"
                />

                <textarea
                    name="description"
                    value={form.description} 
                    type="text" 
                    onChange={onChange} 
                    placeholder="Descrição"
                />

                <input
                    name="durationInDays"
                    value={form.durationInDays} 
                    type="text" 
                    onChange={onChange} 
                    placeholder="Duração em dias"
                />

                <Button type="submit"> Criar </Button>
            </Form>

            <Button onClick={goBack}> Voltar </Button>
        </ContainerForm>
    )
}

