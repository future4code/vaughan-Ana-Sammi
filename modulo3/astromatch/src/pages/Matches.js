import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {aluno, baseUrl} from '../constants/constants'
import { MatchCard } from '../constants/style'


export default function Matches(props) {
    const [matches, setMatches] = useState([])
    

    useEffect(() => {
        getMatches()
      }, [])

    
    const getMatches = () => {
        axios.get(`${baseUrl}/${aluno}/matches`)
        .then((response) => {
            setMatches(response.data.matches)
            
        })
        .catch((error) => {
            alert("Você ainda não tem nenhum match! Continue tentando!")
        })
    }

    const personData = matches.map((person) => {
        return (
            <MatchCard>
                <img src={person.photo} alt={"Foto de perfil"}/>
                <p>{person.name}</p>
            </MatchCard>
        )
    })
  

    return (
        <div>
            {personData}           
            <button onClick={props.goHome}>Voltar</button>
        </div>
        
    )
}