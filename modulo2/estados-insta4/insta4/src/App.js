import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/33'}
          fotoPost={'https://picsum.photos/200/148'}
        />

        <Post
          nomeUsuario={'aninha'}
          fotoUsuario={'https://picsum.photos/50/46'}
          fotoPost={'https://picsum.photos/200/150'}
        />  

        <Post
          nomeUsuario={'blade_cachorro'}
          fotoUsuario={'https://picsum.photos/50/11'}
          fotoPost={'https://picsum.photos/200/153'}
        />
      </MainContainer>
    );
  }
}

export default App;
