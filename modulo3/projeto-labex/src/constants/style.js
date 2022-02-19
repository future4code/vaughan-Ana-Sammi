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
    button {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
`

export const ButtonApply = styled.button`
    grid-row: 4 / 5 !important;
    grid-column: 1 / 4 !important;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: #c0c0c0;
    border: 2px solid #c0c0c0;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
        background-color:#c0c0c0;
        color: black;
    }
`

export const BackButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: #c0c0c0;
    border: 2px solid #c0c0c0;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
        background-color:#c0c0c0;
        color: black;
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