import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {aluno, baseUrl} from '../constants/constants'
import {ProfileCard, CardNome, ProfilePhoto, LikeButton, NoButton, IconDislike, Heart} 
from '../constants/style'



export default function InitialPage(props) {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [foto, setFoto] = useState('')
  const [bio, setBio] = useState('')
  const [personId, setPersonId] = useState('')
  const [choice, setChoice] = useState('false')


  useEffect(() => {
    getProfile()
  }, [])


  const getProfile = () => {
    const url = `${baseUrl}/${aluno}/person`
    axios.get(url)
    .then((res) => {
      setNome(res.data.profile.name)
      setIdade(res.data.profile.age)
      setFoto(res.data.profile.photo)
      setBio(res.data.profile.bio)
      setPersonId(res.data.profile.id)
    })
    .catch((erro) => console.log(erro.response))
  }


  const choosePerson = () => {
    const body = {
      id: personId,
      choice: true
    }
    axios.post(`${baseUrl}/${aluno}/choose-person`, body)
    .then((res) => {
      setChoice(true)
      getProfile(aluno)
      if(res.data.isMatch === true) {
        alert(`Você deu um match com ${nome}!`)
      }
    })
    .catch((error) => {})
  }


  const clearProfiles = () => {
    axios.put(`${baseUrl}/${aluno}/clear`)
    .then((res) => {}) 
    .catch((error) => {})
  }


  return (
    <div>

      

      <ProfileCard >
        <h1> Astromatch </h1>
        <button onClick={props.goToMatch}> Meus Matches </button>
        <ProfilePhoto src={foto} alt={"Foto de perfil"}/>
        <CardNome>
          <h3> {nome}, {idade} </h3> 
          <p>{bio}</p>
        </CardNome>
        <LikeButton onClick={choosePerson}><Heart/></LikeButton>
        <NoButton onClick={getProfile}> <IconDislike/> </NoButton>
      </ProfileCard>

      
      <button onClick={clearProfiles}>LIMPAR</button>
    </div>
  );
}


