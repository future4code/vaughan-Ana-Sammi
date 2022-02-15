import react from 'react'
import axios from 'axios'
import {CardTrip} from '../constants/style'
import { useNavigate, useParams } from "react-router-dom";

export default function ListTripsPage() {
    const navigate = useNavigate()

    const goToApplication = () => {
        navigate("/trips/application")
    }

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
           <h2>Lista de viagens</h2>
           <CardTrip>
                viagem para a lua
           </CardTrip>
           <button onClick={goToApplication}>Inscrever-se para uma viagem</button>
           <button onClick={goBack}>Voltar</button>
        </div>
    )
}