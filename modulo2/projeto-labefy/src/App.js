import React from 'react'
import axios from 'axios'
import { MainContainer, Titulo, CriarPlaylist, ListaPlaylists, ListaMusicas, Subtitulo,
Container, Botao, NomesPlaylists, Player} from './styles'


class App extends React.Component {
  state = {
    playlists: [],
    tracks: [],
    inputPlaylist: "",
    inputName: "",
    inputArtist: "",
    inputUrl: "",
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tracks !== prevState.tracks) {
      console.log("componente atualizou tracks")
      this.adicionarMusicas()
    }
  }


  adicionarMusicas = () => {
    return <div>
    <input
      placeholder="Nome da Música"
      value={this.state.inputName}
      onChange={this.handleInputName}
    />
    <input
      placeholder="Artista"
      value={this.state.inputArtist}
      onChange={this.handleInputArtist}
    />
    <input
      placeholder="Link da música"
      value={this.state.inputUrl}
      onChange={this.handleInputUrl}
    />
    <button onClick={this.addTrackToPlaylist}>Adicionar música</button>
  </div>
  }

  handleInputName = (event) => {
    this.setState({ inputName: event.target.value })
  }

  handleInputArtist = (event) => {
    this.setState({ inputArtist: event.target.value })
  }

  handleInputUrl = (event) => {
    this.setState({ inputUrl: event.target.value })
  }
  handleInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value })
  }

  getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const auth = { headers: { Authorization: "ana-sammi-vaughan" } }
    axios
      .get(url, auth)
      .then((response) => {
        this.setState({ playlists: response.data.result.list })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }


  createPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = { name: this.state.inputPlaylist }
    const auth = { headers: { Authorization: "ana-sammi-vaughan" } }
    axios
      .post(url, body, auth)
      .then((response) => {
        this.getAllPlaylists()
        this.setState({ inputPlaylist: "" })
        alert("Playlist criada com sucesso!")

      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  };

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    const auth = { headers: { Authorization: "ana-sammi-vaughan" } }
    axios
      .delete(url, auth)
      .then((response) => {
        this.getAllPlaylists()
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  getPlaylistTracks = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const auth = { headers: { Authorization: "ana-sammi-vaughan" } }
    axios
      .get(url, auth)
      .then((response) => {
        this.setState({ tracks: response.data.result.tracks })
        console.log(response.data.result)

      })
      .catch((error) => {
        console.log(error.response.data.message)
      })

  }

  addTrackToPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const auth = { headers: { Authorization: "ana-sammi-vaughan" } }
    const body = {
      name: this.state.inputName,
      artist: this.state.inputArtist,
      url: this.state.inputUrl
    }
    axios
      .post(url, auth, body)
      .then((response) => {
        this.setState({ tracks: response.data.result })
        console.log(response.data)
        this.getPlaylistTracks()

      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }
  


  render() {
    const listaPlaylists = this.state.playlists.map((playlist) => {
      return (
        <ListaPlaylists key={playlist.id}>
          <p>{playlist.name}</p>
          <Botao onClick={() => this.deletePlaylist(playlist.id)}>X</Botao>
          <Botao onClick={() => this.getPlaylistTracks(playlist.id)}>+</Botao>
        </ListaPlaylists>
      )
    })

    const nomePlaylist = this.state.playlists.map((playlist) => {
      return <NomesPlaylists key={playlist.id}>
                {playlist.name}
            </NomesPlaylists>
    })

    return (
      <MainContainer>
        <Titulo>Labefy</Titulo>
        <CriarPlaylist>
          <input
            placeholder="Nome da playlist"
            value={this.state.inputPlaylist}
            onChange={this.handleInputPlaylist}
          />
          <button onClick={this.createPlaylist}>Criar playlist</button>
        </CriarPlaylist>

        <Container>
          <Subtitulo>Suas Playlists</Subtitulo>
          {listaPlaylists}
        
          <ListaMusicas>
            {this.state.tracks.length > 0 && this.state.tracks.map((track) => {
              return (
                
                  <div key={track.id}>
                    <p>{nomePlaylist.id}</p>
                    <li>{track.name}</li>
                    <Player src={track.url} controls></Player>
                  </div>
              )
            })}
            {/* {this.adicionarMusicas()} */}
          </ListaMusicas>
          
          </Container>
      </MainContainer>
    )
  }
}

export default App;
