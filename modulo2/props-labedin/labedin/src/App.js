import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/FotoPerfil.jpg';
import styled from 'styled-components';





function App() {
  
  const Subtitulo = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
  return (
    <div className="App">
      <div className="page-section-container">
        <Subtitulo>Dados pessoais</Subtitulo>
        <CardGrande 
          imagem= {FotoPerfil} 
          nome="Ana Sue" 
          descricao="Oi, eu sou a Ana Sue. Antiga Médica Veterinária, futura programadora e sempre curiosa."
        />

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

<div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno 
          imagem="https://i.pinimg.com/474x/cf/00/e9/cf00e9dbd04b0619b8a3b0a8bf9f7051.jpg" 
          descricao="Endereço: Rua do Limoeiro, 666" 
        />
        
        <CardPequeno
          imagem="https://img2.gratispng.com/20180501/spe/kisspng-computer-icons-email-symbol-mobile-phones-share-outline-5ae89c0216cc09.9181412515251937300934.jpg" 
          descricao="E-mail: ana@sue.com" 
        />
      </div>
        
        


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://i0.wp.com/wp.ufpel.edu.br/medvet/files/2020/06/teste-de-logo-mv.jpg?fit=505%2C519&ssl=1" 
          nome="Laboratório de Parasitologia" 
          descricao="Pesquisa muda o mundo" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
