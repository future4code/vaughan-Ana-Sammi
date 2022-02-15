import react from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function CreateTripPage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>Criar viagem</h2>
            <form>
                formulario para criar viagem    
            </form>
            
            <button type="submit">criar</button>
            <button onClick={goBack}>voltar</button>
        </div>
    )
}