import styled, {createGlobalStyle} from 'styled-components'
import {RiDeleteBin5Fill} from 'react-icons/ri'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }    
    body{
        color: #ffffff;
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
    height: 15rem;
    color: white;
    h4 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #5188ff;
    }
    p {
        margin-bottom: 0.5rem;
    }
    padding: 3%;
    text-align: center;
    background: rgba(136, 136, 136, 0.1);
    border-radius: 5px;
    backdrop-filter: blur(8px);
 
`

export const ContainerList = styled.div`
    height: 100vh;
    display: grid;
    grid-template: 15% 10% 1fr 1fr  / 1fr 1fr 1fr;
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
    grid-row: 2 / 3 !important;
    grid-column: 1 / 4 !important;
    cursor: pointer;
    background: #ffffff;
    font-size: 1.2rem;
    border-radius: 3px;
    color: black;
    border: 2px solid #ffffff;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
        background-color:transparent;
        color:#ffffff;
    }
`

export const Button = styled.button`
    cursor: pointer;
    background: #ffffff; 
    font-size: 1.2rem;
    border-radius: 3px;
    color: black;
    border: 2px solid #ffffff;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
        background-color:transparent;
        color: #ffffff;
    }
`

// Formulário de aplicação

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    justify-content: space-between;
    align-items: center;
`

export const ContainerForm = styled.div`
    margin-top: 4%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        width:15rem;
        margin-top: 1rem;
    }
    input {
        width: 20rem;
        padding: 4px;
    }
    select {
        width: 20.7rem;;
        height: 2rem;
        padding: 4px;
    }
    textarea {
        width: 20rem;
        font-family: Arial, Helvetica, sans-serif;
        resize: none;
        padding: 5px;
        max-lines: 4;
        
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
`
export const CardName = styled.div `
    button {
        border: none;
        background-color: transparent;
        color: #c0c0c0;
        font-size: 1.5rem;
        :hover {
        cursor: pointer;
        color: #ffffff; 
    }
    }
    display: flex;
    width: 40%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    background: rgba(156, 156, 156, 0.1);
    border-radius: 5px;
    backdrop-filter: blur(8px);
    padding-bottom: 1rem;

`
export const DeleteButton = styled(RiDeleteBin5Fill)`
    font-size: 2rem;
    :hover {
        cursor: pointer;
        color: #bb2323; 
    }
    position: relative;
    top: .5rem;
    padding-right: 2rem;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
`

export const CardTripDetails = styled.div`
    margin-top: -3%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 20rem;
    height: auto;
    color: white;
    h3 {
        font-size: 1.8rem;
        color: #5188ff;
        margin-bottom: 1rem;
    }
    h4 {
        font-size: 1.5rem;
        margin: 1rem 0;
        color: #5188ff;
    }
    p {
        margin-bottom: 0.8rem;
    }
    padding: 2%;
    text-align: center;
    background: rgba(136, 136, 136, 0.1);
    border-radius: 5px;
    backdrop-filter: blur(8px);
`

export const Country = styled.div`
    width: 23%;
    height: 1.5rem;
    color: black;
    margin-bottom: .5rem;
`

export const ContainerLogin = styled.div`
    height:40vh;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    h2 {
        margin-bottom: 2rem;
    }
    input {
        width: 20rem;
        padding: 4px;
    }
    button {
        width:15rem;
        margin-top: 1rem;
    }
`