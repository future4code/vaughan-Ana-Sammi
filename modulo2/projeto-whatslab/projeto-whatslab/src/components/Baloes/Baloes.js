import React from 'react';
import styled from 'styled-components';

const BalaoDeMensagem = styled.div`
    background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" 
        } else if (props.tipo === "outro") {
            return "#ffffff"
        }
    }};

    align-self: ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};

    margin-right: ${props => {
        if (props.tipo === 'eu') {
            return "1.5em"
        }
    }};

    margin-left: ${props => {
        if (props.tipo !== 'eu') {
            return "1.5em"
        }
    }};

    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em; 
    word-wrap: break-word;

`

    
class Baloes extends React.Component {

render() {
    const nome = this.props.valorInputNome.toLowerCase()   
    if (nome === "eu"){
      return (
        <BalaoDeMensagem tipo={'eu'}>
            {this.props.valorInputMensagem}
        </BalaoDeMensagem>
      )
    } else {
        return (
          <BalaoDeMensagem tipo={'outro'}>
            <div>{this.props.valorInputNome}</div>
            <div>{this.props.valorInputMensagem}</div>
          </BalaoDeMensagem>
        )
    }
}
}

export default Baloes;