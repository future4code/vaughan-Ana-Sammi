import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';

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
      if(this.state.etapa === 1) {
        return <Etapa1/>   
      } else if(this.state.etapa === 2) {
        return <Etapa2/>
      } else if(this.state.etapa === 3) {
        return <Etapa3/> 
      } else {
        return <Etapa4/>
      }
    };

  return (
    <div>
      {renderizarEtapa()}
      <button onClick={this.irParaEtapa}>Próximo</button>  
    </div>   
  )
    
  
     
}
}

