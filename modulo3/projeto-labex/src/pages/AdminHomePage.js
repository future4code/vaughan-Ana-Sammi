import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage, urlBase, token } from '../constants/constantes'

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
            <div key={trip.id}>
            <button  onClick={() => {
                navigate(`/admin/trips/details/${trip.id}`)
            }}>
                <h5>{trip.name}</h5>
            </button>
            <button onClick={() => {
                if (window.confirm("Você tem certeza que deseja deletar essa viagem?") === true) {
                    axios.delete(`${urlBase}/trips/${trip.id}`, { 
                    headers: { 
                        auth: token }})
                    .then((res) => {
                        getTrips()
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
                } 
                    
            }}> DELETE
            </button>
           </div>
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