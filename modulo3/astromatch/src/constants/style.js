import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {RiHeartsLine} from 'react-icons/ri'
import {BsHandThumbsDown, BsHandThumbsUp} from 'react-icons/bs'


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
    font-family: sans-serif;
        &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 10px;
     height: 15px;
    }
}    

`

export const ProfileCard = styled.div`
    border-radius: 5%;
    color: #2f2f2f;   
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    height: 80vh;
    width: 25vw;
    background-color: black;
    border: 1px solid black;
    position:relative;
    -webkit-box-shadow: 5px 5px 10px #a1201b;
    h1 {
        font-size: 2rem;
        background: -webkit-linear-gradient(#ff521b, #ffee00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 2%;
        
} 
`
export const ProfilePhoto = styled.img `
    position: absolute;
    top: 9%;
    width: 90%;
    height: 70%;
    object-fit: cover;
    object-position: 50% 10%;
`

export const CardNome = styled.div`
    background-image: linear-gradient(to top, black, transparent);
    position: absolute;
    bottom: 20%;
    width: 90%;
    height: 20%;
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

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    button {
        background: transparent;
        border: none !important;
        font-size:0;
    }
    margin-bottom: 10%;
`

export const Like = styled(BsHandThumbsUp)`
    color: #00ff55;
    width: 60px;
    height: 60px;
    border-radius: 10%;
    :hover {
        cursor: pointer;
        width: 70px;
        height: 70px;
    }

`

export const Dislike = styled(BsHandThumbsDown)`
    color: #ff1616;
    width: 60px;
    height: 60px;
    :hover {
        cursor: pointer;
        width: 70px;
        height: 70px;
    }
    padding: 0;
    margin: 0;


`
export const Matches = styled(RiHeartsLine)`
color: #00a2ff;
    width: 60px;
    height: 60px;
    :hover {
        cursor: pointer;
        width: 70px;
        height: 70px;
    }
`
export const MatchesCard = styled.div `
    border-radius: 5%;
    color: #2f2f2f;   
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    height: 80vh;
    width: 25vw;
    background-color: black;
    border: 1px solid black;
    position:relative;
    -webkit-box-shadow: 5px 5px 10px #a1201b;
    padding: 1rem;
    overflow: scroll;
    ::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
        box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    }
`
export const MatchPerson = styled.div`
    img {
        border-radius: 50%;
        height: 4rem;
        width: 4rem;
        object-fit: cover;
        object-position: 50% 10%;
        border: 2px #fc9e4f solid;
    }
    p {
        width: 30%;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 600;
        color: #fc9e4f;
    }
    display: flex;
    padding: 1%;
    width: 95%;
    justify-content: space-evenly;
    align-items: center;
    
`