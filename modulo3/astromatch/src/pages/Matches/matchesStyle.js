
import styled from 'styled-components'
import {MdOutlineArrowBack, MdOutlineDeleteOutline} from 'react-icons/md'
import {FiMessageCircle} from 'react-icons/fi'


export const MatchesCard = styled.div `
    border-radius: 5%;
    color: #2f2f2f;   
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    height: 80vh;
    width: 25vw;
    background-color: black;
    border: 1px solid black;
    position:relative;
    -webkit-box-shadow: 5px 5px 10px #a1201b;
    padding: 1rem;
    overflow: scroll;
`
export const MatchPerson = styled.div`
    img {
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
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
    padding: 1% 0;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`
export const MatchesButtons = styled.div`
     button {
        background: transparent;
        border: none !important;
        font-size:0;
        :hover {
            cursor: pointer;
        }
    }
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    h3 {
        font-size: 1.5rem;
        background: -webkit-linear-gradient(#ff521b, #ffee00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 2%;
    }
`

export const BackButton = styled(MdOutlineArrowBack)`
    color: #fb5a29;
    font-size: 2.5rem;


`

export const DeleteButton = styled(MdOutlineDeleteOutline)`
    color: #ff1616;
    font-size: 2.5rem;
`

export const Message = styled(FiMessageCircle) `
    color:#00a2ff;
    font-size: 2.5rem;
`