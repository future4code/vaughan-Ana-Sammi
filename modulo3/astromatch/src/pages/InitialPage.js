import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {aluno, baseUrl} from '../constants/constants'
import {ProfileCard} from '../constants/style'


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
      console.log("funcionou", choice)
    })
    .catch((error) => {
      console.log("ahhhhh", error.response)
    })
  }


  const clearProfiles = () => {
    axios.put(`${baseUrl}/${aluno}/clear`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log("erro", error.response)
    })
  }


  return (
    <div className="App">
      <h1>Astromatch</h1>
      <ProfileCard>
        <img src={foto} alt={"Foto de perfil"}/>
        <h3> {nome}, {idade} </h3> 
        <p>{bio}</p>
        <button onClick={choosePerson}>LIKE</button>
        <button onClick={getProfile}>DISLIKE</button>
      </ProfileCard>
      <button onClick={props.goToMatch}> Meus Matches </button>
      <button onClick={clearProfiles}>LIMPAR</button>
    </div>
  );
}


