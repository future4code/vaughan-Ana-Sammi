import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { urlBase } from '../constants/constantes';
import axios from 'axios'

export default function TripDetailsPage() {
    const [tripDetail, setTripDetail] = useState({})

    const token = window.localStorage.getItem('token')

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login', {replace: true}) }

    const goBack = () => {
        navigate(-1) }

    useEffect(() => {
        axios.get(`${urlBase}/trip/NajS8OmMS0AMmcsLciq7`, { 
            headers: { 
                auth: token }})
        .then((res) => {
            console.log(res.data.trip)
           
        })
        .catch((err) => {
            console.log(err.response)
        })
    }, [])
    


    return (
        <div>
            <button onClick={goToLogin}>logout</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}