import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }    
    body{
        color: #bdbdbd;
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
        opacity: 80%;
        color: white;
        margin-bottom: 2rem;
    }

`
export const ButtonList = styled.button`
    height: 2rem;
    width: 9rem;

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
    width: 20rem;
    height: 15rem;
    background-color: white;
`
