import react from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";


export default function ApplicationFormPage() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate(-2)
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
           <h2>Formulário de aplicação</h2>
           <form>
               Area 
               do
               formulario
           </form>
           <button type="submit">Enviar</button>
           <button onClick={goToHome}>Voltar para home page</button>
           <button onClick={goBack}>Voltar para viagens</button>
        </div>
    )
}