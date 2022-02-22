import axios from 'axios'
import {baseURL} from '../constants/url'
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, navigate) => {
    axios.post(`${baseURL}/users/login`, body)
    .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate)
    })
    .catch((err) => {
        alert('Erro ao entrar. Tente novamente.')
    })
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${baseURL}/users/signup`, body)
    .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        alert("Usuário cadastrado com sucesso!")
        clear()
        goToFeed(navigate)
    })
    .catch((err) => {
        alert("Erro ao cadastrar usuário. Tente novamente.")
    })
}