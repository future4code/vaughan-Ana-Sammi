import react from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { urlBase } from '../constants/constantes';


export default function ApplicationFormPage(props) {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate(-2)
    }

    const goBack = () => {
        navigate(-1)
    }

    const applyToTrip = (id) => {
        const body = {
            
        }
        axios.post(`${urlBase}/${id}/apply`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
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