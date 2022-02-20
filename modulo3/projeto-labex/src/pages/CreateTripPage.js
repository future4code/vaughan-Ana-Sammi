import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useProtectedPage, urlBase} from '../constants/constantes';
import axios from 'axios';
import {Button, Form, ContainerForm} from '../constants/style';


export default function CreateTripPage() {
    // const [startDate, setStartDate] = useState(null)
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
                    required
                    minlength="5"
                />

                <input
                    name="planet"
                    value={form.planet} 
                    type="text" 
                    onChange={onChange} 
                    placeholder="Planeta"
                    required
                />
               
                <input
                    name="date"
                    value={form.date} 
                    type="date" 
                    onChange={onChange} 
                    placeholder="Data"
                    required
                    min={new Date()}
                />

                <textarea
                    name="description"
                    value={form.description} 
                    type="text" 
                    onChange={onChange} 
                    placeholder="Descrição"
                    required
                    minlength="30"
                />

                <input
                    name="durationInDays"
                    value={form.durationInDays} 
                    type="number" 
                    onChange={onChange} 
                    placeholder="Duração em dias"
                    required
                    min="50"
                />

                <Button type="submit"> Criar </Button>
            </Form>

            <Button onClick={goBack}> Voltar </Button>
        </ContainerForm>
    )
}

