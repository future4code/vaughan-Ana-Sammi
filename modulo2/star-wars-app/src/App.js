import React from 'react'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage.js'
import CharacterListPage from './pages/CharacterListPage/CharacterListPage.js'


export default class App extends React.Component {
  state = {
    telaAtual: "list"
  }

  trocarTela = () => {
    switch(this.state.telaAtual){
      case 'detail':
        return <CharacterDetailPage />
      case 'list':
        return <CharacterListPage/>
      default:
        return <CharacterListPage/>
    }
  }

  render() {
    return (
      <div className="App">
       <h1>Star Wars</h1>
       <CharacterDetailPage/>
       <CharacterListPage/>
      </div>
    );
  }
}

