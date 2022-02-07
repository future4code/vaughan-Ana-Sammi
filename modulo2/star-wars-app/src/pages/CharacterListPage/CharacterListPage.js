import React from 'react';
import axios from 'axios';
import {url} from '../../constants/constantes'

export default class CharacterListPage extends React.Component {
    state = {
        characterList: []
    }

    componentDidMount() {
        this.getAllCharacters()
    }

    getAllCharacters = () => {
        axios.get(`${url}/people/`)
        .then((response) => 
            console.log(response.data)
        )
        .catch((error) => 
            console.log(error.response)
        )
    }


    render() {
        
        return (
            <div>
                <h2>Lista de Personagens</h2>
                
            </div>
        )
    }
}