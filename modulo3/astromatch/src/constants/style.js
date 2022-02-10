import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {GiHearts} from 'react-icons/gi'


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    body {
    background-image: linear-gradient(to right top, #f45ed4, #d981dc, #c499da, #b9abcd, #b9b9b9);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    }

`

export const ProfileCard = styled.div`
    color: #2f2f2f;   
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    height: 700px;
    width: 420px;
    background-color: #e3d7e9;
    border: 1px solid black;
    position:relative;
    -webkit-box-shadow: 5px 5px 10px #9b3a86;
    h1 {
        font-size: 72px;
        background: -webkit-linear-gradient(#f45ed4, #979797);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
}
   
`
export const ProfilePhoto = styled.img `
    position: absolute;
    top: 100px;
    width: 400px;
    height: 450px;
    object-fit: cover;
    object-position: 50% 10%;
`

export const CardNome = styled.div`
    background-image: linear-gradient(to top, black, transparent);
    position: absolute;
    bottom: 21%;
    width: 400px;
    height: 90px;
    z-index: 1;
    text-align: left;
    backdrop-filter: blur(6px);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3 {
        color: #f45ed4;
        font-size: 1.8rem;
        text-shadow: 1px 1px #000000
    }
    p{
        font-size: 1.2rem;
        color: white;
        margin-top: 5px;
        text-shadow: 1.2px 1.2px black
    }
`
export const Heart = styled(GiHearts)`
    color: #0c7047;
    width: 50px;
    height: 50px;
    :hover {
        cursor: pointer;
        width: 55px;
        height: 55px;
    }
    padding: 5px;
  /* border: 1px #9b3a86 solid; */
  border-radius: 50%;
  background-color: #5af88f;
`


    


export const IconDislike = styled.img`
    width: 65px;
    height: 65px;
    :hover {
        cursor: pointer;
        width: 70px;
        height: 70px;
    }
`
export const LikeButton = styled.button`
    border: 1px black;
    border-radius: 50%;
    background-color: #e3d7e9;
    position: absolute;
    bottom: 0;
    right: 0;
`
export const NoButton = styled.button`
    border: none;
    border-radius: 50%;
    background-color: #e3d7e9;
    position: absolute;
    bottom: 5px;
    left: 5px;
`

export const MatchCard = styled.div`
    img {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin-right: 2%;
    }
    display: flex;
    border: 1px black solid;
    padding: 1%;
`