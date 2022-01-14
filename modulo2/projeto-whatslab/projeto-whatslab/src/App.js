import React from 'react';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid coral;
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
      nomeUsuario: `${this.state.valorInputNome}:`,
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
      <div>
        <p>
        {msg.nomeUsuario} {msg.mensagemUsuario}
        </p>
      </div>
    )
  });

return (
  <>
  <ContainerPrincipal>
    <div>
      WhatsLab
    </div>
    <div>
      {mensagemPronta}
    </div>
    <div>
      <input
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder="Nome de usuário"
      />
      <input
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder="Mensagem"
      />
      <button onClick={this.enviarMensagem}>Enviar</button>
    </div>
  </ContainerPrincipal>
  </>
)
}
}

export default App;
