import React from 'react'
import axios from 'axios'

export default class Playlist extends React.Component {
    state = {
        playlists: [],
        // inputPlaylist: ""
    }

    componentDidMount() {
        this.getAllPlaylists()
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

    deletePlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        const auth = { headers: { Authorization: "ana-sammi-vaughan" } }
            .del(url, auth)
            .then((response) => {
                console.log(response)
                this.getAllPlaylists()
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }

    render() {
        const listaPlaylists = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
                </div>
            )
        })
        console.log(this.state)
        return (
            <div>
                <h3>Playlists</h3>
                {listaPlaylists}
            </div>)
    }



}