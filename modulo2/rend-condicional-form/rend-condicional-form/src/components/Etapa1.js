import React from 'react';
import styled from 'styled-components';

export default class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Formulário
                </h1>

                <form>
                    <input>Nome</input>
                    <input>Idade</input>
                    <input>E-mail</input>
                    <select>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>
                </form>
                <button>Enviar</button>
            </div>
        )
    }
    
}