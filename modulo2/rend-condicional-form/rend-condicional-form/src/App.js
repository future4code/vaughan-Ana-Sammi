import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export default class App extends React.Component {
  state = {
    etapa: 1
  };

  irParaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  };
 

  render() {
    const renderizarEtapa = () => {
      
      switch (this.state.etapa) {
        case 1:
          return <Etapa1/>;
        case 2: 
          return <Etapa2/>;  
        case 3: 
          return <Etapa3/>; 
        default: 
          return <Etapa4/>; 
      }

      // if(this.state.etapa === 1) {
      //   return <Etapa1/>   
      // } else if(this.state.etapa === 2) {
      //   return <Etapa2/>
      // } else if(this.state.etapa === 3) {
      //   return <Etapa3/> 
      // } else {
      //   return <Etapa4/>
      // }
    };

  return (
    <Container>
      {renderizarEtapa()}
      <button onClick={this.irParaEtapa}>Próximo</button>  
    </Container>   
  )   
       
  }
}

