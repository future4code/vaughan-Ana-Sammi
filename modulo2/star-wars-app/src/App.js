import React from 'react'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage.js'
import CharacterListPage from './pages/CharacterListPage/CharacterListPage.js'


export default class App extends React.Component {
  state = {
    telaAtual: "list",
    detailCharacterUrl: ""
  }

  trocarTela = () => {
    switch(this.state.telaAtual){
      case 'detail':
        return <CharacterDetailPage url={this.state.detailCharacterUrl} goToList={this.goToList}/>;
      case 'list':
        return <CharacterListPage goToDetail={this.goToDetail}/>;
      default:
        return <CharacterListPage/>;
    }
  }

  goToDetail = (url) => {
    this.setState({telaAtual: "detail", detailCharacterUrl: url})
  }

  goToList = () => {
    this.setState({telaAtual: "list", detailCharacterUrl: ""})
  }

  render() {
    return (
      <div className="App">
       <h1>Star Wars</h1>
       {this.trocarTela()}
      </div>
    );
  }
}

