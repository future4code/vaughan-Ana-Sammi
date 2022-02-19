import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { urlBase } from '../constants/constantes';
import {Form, ContainerForm, Button} from '../constants/style'
import Select from 'react-select'
import countryList from 'react-select-country-list'


export default function ApplicationFormPage() {
    const [value, setValue] = useState('')
    const [trips, setTrips] = useState([])
    const [form, setForm] = useState({name:"", age:"", applicationText:"", profession:""})
    const [id, setId] = useState('')
    const navigate = useNavigate()
 
    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get(`${urlBase}/trips`)
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const goToHome = () => {
        navigate('/')
    }

    const goBack = () => {
        navigate(-1)
    }

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    };

    const onChangeSelect = (event) => {
        setId(event.target.value)
    }

    
    const CountrySelector = () => {
        const options = useMemo(() => countryList().getData(), [])
        const changeHandler = value => {
          setValue(value)
        }
        return <Select className="country" options={options} value={value} onChange={changeHandler} />
      }


    const applyToTrip = () => {
        axios.post(`${urlBase}/trips/${id}/apply`, {...form, country: value.label})
        .then((res) => {
           alert("Formulário enviado com sucesso!")
           
        })
        .catch((error) => {
            alert("Algo está errado. Tente novamente.")
        })
    }

    const preventReload =  (event) => {
        event.preventDefault()
        applyToTrip()
        setForm({name:"", age:"", applicationText:"", profession:""})
    }

    const tripName = trips.map((data) => {
        return (
            <option key={data.id} value={data.id}> {data.name} </option>
        )
    })


    return (
        <ContainerForm>
           <h2>Formulário de Aplicação</h2>
           <Form onSubmit={preventReload}>
                <select onChange={onChangeSelect}>
                    <option value="">Escolha uma viagem... </option>
                    {tripName}
                </select>
                <input
                    name="name"
                    value={form.name} 
                    type="text" 
                    onChange={onChange} 
                    placeholder="Nome"
                />
                <input 
                    name="age"
                    value={form.age}
                    type="text" 
                    onChange={onChange} 
                    placeholder="Idade"
                />
                <textarea
                    name="applicationText"
                    value={form.applicationText}
                    type="text" 
                    onChange={onChange} 
                    placeholder="Application text"
                />
                <input 
                    name="profession"
                    value={form.profession}
                    type="text" 
                    onChange={onChange}
                    placeholder="Profissão"
                />
                {CountrySelector()}
                <Button type="submit">Enviar</Button>
           </Form>
           
           <Button onClick={goToHome}> Voltar para Homepage </Button>
           <Button onClick={goBack}> Voltar para Viagens </Button>
        </ContainerForm>
    )
}