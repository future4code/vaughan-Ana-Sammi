import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { urlBase, useProtectedPage, token } from '../constants/constantes';
import axios from 'axios'

export default function TripDetailsPage() {
    const params = useParams()
    const idTrip = params.id;

    useProtectedPage()

    useEffect(() => {
        getTripDetails()}, [] )
        
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login', {replace: true}) }

    const goBack = () => {
        navigate(-1) }

    const getTripDetails = () => {
        axios.get(`${urlBase}/trip/${idTrip}`, { 
            headers: { 
                auth: token }})
        .then((res) => {
           console.log(res.data.trip)   
        })
        .catch((err) => {
            console.log(err.response)
        })
    }


    return (
        <div>
            
            <button onClick={goToLogin}>Logout</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}