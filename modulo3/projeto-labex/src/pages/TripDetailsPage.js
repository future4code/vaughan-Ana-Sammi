import react from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function TripDetailsPage() {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login', {replace: true}) }

    const goBack = () => {
        navigate(-1) }

    return (
        <div>
            <h2>Nome da viagem</h2>
            <div>
                descrição da viagem
            </div>
            <div>
               card de candidatos pendentes
               <button>aprovar</button>
               <button>reprovar</button>
            </div>
            <h4>Candidatos aprovados</h4>
            <ul>
                <li>nome dos aprovados</li>
            </ul>
            <button onClick={goToLogin}>logout</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}