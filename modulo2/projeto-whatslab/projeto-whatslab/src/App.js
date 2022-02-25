import React from 'react';
import styled from 'styled-components';
import Baloes from './components/Baloes/Baloes';

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100vw;
`
const Titulo = styled.h1`
  font-size: 1.5rem;
  background-color: #DB7093;
  width: 520px;
  text-align: center;
  
`
const AreaMensagem = styled.div`
  width: 500px;
  height: 200px;
  background: linear-gradient(#FFC0CB, #FFE4E1);
  display: flex;
  flex-direction: column ;
  height: 90%;
  padding: 10px;
`
const AreaInput = styled.div`
  display: flex;
  justify-content:flex-start;
  width: 500px;
  margin-top: 1%;

`
const AreaInputNome = styled.input`
  width: 20%; 
  outline-color: #DB7093;
  border-radius: 5px;
  height: 1.1rem;
  padding-left: 5px;
  
`
const AreaInputMsg = styled.input`
  width: 70%;
  outline-color: #DB7093;
  border-radius: 5px;
  padding-left: 5px;
  margin: 0 5px;
`

const Botao = styled.button`
  border-radius: 5px;
  background-color: #DB7093;
  color: white;
`

const Mensagem = styled.div`
  background-color: #FFF0F5;
  align-self: flex-start; 
  margin-bottom: 5px; 
  border-radius: 5px;
  padding: 0 5px;
  font-weight: 450;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  line-height: 1.5em;
`
const Nome = styled.div`
  font-weight: bold; 
  margin-right: 5px;
  
`


class App extends React.Component {
  state = {
    mensagens: [
      {
        nomeUsuario: "",
        mensagemUsuario: "",
      } 
    ],

    valorInputNome: "",
    valorInputMensagem: "",
    
  }  
   
  enviarMensagem = () => {
    const novaMensagem = {
      nomeUsuario: `${this.state.valorInputNome}: `,
      mensagemUsuario: this.state.valorInputMensagem
    };

    const novasMsg = [...this.state.mensagens, novaMensagem];
    
    this.setState({mensagens: novasMsg});
    this.setState({valorInputNome: ''});
    this.setState({valorInputMensagem: ''})
  }

onChangeInputNome = (event) => {
  this.setState({valorInputNome: event.target.value});
}

onChangeInputMensagem = (event) => {
  this.setState({valorInputMensagem: event.target.value})
}


render() {

  const mensagemPronta = this.state.mensagens.map((msg) => {
    return (
      
      <Mensagem>
        <Nome>{msg.nomeUsuario } </Nome>
        <div>{msg.mensagemUsuario}</div>
      </Mensagem>
      
    )
  });

return (
  <>
  <ContainerPrincipal>
    <Titulo>
      WhatsLab
    </Titulo>
    <AreaMensagem>
      {mensagemPronta}
    </AreaMensagem>
    <AreaInput>
      <AreaInputNome
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder="Nome"
      />
      <AreaInputMsg
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder="Mensagem"
      />
      <Botao onClick={this.enviarMensagem}>Enviar</Botao>
    </AreaInput>
  </ContainerPrincipal>
  </>
)
}
}

export default App;
