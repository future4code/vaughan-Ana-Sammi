import React from 'react';
import axios from 'axios';
import {url} from '../../constants/constantes'
import styled from 'styled-components'



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
            this.setState({characterList: response.data.results})
        )
        .catch((error) => 
            console.log(error.response)
        )
    }

    goToDetailPage = (id) => {
        axios.get(`${url}/people/${id}/`)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.response))
    }


    render() {
        const ListaNomes = this.state.characterList.map((character) => {
            return (
                <p key={character.name}
                onClick={() => {this.props.goToDetail(character.url)}}
                >{character.name}</p>
            ) 
        })

        
        return (
            <div>
                <h2>Lista de Personagens</h2>
                <div>{ListaNomes}</div>
            </div>
        )
    }
}