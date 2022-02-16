import react from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function AdminHomePage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/login', {replace: true}) }

    const goToCreate = () => {
        navigate("/admin/trips/create") }

    const goToDetail = () => {
        navigate('/admin/trips/details') }
    


    return (
        <div>
            <h2>Área do administrador</h2>
            <button onClick={goBack}>voltar</button>
            <button onClick={goToCreate}>criar viagem</button>
            <button onClick={goBack}>logout</button>
            <button onClick={goToDetail}>Detalhes das viagens</button>
        </div>
    )
}