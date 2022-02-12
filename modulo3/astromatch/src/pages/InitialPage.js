import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { aluno, baseUrl } from '../constants/constants'
import { ProfileCard, CardNome, ProfilePhoto, Dislike, Like, Matches, Buttons }
  from '../constants/style'



export default function InitialPage(props) {
  const [profile, setProfile] = useState({})
  const [choice, setChoice] = useState('false')


  useEffect(() => {
    getProfile()
  }, [])


  const getProfile = () => {
    const url = `${baseUrl}/${aluno}/person`
    axios.get(url)
      .then((res) => {
        setProfile(res.data.profile)
      })
      .catch((erro) => console.log(erro.response))
  }


  const choosePerson = () => {
    const body = {
      id: profile.id,
      choice: true
    }
    axios.post(`${baseUrl}/${aluno}/choose-person`, body)
      .then((res) => {
        getProfile(aluno)
        if (res.data.isMatch === true) {
          alert(`Você deu um match com ${profile.name}!`)
        }
      })
      .catch((error) => { })
  }


  const clearProfiles = () => {
    axios.put(`${baseUrl}/${aluno}/clear`)
      .then((res) => { })
      .catch((error) => { })
  }


  return (
    <div>



      <ProfileCard >
        <h1> Astromatch </h1>
        <ProfilePhoto src={profile.photo} alt={"Foto de perfil"} />
        <CardNome>
          <h3> {profile.name}, {profile.age} </h3>
          <p>{profile.bio}</p>
        </CardNome>
        <Buttons>
          <button onClick={getProfile}> <Dislike /> </button>
          <button onClick={props.goToMatch}> <Matches /> </button>
          <button onClick={choosePerson}><Like /></button>
        </Buttons>
      </ProfileCard>


      <button onClick={clearProfiles}>LIMPAR</button>
    </div>
  );
}


