import React from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import Playlist from './pages/Playlist.js'


class App extends React.Component {
  state = {
    playlists: [], 
    inputPlaylist:""   
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


  // deletePlaylist = (id) => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
  //   const auth = {headers: {Authorization: "ana-sammi-vaughan"}}
  //   .del(url, auth)
  //   .then((response) => {
  //     console.log(response)
  //     this.getAllPlaylists()
  //   })
  //   .catch((error) => {
  //     console.log(error.response.data.message)  
  //   })
  // }


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
        <Playlist/>
      </div>
    )
  }
  
}

export default App;
