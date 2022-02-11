import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {GiHearts} from 'react-icons/gi'


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    body {
    background-image: linear-gradient(to right top, #ff521b, #ff693b, #fc9e4f, #ff693b, #ff521b);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    }

`

export const ProfileCard = styled.div`
    border-radius: 5%;
    color: #2f2f2f;   
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    height: 700px;
    width: 420px;
    background-color: black;
    border: 1px solid black;
    position:relative;
    -webkit-box-shadow: 5px 5px 10px #a1201b;
    h1 {
        font-size: 72px;
        background: -webkit-linear-gradient(#ff521b, #979797);
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
        color: #ff521b;
        font-size: 1.8rem;
        text-shadow: 1px 1px black;
    }
    p{
        font-size: 1.2rem;
        color: white;
        margin: 5px;
        text-shadow: 1.2px 1.2px black
    }
`
export const Heart = styled(GiHearts)`
    color: #00ff55;
    width: 100px;
    height: 40px;
    border-radius: 10%;
    :hover {
        cursor: pointer;
        width: 105px;
        height: 45px;
    }
    padding: 5px;
  background-color: #01551a;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  right: 40px;
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