import React, {useState} from 'react' 
import useProtectedPage from '../../hooks/useProtectedPage';
import {useParams} from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';
import { baseURL } from '../../constants/url';
import PostForm from './PostForm'

function PostPage() {
    useProtectedPage()
    const params = useParams()
    const [posts] = useRequestData([], `${baseURL}/posts`)
    const [comments, getData] = useRequestData([], `${baseURL}/posts/${params.id}/comments`)

    const post = posts.filter((item) => {
        return (item.id === params.id )
    }).map((item) => {
        return (
            <div key={item.id}>
                <p>{item.username}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
                <p>{item.voteSum}</p>    
            </div>
        )
    })

    const comment = comments.map((item) => {
        return (
            <div key={item.id}>
                <p>{item.username}</p>
                <p>{item.body}</p>
            </div>
        )
    })
  
    return(
        <div>
            {post}
            {comment}
            <PostForm params={params} getData={getData} />
        </div>
    )
}

export default PostPage;