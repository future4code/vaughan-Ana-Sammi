import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [comentarios, setComentarios] = useState("")

	const onChangeComentario = (event) => {
		setComentarios(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={comentarios}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(comentarios) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario