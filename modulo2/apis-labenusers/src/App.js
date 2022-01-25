import React from 'react'
import axios from 'axios'



class App extends React.Component {
  state={
    usuarios:[],
    inputNome: "",
    inputEmail: ""
  }

  componentDidMount() {
    this.getAllUsers()
  }

  handleInputNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  handleInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  getAllUsers = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {headers: {Authorization: "ana-sammi-vaughan"}}
    )
    .then((response) => {
      this.setState({usuarios:response.data.result.list})
      console.log(response.data.result.list)
    })
    .catch((error) => {
      console.log(error.response)
    })
  }


  createUser = () => {
    const body = {
      "name": this.state.inputNome,
      "email": this.state.inputEmail
    }
        
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
          body,
          {headers: {Authorization: "ana-sammi-vaughan"}}
      )
      .then((response) => {
        alert("Usuário criado com sucesso")
        this.setState({inputNome: ""})
        this.setState({inputEmail: ""})
        this.getAllUsers()

      })
      .catch((error) => {
        console.log(error.response)
        alert("Erro ao criar usuário")
      })
  }


  render() {
    const listUsers = this.state.usuarios.map((usuario) => {
      return (
        <div>
          {usuario.name}
          {usuario.email}
        </div>
      )

    })
    console.log("estado:", this.state)
    return (
      <div>
        <input 
          
          placeholder="Nome do usuário"
          value={this.state.inputNome}
          onChange={this.handleInputNome} 
        />
        <input 
          placeholder="E-mail do usuario"
          value={this.state.inputEmail}
          onChange={this.handleInputEmail} 
        />
        <button onClick={this.createUser}>Criar usuário</button>
        {listUsers}
      </div>
    );
  }
}


export default App;
