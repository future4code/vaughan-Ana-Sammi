import styled from 'styled-components'
import { Card, CardContent } from '@mui/material'


export const PostCard = styled(Card)`
    max-width: 90vw;
    display: flex;
    justify-content: center;
    margin-top: 2%;
    align-self: center;

`

export const Container = styled(CardContent)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2%;
    width: 50vw;
    align-self: center;
    flex-wrap: wrap;
`