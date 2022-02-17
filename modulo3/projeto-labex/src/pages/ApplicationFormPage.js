import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { urlBase } from '../constants/constantes';
import CountrySelector from '../constants/CountrySelector'
import {Form, ContainerForm} from '../constants/style'


export default function ApplicationFormPage(props) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [appText, setAppText] = useState('')
    const [profession, setProfession] = useState('')
    const [country, setCountry] = useState('')
    const navigate = useNavigate()

    const goToHome = () => {
        navigate(-2)
    }

    const goBack = () => {
        navigate(-1)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onChangeAppText = (e) => {
        setAppText(e.target.value)
    }
    const onChangeProfession = (e) => {
        setProfession(e.target.value)
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const applyToTrip = (id) => {
        const body = {
            name: name,
            age: age,
            applicationText: appText,
            profession: profession,
            country: country
        }
        axios.post(`${urlBase}/${id}/apply`, body)
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }



    return (
        <ContainerForm>
           <h2>Formulário de aplicação</h2>
           <Form>
                <input type="text" onChange={onChangeName} placeholder="Nome"/>
                <input onChange={onChangeAge} placeholder="Idade"/>
                <input onChange={onChangeAppText} placeholder="Application text"/>
                <input onChange={onChangeProfession} placeholder="Profissão"/>
                <CountrySelector/>
           </Form>
           <button type="submit">Enviar</button>
           <button onClick={goToHome}>Voltar para home page</button>
           <button onClick={goBack}>Voltar para viagens</button>
        </ContainerForm>
    )
}