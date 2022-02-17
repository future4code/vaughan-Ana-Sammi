import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {useProtectedPage} from '../constants/constantes'

export default function CreateTripPage() {
    useProtectedPage();
    
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