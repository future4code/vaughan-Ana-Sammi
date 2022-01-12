import React from 'react'
import styled from 'styled-components'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeFaveBranco from '../../img/bookmark_border_black_24dp.svg'
import iconeFavePreto from '../../img/bookmark_black_24dp.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
  }

  onClickSalvo = () => {
    this.setState({salvo: !this.state.salvo})

    if (this.state.salvo === true) {
      this.setState({numeroSalvos: this.state.numeroSalvos - 1})
    } else {
      this.setState({numeroSalvos: this.state.numeroSalvos + 1})
    } 
  }

  onClickCurtida = () => {
    this.setState({curtido: !this.state.curtido})

      
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeSalvo 

    if(this.state.salvo) {
      iconeSalvo = iconeFavePreto
    } else {
      iconeSalvo = iconeFaveBranco
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvo}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post