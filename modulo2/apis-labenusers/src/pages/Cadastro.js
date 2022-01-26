import React from "react"
import axios from 'axios'

class Cadastro extends React.Component{
state={
    name: "",
    email: ""
}

onChangeNome = (event) => {
    this.setState({name: event.target.value})
}

onChangeEmail = (event) => {
    this.setState({email: event.target.value})
}

createUser = () => {
    const body = {
      "name": this.state.name,
      "email": this.state.email
    }
        
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
          body,
          {headers: {Authorization: "ana-sammi-vaughan"}}
      )
      .then((response) => {
        alert(`Usuário ${this.state.name} criado com sucesso`)
        this.setState({name: ""})
        this.setState({email: ""})
      })
      .catch((error) => {
        console.log(error.response.data)
        alert("Erro ao criar usuário")
      })
  }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaBusca}>Lista de Usuários</button>

                <h2>Cadastro</h2>

                <input 
                    placeholder={"Nome"}
                    value={this.state.name}
                    onChange={this.onChangeNome}
                />

                <input
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />

                <button onClick={this.createUser}>Cadastrar</button>
            </div>
        )
    }
}

export default Cadastro;