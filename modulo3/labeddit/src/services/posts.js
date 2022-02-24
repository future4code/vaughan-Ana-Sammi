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
            console.log(err.response)
        })
}