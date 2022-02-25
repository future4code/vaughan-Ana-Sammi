import React, {useState} from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/url";
import PostForm from "./PostForm";
import { ButtonContainer, MainContainer, PostCard, Container, ContainerComment } from "./style";
import { Typography, IconButton } from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import { changeCommentVote, createCommentVote, deleteCommentVote } from "../../services/comments";

function PostPage({getData}) {
  useProtectedPage();
  const params = useParams();
  const [posts] = useRequestData([], `${baseURL}/posts`);
  const [comments] = useRequestData(
    [],
    `${baseURL}/posts/${params.id}/comments`
  );
  const [voteDown, setVoteDown] = useState(false);
  const [voteUp, setVoteUp] = useState(false);

  const onCLickUp = (id) => {
    if (voteDown) {
      setVoteDown(false);
      createCommentVote(id, getData)
    } else if (voteUp) {
      setVoteUp(false);
      deleteCommentVote(id, getData)
    } else {
      createCommentVote(id, getData)
    }
  }

  const onClickDown = (id) => {
    if(voteDown) {
      setVoteDown(false)
      deleteCommentVote(id, getData)
    } else if (voteUp) {
      setVoteUp(false)
      changeCommentVote(id, getData, setVoteDown)
    } else {
      changeCommentVote(id, getData, setVoteDown)
    }
  }

  const post = posts
    .filter((item) => {
      return item.id === params.id;
    })
    .map((item) => {
      return (
        <Container key={item.id}>
          <Typography variant="h4" component="div" color="primary">
            {item.title}
          </Typography>

          <Typography variant="overline" mt={2} color="text.primary">
            Postado por <b> {item.username} </b>
          </Typography>

          <Typography mt={1} mb={2} color="body1" color="#262626">
            {item.body}
          </Typography>
        </Container>
      );
    });

  const comment = comments.map((item) => {
    return (
      <ContainerComment key={item.id}>
        <div>
        <Typography variant="overline" component="div" color="primary">
          <b>{item.username}</b> comentou:
        </Typography>
                
        <Typography mt={1} mb={2} ml={1} color="body1" color="#262626">
          {item.body}
        </Typography>
        </div>

        <ButtonContainer>
            <IconButton
              size="small"
              color="primary"
              onClick={() => {
                onCLickUp(item.id);
              }}
            >
              <ThumbUp />
            </IconButton>

            <Typography variant="body1">
              { item.voteSum ? item.voteSum : "0" }
            </Typography>

            <IconButton
              size="small"
              color="primary"
              onClick={() => {
                onClickDown(item.id);
              }}
            >
              <ThumbDown />
            </IconButton>
          </ButtonContainer>
      </ContainerComment>
    );
  });

  return (
    <MainContainer>
      <PostCard>{post}</PostCard>

      
        <Typography variant="h6"> Comentários</Typography>
      <PostCard>
        {comment}
      </PostCard>

      <PostForm params={params} getData={getData} />
    </MainContainer>
  );
}

export default PostPage;
