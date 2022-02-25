import React from 'react';
import { ContainerForm } from './estilo';

export default class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Etapa 3 - Informações gerais de ensino
                </h1>

                <ContainerForm>
                    <p>5. Por que você não iniciou um curso de graduação?</p>
                    <input/>
                    <p>6. Você fez algum curso complementar?</p>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de Inglês</option>
                    </select>
                </ContainerForm>
               
            </div>
        );
    }   
}