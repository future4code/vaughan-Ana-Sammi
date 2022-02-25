import React from 'react'
import earth from '../img/earth.jpg'
import {Container, Button } from '../constants/style'
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

            <Button style={{position: 'absolute', right: '2rem', top: '2rem'}}onClick={goToLogin}>Login</Button>
            <Container>
                <h1>Odissey</h1>
                <Button style={{width: '10rem', height: '2rem'}}onClick={goToList}>Viajar</Button>  
            </Container>
            
        </div>
    )
}