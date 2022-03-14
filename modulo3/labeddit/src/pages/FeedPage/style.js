import styled from 'styled-components'
import { Card, CardContent } from '@mui/material'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
`

export const PostCard = styled(Card)`
    max-width: 50vw;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    align-self: center;

`

export const Container = styled(CardContent)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2%;
    width: 50vw;
    align-self: center;
    flex-wrap: nowrap;
`

export const ButtonContainer = styled.div`
    p {
        transform:translateX(30%)
    }
    margin-right: 3rem;
    margin-top: -3rem;
`

export const NameAndDate = styled.div` 
    display: flex;
    align-items: baseline;
`

export const TitleAndBody = styled.div` 
    display: flex;
    flex-direction: column;
`
export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Form = styled.form`
    width: 50vw;
    text-align: center;
`