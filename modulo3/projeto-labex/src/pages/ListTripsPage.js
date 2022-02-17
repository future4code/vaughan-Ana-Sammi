import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CardTrip, ContainerList } from '../constants/style'
import { urlBase } from '../constants/constantes';
import { useNavigate} from "react-router-dom";

export default function ListTripsPage() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getTrips()
    }, [])

    const navigate = useNavigate();

    const goToApplication = () => {
        navigate("/trips/application")
    };

    const goBack = () => {
        navigate(-1)
    };

    const getTrips = () => {
        axios.get(`${urlBase}/trips`)
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }


    const tripData = trips.map((trip) => {
        return (
            <CardTrip key={trip.id}>
                <h4>{trip.name}</h4>
                <p>Planeta:{trip.planet}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Descrição: {trip.description}</p>
                <p>Data: {trip.date} </p>
            </CardTrip>
        )
    })

    return (
        <ContainerList>
           <h2>Viagens Disponíveis</h2>
            {tripData}
           <button 
            tripData={tripData} 
            onClick={goToApplication}
            >Inscrever-se para uma viagem</button>
           <button onClick={goBack}>Voltar</button>
        </ContainerList>
    )
}