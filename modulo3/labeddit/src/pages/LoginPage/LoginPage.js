import React from 'react'
import Button from '@mui/material/Button'
import LoginForm from './LoginForm'
import {goToSignUp} from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'
import {Container} from './style'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()

    return(
        <Container>
            <h2>Login</h2>

            <LoginForm/>

            <Button 
                variant={"text"} 
                color={"primary"} 
                onClick={() => goToSignUp(navigate)}
                margin={"normal"}
            >
                Ainda não tem conta? Cadastre-se
            </Button>

        </Container>
    )
}

export default LoginPage;