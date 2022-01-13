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
        fotoUsuario: <img src='https://picsum.photos/200/300?random=1'/>,
        fotoPost: <img src='https://picsum.photos/200/300?random=2'/>
      },
      {
        nomeUsuario: 'aninha',
        fotoUsuario: <img src='https://picsum.photos/200/300?random=3'/>,
        fotoPost: <img src='https://picsum.photos/200/300?random=4'/>
      },

      {
        nomeUsuario: 'blade_cachorro',
        fotoUsuario: <img src='https://picsum.photos/200/300?random=5'/>,
        fotoPost: <img src='https://picsum.photos/200/300?random=6'/>
      }
    ],
    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: "",
}

adicionarPost = () => {
  const novoPost = {
    nomeUsuario: this.state.valorInputNome,
    fotoUsuario: <img src={this.state.valorInputFotoPerfil}/>,
    fotoPost: <img src={this.state.valorInputFotoPost}/>
  };

  const novosPosts = [...this.state.posts, novoPost];

  this.setState({posts: novosPosts});
  this.setState({valorInputNome: ""});
  this.setState({valorInputFotoPerfil: ""});
  this.setState({valorInputFotoPost: ""})
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
            placeholder={"https://exemplo.com"}
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
