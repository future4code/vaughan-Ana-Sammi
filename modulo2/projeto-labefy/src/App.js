import React from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import Playlist from './pages/Playlist.js'
import Tracks from './pages/Tracks'


class App extends React.Component {
  state = {
    playlists: [], 
    inputPlaylist:"",
    currentScreen: "playlists"   

  }

  // componentDidMount(){
  //   this.getAllPlaylists()
  // }

  handleInput=(event)=>{
    this.setState({inputPlaylist: event.target.value}) }

  // onClick=(event)=>{
  //   event.target.value
  // }

  createPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {name: this.state.inputPlaylist}
    const auth = {headers: {Authorization: "ana-sammi-vaughan"}}
    axios
    .post(url, body, auth)
    .then((response) => {
        this.setState({inputPlaylist: ""})
        alert("Playlist criada com sucesso!")
        this.getAllPlaylists()
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
};

changeScreen = () => {
  switch (this.state.currentScreen) {
      case "playlists":
          return <Playlist goToTracks={this.goToTracks}/>
      case "tracks":
          return <Tracks goToPlaylist={this.goToPlaylist}/>
      default:
          return <div>"Erro! Página não encontrada</div>
  }
}

goToPlaylist = () => {
  this.setState({currentScreen: "playlists"})
}

goToTracks = () => {
  this.setState({currentScreen: "tracks"})
}


  render() {
   
    return (
      <div>
        <h1>Labefy</h1>
        <input 
          placeholder="Nome da playlist"
          value={this.state.inputPlaylist}
          onChange={this.handleInput}
        />
        <button onClick={this.createPlaylist}>Criar playlist</button>
        {this.changeScreen()}
        
      </div>
    )
  }
  
}

export default App;
