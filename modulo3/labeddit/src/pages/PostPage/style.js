import styled from 'styled-components'
import { Card, CardContent } from '@mui/material'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
`
export const PostCard = styled(Card)`
    width: 60vw;
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
    justify-content: flex-start;
    align-items: center;
    margin-top: 2%;
    width: 50vw;
    align-self: center;
    flex-wrap: nowrap;
`

export const ContainerComment = styled.div`
    display: flex;
    align-items: baseline;
`

export const Form = styled.form`
    width: 60vw;
    text-align: center;
`