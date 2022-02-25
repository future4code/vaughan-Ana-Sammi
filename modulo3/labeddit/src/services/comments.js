import axios from 'axios'
import {baseURL} from '../constants/url'


export const createComment = (body, clear, id, getData) => {
    axios.post(`${baseURL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert(res.data)
            getData()
            clear()
        })
        .catch((err) => {
            alert(err.response)
        })
}

export const createCommentVote = (id, getData, setCommentDown) => {
    axios.post(`${baseURL}/comments/${id}/votes`, {direction: 1}, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
    .then((res) => {
        getData(`${baseURL}/comments`)
        setCommentDown("true")
    })
    .catch((err) => {
    })
}

export const deleteCommentVote = (id, getData) => {
    axios.delete(`${baseURL}/comments/${id}/votes`, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
    .then((res) => {
        getData(`${baseURL}/comments`)
    })
    .catch((err) => {
    })
}

export const changeCommentVote = (id, getData, setVoteDown) => {
    axios.put(`${baseURL}/comments/${id}/votes`, {direction: -1}, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    })
    .then((res) => {
        getData(`${baseURL}/comments`)
        setVoteDown(true)
        
    })
    .catch((err) => {
    })
}