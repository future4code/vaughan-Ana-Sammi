import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { urlBase, useProtectedPage, token } from '../constants/constantes';
import axios from 'axios';

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
                    <p>{person.name}, {person.age} anos</p>
                    <p> Profissão: {person.profession}</p>
                    <p> País: {person.country}</p>
                    <p> Sobre: {person.applicationText}</p>
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
                <p><b>{person.name}, {person.age} anos</b></p>
                <p><b>Profissão:</b>  {person.profession}</p>
                <p><b>País:</b> {person.country}</p>
                <p><b>Sobre:</b> {person.applicationText}</p>
                <button onClick={() => {decideCandidate(person.id, true)}}>APROVAR</button>
                <button onClick={() => decideCandidate(person.id, false)}>REPROVAR</button>
            </div>
        )})


    return (
        <div>
            <div>
                {tripDetail.name}
                {tripDetail.description}
                {tripDetail.durationInDays}
                {tripDetail.planet}
                {tripDetail.date}
            </div>

            <div>
                <h4>Candidatos Aprovados</h4>
                {approved}
            </div>

            <div>
                <h4>Candidatos Pendentes</h4>
                {pending}
            </div>

            <button onClick={goToLogin}>Logout</button>
            <button onClick={goBack}>Voltar</button>

        </div>
    )
}