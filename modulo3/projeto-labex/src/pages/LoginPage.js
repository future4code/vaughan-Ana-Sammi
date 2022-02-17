import React, {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {urlBase} from '../constants/constantes'
import axios from 'axios'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const pathParams = useParams()
    const id = pathParams.id

    const goToAdmin = () => {
        navigate('/admin/:id')
    };

    const goBack = () => {
        navigate('/')
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    };

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${urlBase}/login`, body)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token)
            if (res.data.success) {
                goToAdmin()
            } 
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <input 
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />
            <input 
                placeholder="Senha"
                type="password"
                value={password}
                onChange={onChangePassword}
            />

            <button type="submit" onClick={onSubmitLogin}>Login</button>
            <button onClick={goBack}>voltar</button>
        </div>
    )
}