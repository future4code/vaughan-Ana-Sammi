import React, {useState} from 'react' 
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData'
import { baseURL } from '../../constants/url';
import {PostCard, Container} from './style'
import {goToPost} from '../../routes/coordinator'
import {useNavigate, useParams} from 'react-router-dom'
import FeedForm from './FeedForm'
import { changeVote, createVote, deleteVote } from '../../services/posts';
import CardActions from '@mui/material/CardActions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


const FeedPage = ({data, getData}) => {
    useProtectedPage()
    const params = useParams()
    const [posts] = useRequestData([], `${baseURL}/posts`)
    const navigate = useNavigate()
    // const [vote, getData] = useRequestData([], `${baseURL}/posts/${params.id}/votes`)
    // // const [voteUp] = useRequestData([], `${baseURL}/posts/${params.id}/votes`)
    const [voteDown, setVoteDown] = useState("false")
    const [voteUp, setVoteUp] = useState("false")

    const onClickCard = (id) => {
        goToPost(navigate, id)
    }

    const onClickUp = (id) => {
            if (voteDown) {
                setVoteDown("false")
                createVote(id, getData)
            } else if (voteUp) {
                setVoteUp("false")
                deleteVote(id, getData)
            } else {
                createVote(id, getData)
            }    
        }
   
    const onClickDown = (id) => {
        if (voteDown) {
            setVoteDown("false")
            deleteVote(id, getData)
        } else if (voteUp) {
            setVoteUp("false")
            changeVote(id, getData, setVoteDown)
        } else {
            changeVote(id, getData, setVoteDown)
        }
    }
    
    const postCard = posts.map((post) => {
        return (
            <PostCard key={post.id}>
                <Container>

                    <div>
                        <IconButton size="small" onClick={() => {onClickUp(post.id)}}><ThumbUpIcon/></IconButton>
                        <p>{post.voteSum ? post.voteSum : "0"}</p>
                        <Button size="small" onClick={() => {onClickDown(post.id)}}>VOTEDOWN</Button>
                    </div>

                    
                    <div>
                        <div onClick={() => onClickCard(post.id)}>                
                            <Typography variant="h5" component="div">{post.title}</Typography>
                            <Typography variant="body2">Postado por: {post.username}</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.primary">{post.body}</Typography>
                        </div>  

                        <CardActions>
                            <Button size="small" onClick={() => onClickCard(post.id)}>
                                Comentários: {post.commentCount ? post.commentCount : "0"}
                            </Button>
                        </CardActions>
                    </div>

                </Container>
               
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