import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { urlBase, useProtectedPage, token } from '../constants/constantes';
import axios from 'axios'

export default function TripDetailsPage() {
    useProtectedPage()

    // const [trip, setTrip] = useState({})

    useEffect(() => {
        getTripDetails()}, [] )
        
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login', {replace: true}) }

    const goBack = () => {
        navigate(-1) }

    const getTripDetails = (id) => {
        axios.get(`${urlBase}/trip/id`, { 
            headers: { 
                auth: token }})
        .then((res) => {
            console.log(res.data.trip)    
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    // const tripDetail = trip.map((item) => {
    //     return (
    //         <div>
    //             {item.name}
    //         </div>
    //     )
    // })
 
    return (
        <div>
            {/* {tripDetail} */}
            VIAGENS
            <button onClick={goToLogin}>Logout</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}