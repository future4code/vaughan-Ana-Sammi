import styled from 'styled-components'

export const MainContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    background-color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;

`

export const Titulo = styled.h1`
    color: #ff02d5;
    grid-row: 1/span 1;
    grid-column: 1/4;
    align-self: center;
    font-size: 3rem;

`
export const CriarPlaylist = styled.div`
    grid-row: 2/span 1;
    grid-column: 1/4;
    align-self: center;
    margin-top: 20px;
`

export const Container = styled.div`
    display:grid;
    margin-top: 20px;
    justify-items: start;
    padding: 20px;
    align-self: center;
`

export const NomesPlaylists = styled.div`
    grid-column: 1/2;
`

export const ListaPlaylists = styled.div`
    grid-column: 1/2;
    margin-bottom: 20px;
`

export const Subtitulo = styled.h3`
    font-size: 1.5rem;
    
`

export const ListaMusicas = styled.div`
    grid-column: 2/4;
    grid-row: 2/4;
`
export const Botao = styled.button`
    width: 30px;
    justify-self: center;
    
`
export const Player = styled.iframe`
    width: 50px;
    height: 50px;
`
