import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [foto, setFoto] = useState('')
  const [bio, setBio] = useState('')

  const aluno = 'ana'

  useEffect(() => {
    getProfile(aluno)
  }, [])

  const getProfile = (ana) => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${ana}/person`
    axios.get(url)
    .then((res) => {
      setNome(res.data.profile.name)
      setIdade(res.data.profile.age)
      setFoto(res.data.profile.photo)
      setBio(res.data.profile.bio)
    })
    .catch((erro) => console.log(erro.response))
  }

  

  return (
    <div className="App">
      <h1>Astromatch</h1>
      <div>
        <h3> {nome} </h3>
        <p>{idade}</p>
        <img src={foto} alt={"Foto de perfil"}/>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default App;
