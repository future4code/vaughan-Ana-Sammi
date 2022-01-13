import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';




const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: 'https://picsum.photos/200?random=1',
        fotoPost: 'https://picsum.photos/200?random=2'
      },
      {
        nomeUsuario: 'aninha',
        fotoUsuario: 'https://picsum.photos/200?random=3',
        fotoPost: 'https://picsum.photos/200?random=4'
      },

      {
        nomeUsuario: 'blade_cachorro',
        fotoUsuario: 'https://picsum.photos/200?random=5',
        fotoPost: 'https://picsum.photos/200?random=6'
      }
    ],
    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: "",
}

adicionarPost = () => {
  const novoPost = {
    nomeUsuario: this.state.valorInputNome,
    fotoUsuario: this.state.valorInputFotoPerfil,
    fotoPost: this.state.valorInputFotoPost
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
        <MainContainer>
          <Post
          nomeDoUsuario={post.nomeUsuario}
          fotoDoUsuario={post.fotoUsuario}
          fotoDoPost={post.fotoPost}
         />
        </MainContainer>
        
       )
     });


     return (
       <>
        <>{postCompleto}</>
        
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
            placeholder={"https://exemplo"}
          />
          <button onClick={this.adicionarPost}>Postar</button>
       </div>
       
      </>
     )
    
  }
}
export default App;
