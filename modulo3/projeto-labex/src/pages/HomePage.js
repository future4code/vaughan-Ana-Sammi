import React from 'react'
import earth from '../img/earth.jpg'
import {Container, BackButton } from '../constants/style'
import { useNavigate} from "react-router-dom";


export default function HomePage() {
    const navigate = useNavigate()

    const goToList = () => {
        navigate("/trips/list")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <div style={{backgroundImage: `url(${earth})`,
            width: '100vw', height: '100vh', backgroundSize: 'cover'}}>

            <BackButton style={{position: 'absolute', right: '2rem', top: '2rem'}}onClick={goToLogin}>Login</BackButton>
            <Container>
                <h1>Odissey</h1>
                <BackButton style={{width: '10rem', height: '2rem'}}onClick={goToList}>Viajar</BackButton>  
            </Container>
            
        </div>
    )
}