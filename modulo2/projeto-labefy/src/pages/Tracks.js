import React from 'react'
import axios from 'axios'

export default class Tracks extends React.Component {
    

    componentDidMount() {
        this.getPlaylistTracks()
    }

    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const auth = { headers: { Authorization: "ana-sammi-vaughan" } }
        axios
            .get(url, auth)
            .then((response) => {
                console.log(response.data.result)
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }

    render() {
        return (
            <div>
                {this.getPlaylistTracks}
                <button onClick={this.props.goToPlaylist}>Lista de Playlists</button>
            </div>
        )
    }

}