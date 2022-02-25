import axios from 'axios'
import { useState } from 'react'
import {baseURL} from '../constants/url'



export const createPost = (body, clear) => {
    axios.post(`${baseURL}/posts`, body, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert(res.data)
            clear()
        })
        .catch((err) => {
            alert("Algo deu errado. Tente novamente.")
        })
}

export const createVote = (id, getData, setVoteUp) => {
    axios.post(`${baseURL}/posts/${id}/votes`, {direction: 1}, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
    .then((res) => {
        getData(`${baseURL}/posts`)
        setVoteUp("true")
    })
    .catch((err) => {
    }) 
}

export const deleteVote = (id, getData) => {
    axios.delete(`${baseURL}/posts/${id}/votes`, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
    .then((res) => {
        getData(`${baseURL}/posts`)
    })
    .catch((err) => {
    })
}

export const changeVote = (id, getData, setVoteDown) => {
    axios.put(`${baseURL}/posts/${id}/votes`, {direction: -1}, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
    .then((res) => {
        getData(`${baseURL}/posts`)
        setVoteDown(true)
    })
    .catch((err) => {
    })
}