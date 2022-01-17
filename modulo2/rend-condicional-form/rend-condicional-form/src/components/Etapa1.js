import React from 'react';
import styled from 'styled-components';

export default class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Etapa 1 - Dados Gerais
                </h1>

                <div>
                    <p>1. Qual é o seu nome?</p>
                    <input/>
                    <p>2. Qual é a sua idade?</p>
                    <input/>
                    <p>3. Qual é o seu e-mail?</p>
                    <input/>
                    <p>4. Qual é a sua escolaridade?</p>
                    <select>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>
                </div>
               
            </div>
        );
    }
    
}