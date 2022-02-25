import React, { useReducer } from "react"
import axios from 'axios'
import styled from 'styled-components'
import Detalhe from "./Detalhe.js"

class Busca extends React.Component {
  state={
    users: []
  }

  
  componentDidMount = () =>{
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios
      .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      { headers: { Authorization: "ana-sammi-vaughan" } }
      )
      .then((response) => {
        console.log(response.data)
        this.setState({users: response.data})
      })
      .catch((error) => {
        console.log(error)
        alert("Não há usuários cadastrados")
      })
  }

  deleteUser = (id) => {
    if(window.confirm("Tem certeza que deseja deletar esse usuário?"))
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {headers: {Authorization: 'ana-sammi-vaughan'}}
    )
    .then((response) => {
        console.log("sucesso", response)
        this.getAllUsers()
        alert("Usuário deletado com sucesso!")
        
        })
    .catch((error) => {
      console.log(error.response.data)
    })
  }


    

  render() {
    const usersList = this.state.users.map((user) => {
      return  <div key={user.id}>
                {user.name}
                <button onClick={() => this.deleteUser(user.id)}>X</button>
                <button onClick={()=>this.props.irParaDetalhe(user.id)}>Detalhes</button>
              </div>
                
    })

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Cadastrar Usuário</button>             
        <h2>Lista de Usuários</h2>
        {usersList}
      </div>
    )
  }

}

export default Busca;