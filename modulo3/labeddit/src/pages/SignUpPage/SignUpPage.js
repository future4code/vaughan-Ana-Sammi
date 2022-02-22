import React from 'react'
import Button from '@mui/material/Button'
import SignUpForm from './SignUpForm'
import {goToLogin} from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'
import {Container} from './style'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const SignUpPage = () => {
    
    useUnprotectedPage()

    const navigate = useNavigate()

    return(
        <Container>
            <h2>Cadastro</h2>

            <SignUpForm/>

            <Button 
                variant={"text"} 
                color={"primary"} 
                onClick={() => goToLogin(navigate)}
                margin={"normal"}
            >
                Já é cadastrado? Fazer login
            </Button>

        </Container>
    )
}

export default SignUpPage;