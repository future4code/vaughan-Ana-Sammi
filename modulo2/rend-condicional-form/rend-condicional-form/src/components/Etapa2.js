import React from 'react';
import { ContainerForm } from './estilo';

export default class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Etapa 2 - Informações do ensino superior
                </h1>

                <ContainerForm>
                    <p>5. Qual é o curso?</p>
                    <input/>
                    <p>6. Qual é a unidade de ensino?</p>
                    <input/>
                </ContainerForm>
               
            </div>
        );
    }   
}