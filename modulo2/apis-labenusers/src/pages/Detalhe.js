import React from "react"
import axios from 'axios'

class Detalhe extends React.Component{

    getUserById = () => {
        
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaBusca}>Lista de Usuários</button>
            </div>
            
        )
    }
}

export default Detalhe;