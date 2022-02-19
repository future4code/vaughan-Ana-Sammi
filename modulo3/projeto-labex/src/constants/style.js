import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }    
    body{
        color: #a5a5a5;
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        background-color: #1d1d1d;
    }
`

/* Home */
export const Container = styled.div`
    width: 30%;
    position: absolute;
    bottom: 30%;
    left: 33%;
    text-align: center;
    h1 {
        font-size: 4rem;
        opacity: 70%;
        color: white;
        margin-bottom: 2rem;
    }

`

export const ButtonList = styled.button`
    height: 2rem;
    width: 9rem;
    background-color: transparent;
    color: white;
    opacity: 70%;
    border: 2px white solid;
    font-size: 1.2rem;
    border-radius: 5%;

`

export const ButtonLogin = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    height: 2rem;
    width: 3rem;
`

/* Lista de viagens */
export const CardTrip = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 20rem;
    height: 12rem;
    color: white;
    h4 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 0.5rem;
    }
    padding: 3%;
    text-align: center;
    background: rgba(136, 136, 136, 0.1);
    border-radius: 5px;
    backdrop-filter: blur(8px);
        :-webkit-backdrop-filter: blur(2px);
   
`

export const ContainerList = styled.div`
    height: 100vh;
    display: grid;
    grid-template: 20% 1fr 1fr 20% / 1fr 1fr 1fr;
    h2 {
        font-size: 2rem;
        grid-row:1 / 2;
        grid-column: 1/4;
    }
    align-items: center;
    justify-items: center;
    div {
        margin-bottom: 2%;
    }
`

export const ButtonApply = styled.button`
    grid-row: 4 / 5;
    grid-column: 1 / 4;
`

export const BackButton = styled.button`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background-color: transparent;
    color: white;
    width: 4rem;
    height: 2rem;
    font-size: 1rem;
    border:solid 2px #c0c0c0;
    background: transparent;
    color: #c0c0c0 !important;
    :hover{
        border:solid 2px #c0c0c0;
        background: #c0c0c0;
        color: #1f1f1f !important;
        font-weight: 500
    }
`

// Formulário de aplicação

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    justify-content: space-evenly;
    align-items: center;
`

export const ContainerForm = styled.div`
    margin-top: 4%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        width:30%;
    }
`