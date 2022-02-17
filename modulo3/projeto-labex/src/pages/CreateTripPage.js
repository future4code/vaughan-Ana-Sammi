import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage, urlBase, token } from '../constants/constantes';
import axios from 'axios'

export default function CreateTripPage() {
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
        axios.post(`${urlBase}/trips`, { 
            headers: { 
                auth: token }}, form)
        .then((res) => {
            console.log(res.data)    
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <div>
            <h2>Criar viagem</h2>
            <form onSubmit={createTrip}>
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

                <button type="submit"> Criar </button>
            </form>

            <button onClick={goBack}> Voltar </button>
        </div>
    )
}