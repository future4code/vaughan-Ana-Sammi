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
            console.log(err.response)
        })
}

