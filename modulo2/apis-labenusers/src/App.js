import React from 'react'
import axios from 'axios'
import Cadastro from './pages/Cadastro.js'
import Busca from './pages/Busca.js'
import Detalhe from './pages/Detalhe.js'


class App extends React.Component {
  state={
    telaAtual: "cadastro",
  }

  alternaTelas = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaBusca={this.irParaBusca} />
      case "busca":
        return <Busca irParaCadastro={this.irParaCadastro} irParaDetalhe={this.irParaDetalhe} />
      case "detalhe":
        return <Detalhe irParaDetalhe={this.irParaDetalhe} irParaBusca={this.irParaBusca} />
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaBusca = () => {
    this.setState({telaAtual: "busca"})
  }

  irParaDetalhe = () => {
    this.setState({telaAtual: "detalhe"})
  }


  render() {
    return (
      <div>
       {this.alternaTelas()}
      </div>
    );
  }
}


export default App;
