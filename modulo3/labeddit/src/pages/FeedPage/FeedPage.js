import React from 'react' 
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData'
import { baseURL } from '../../constants/url';
import {PostCard} from './style'
import {goToPost} from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'
import FeedForm from './FeedForm'


const FeedPage = () => {
    useProtectedPage()
    const [posts] = useRequestData([], `${baseURL}/posts`)
    const navigate = useNavigate()

    const onClickCard = (id) => {
        goToPost(navigate, id)
    }
    

    const postCard = posts.map((post) => {
        return (
            <PostCard key={post.id} onClick={() => onClickCard(post.id)}>                
                <h4>{post.title}</h4>
                <p>{post.username}</p>
                <p>{post.body}</p>
                <p>{post.commentCount}</p>
            </PostCard>
        )
    })


    return(
        <div>
            <FeedForm/>
            {postCard}
        </div>
    )
}

export default FeedPage;