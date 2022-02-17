import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export const urlBase = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/ana-sammi-vaughan'

export const useProtectedPage = () => {
    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')
    useEffect(() => {
        if(token === null) {
            console.log('Não está logado')
            navigate('/login', {replace: true})
        }
    }, [])
}

export const token = window.localStorage.getItem('token')