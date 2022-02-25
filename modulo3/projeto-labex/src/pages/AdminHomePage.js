import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useProtectedPage, urlBase, token } from '../constants/constantes'
import { Button, CardName, ContainerForm, DeleteButton } from '../constants/style'

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
            <CardName key={trip.id}>
            <button onClick={() => {
                navigate(`/admin/trips/details/${trip.id}`)
            }}>
                {trip.name}
            </button>
            <DeleteButton onClick={() => {
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
                    
            }}> 
            </DeleteButton>
            
           </CardName>
           
        )})

    


    return (
        <ContainerForm>
            <h2>Área do Administrador</h2>
            {tripDetails}
            
            <Button onClick={goToCreate}> Criar Nova Viagem </Button>
            <Button onClick={goBack}> Voltar </Button>
            <Button onClick={goBack}> Logout </Button>
            
        </ContainerForm>
    )
}