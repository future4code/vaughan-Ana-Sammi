import React from 'react'
import axios from 'axios'
import earth from '../img/earth.jpg'
import {Container, ButtonList, ButtonLogin} from '../constants/style'
import { useNavigate, useParams } from "react-router-dom";
import Router from '../router/Router'

export default function HomePage() {
    const navigate = useNavigate()
    const params = useParams()

    const goToList = () => {
        navigate("/trips/list")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <div style={{backgroundImage: `url(${earth})`,
            width: '100vw', height: '100vh', backgroundSize: 'cover'}}>

            <ButtonLogin onClick={goToLogin}>Login</ButtonLogin>
            <Container>
                <h1>Odissey</h1>
                <ButtonList onClick={goToList}>Viajar</ButtonList>  
            </Container>
            
        </div>
    )
}