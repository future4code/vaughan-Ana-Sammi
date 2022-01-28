import React from 'react'
import axios from 'axios'

export default class Playlist extends React.Component {
    state = {
        playlists: [],
        currentScreen: "playlists",
        tracks: [],
    }
    // labefy-ana-sammi.surge.sh
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
                console.log(response.data.result)
                // this.setState({tracks: response.data.result})

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
                    <button onClick={() => this.getPlaylistTracks(playlist.id)}>+</button>
                </div>
            )
        })

        console.log(this.state)
        return (
            <div>
                <h3>Playlists</h3>
                {listaPlaylists}
                <button onClick={() => this.props.goToTracks}>+</button>
            </div>)
    }



}