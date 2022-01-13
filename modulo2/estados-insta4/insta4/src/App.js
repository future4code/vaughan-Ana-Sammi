import React from 'react';
import styled from 'styled-components';




// const MainContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "FotoUsuario",
        fotoPost: "FotoPost"
      },
      {
        nomeUsuario: 'aninha',
        fotoUsuario: "FotoUsuario",
        fotoPost: "FotoPost"
      },

      {
        nomeUsuario: 'blade_cachorro',
        fotoUsuario: "FotoUsuario",
        fotoPost: "FotoPost"
      }
    ],
    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: '',
}

adicionarPost = () => {
  const novoPost = {
    nomeUsuario: this.state.valorInputNome,
    fotoUsuario: this.state.valorInputFotoPerfil,
    fotoPost: this.state.valorInputFotoPost
  };

  const novosPosts = [...this.state.posts, novoPost];
  this.setState({post: novosPosts});
  this.setState({valorInputNome: ""});
  this.setState({valorInputFotoPerfil: ""});
  this.setState({valorInputFotoPost: ''})
}

onChangeInputNome = (event) => {
  this.setState({valorInputNome: event.target.value});
}

onChangeInputFotoPerfil = (event) => {
  this.setState({valorInputFotoPerfil: event.target.value})
}

onChangeInputFotoPost = (event) => {
  this.setState({valorInputFotoPost: event.target.value})
}

  render() {
     const postCompleto = this.state.posts.map((post) => {
       return (
        <p>
        {post.nomeUsuario}
        {post.fotoUsuario}
        {post.fotoPost}
        </p>
       )
     });

     return (
       <>
        <div>{postCompleto}</div>
        <div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Foto Perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionarPost}>Postar</button>
       </div>
       
      </>
     )
    
  }
}
export default App;
