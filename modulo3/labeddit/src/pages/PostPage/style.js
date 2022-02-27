import styled from 'styled-components'
import { Card, CardContent } from '@mui/material'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
`
export const PostCard = styled(Card)`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    align-self: center;
    align-items: center;
    
`
export const Container = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    width: 50vw;
    align-self: center;
`

export const ContainerComment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ButtonContainer = styled.div`
    p {
        transform:translateX(30%);
        margin: .5rem 1rem 0 1rem;
    }
    display: flex;
`

export const Form = styled.form`
    width: 60vw;
    text-align: center;
`