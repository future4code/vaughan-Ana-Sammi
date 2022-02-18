import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage, urlBase } from '../constants/constantes'

export default function AdminHomePage() {
    useProtectedPage()

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getTrips()
    }, [])

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/login', { replace: true })
    }

    const goToCreate = () => {
        navigate("/admin/trips/create")
    }

    const getTrips = () => {
        axios.get(`${urlBase}/trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    const tripDetails = trips.map((trip) => {
        return (
            <button key={trip.id} onClick={() => {
                navigate(`/admin/trips/details/${trip.id}`)
            }}>
                <h5>{trip.name}</h5>
            </button>
        )})

    


    return (
        <div>
            <h2>Área do administrador</h2>
            {tripDetails}
            <button onClick={goBack}> Voltar </button>
            <button onClick={goToCreate}> Criar viagens </button>
            <button onClick={goBack}> Logout </button>
            
        </div>
    )
}