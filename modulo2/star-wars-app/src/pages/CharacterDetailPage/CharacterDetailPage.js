import React from 'react';
import { url } from '../../constants/constantes';
import axios from 'axios'

export default class CharacterDetailPage extends React.Component {
    state = {
        character: []
    }

    getCharacter = (id) => {
        axios.get(`${url}/people/${id}/`)
        .then((response) => 
            this.setState({character: response.data})
            
        )
        .catch((error) => console.log(error.response))
    }
    

    render() {
        
        return (
            <div>
                {this.getCharacter}
                <button onClick={this.props.goToList}>Voltar</button>
            </div>
        )
    }
}