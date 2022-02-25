import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {aluno, baseUrl} from '../../constants/constants'
import { MatchPerson, MatchesCard, BackButton, DeleteButton, MatchesButtons, Message } 
    from './matchesStyle'


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
            <MatchPerson key={person.id}>
                <img src={person.photo} alt={"Foto de perfil"}/>
                <p>{person.name}</p>
                <Message/>
            </MatchPerson>
        )
    })

    const clearProfiles = () => {
        axios.put(`${baseUrl}/${aluno}/clear`)
          .then((res) => {
            window.confirm("Você tem certeza que deseja deletar seus matches?")
            getMatches()
            })
          .catch((error) => { })
      }
  

    return (
        <div>
            <MatchesCard>
                <MatchesButtons>
                    <button onClick={props.goHome}><BackButton/></button>
                    <h3>Meus Matches</h3>
                    <button onClick={clearProfiles}> <DeleteButton/> </button>
                </MatchesButtons>       
                {personData} 
    
                 
                
            </MatchesCard>
            
        </div>
        
    )
}