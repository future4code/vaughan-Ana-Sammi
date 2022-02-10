import React from 'react'
import styled from 'styled-components'

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 70%;
    align-items: center;
    text-align: center;
    img {
        width: 300px;
        height: 300px;
        object-fit: contain;
        max-width: 100%;
        max-height: 80%;
    }
    border: 1px solid black;
    width: 30%;
    

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