import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { urlBase, useProtectedPage, token } from '../constants/constantes';
import axios from 'axios';
import {CardTrip, ContainerForm, Button, Header, CardTripDetails} from '../constants/style'

export default function TripDetailsPage() {
    useProtectedPage();
    const params = useParams();
    const idTrip = params.id;
    const [tripDetail, setTripDetail] = useState("");
    
    useEffect(() => {
        getTripDetails()}, [] )
        
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login', {replace: true}) }

    const goBack = () => {
        navigate(-1) }

    const getTripDetails = () => {
        axios.get(`${urlBase}/trip/${idTrip}`, { 
            headers: { 
                auth: token }})
        .then((res) => {
            console.log(res.data.trip)
           setTripDetail(res.data.trip)   
        })
        .catch((err) => {
            console.log(err.response)
        })}

    const approved = tripDetail.approved && tripDetail.approved.map((person) => {
            return (
                <div>
                    <h4>Aprovados</h4>
                    <p>{person.name}, {person.age} anos</p>
                </div>
            )
    })


    const decideCandidate = (id, status) => {
        const body = {
            approve: status
        }
        axios.put(`${urlBase}/trips/${idTrip}/candidates/${id}/decide`, body, { 
            headers: { 
                auth: token }})
        .then((res) => {
            getTripDetails()
        })
        .catch((err) => {
            console.log(err.response)
        })}


    const pending = tripDetail.candidates && tripDetail.candidates.map((person) => {
        return (
            <div>
                <h4>Pendentes</h4>
                <p><b>{person.name}, {person.age} anos</b></p>
                <p><b>Profissão:</b>  {person.profession}</p>
                <p><b>País:</b> {person.country}</p>
                <p><b>Sobre:</b> {person.applicationText}</p>
                <Button onClick={() => {decideCandidate(person.id, true)}}>APROVAR</Button>
                <Button onClick={() => decideCandidate(person.id, false)}>REPROVAR</Button>
            </div>
        )})


    return (
        <ContainerForm>
            <Header>
                <Button onClick={goToLogin}>Logout</Button>
                
                <Button onClick={goBack}>Voltar</Button>
                
            </Header>
            
            <CardTripDetails>
                <h3>{tripDetail.name}</h3>
                <p><b>Data:</b> {tripDetail.date}</p>
                <p>{tripDetail.description}</p>
                <p><b>Duração:</b> {tripDetail.durationInDays} dias</p>
                <p><b>Local:</b> {tripDetail.planet}</p>   
                <h4>Candidatos: </h4>
                    {approved}
                    {pending}
            </CardTripDetails>

        </ContainerForm>
    )
}