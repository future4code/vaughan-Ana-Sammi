import React from 'react'
import axios from 'axios'
import earth from '../img/earth.jpg'
import {Container, ButtonList, ButtonLogin} from '../constants/style'

export default function HomePage() {
    return (
        <div style={{backgroundImage: `url(${earth})`,
            width: '100vw', height: '100vh', backgroundSize: 'cover'}}>

            <ButtonLogin>Login</ButtonLogin>
            <Container>
                <h1>Odissey</h1>
                <ButtonList>Viajar</ButtonList>  
            </Container>
            
        </div>
    )
}