import React, {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {urlBase} from '../constants/constantes'
import axios from 'axios'
import {Form, ContainerForm} from '../constants/style'

export default function LoginPage() {
    const [form, setForm] = useState({email:"", password:""})
    const navigate = useNavigate()
    const pathParams = useParams()
    const id = pathParams.id

    const goToAdmin = () => {
        navigate('/admin')
    };

    const goBack = () => {
        navigate('/')
    };


    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    };

    const onSubmitLogin = (event) => {
        event.preventDefault()
        axios.post(`${urlBase}/login`, form)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token)
            if (res.data.success) {
                goToAdmin()
            } 
        })
        .catch((err) => {
            alert("Verifique seu e-mail e senha")
        })
    }

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={onSubmitLogin}>
                <input 
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input 
                    name="password"
                    placeholder="Senha"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                    title={"A senha deve ter no mínimo 3 caracteresf"}
                />

                <button type="submit">Login</button>
            </form>
            
            <button onClick={goBack}>voltar</button>
        </div>
    )
}
