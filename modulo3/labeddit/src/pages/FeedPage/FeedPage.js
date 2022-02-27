import React, { useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/url";
import {
  PostCard,
  Container,
  ButtonContainer,
  NameAndDate,
  TitleAndBody,
  PostContainer,
  MainContainer,
} from "./style";
import { goToPost } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import FeedForm from "./FeedForm";
import { changeVote, createVote, deleteVote } from "../../services/posts";
import { Button, Typography, IconButton, Stack } from "@mui/material";
import { ThumbUp, ThumbDown, InsertComment, Reddit } from "@mui/icons-material";

const FeedPage = ({ getData }) => {
  useProtectedPage();

  const [posts] = useRequestData([], `${baseURL}/posts`);
  const navigate = useNavigate();
  const [voteDown, setVoteDown] = useState(false);
  const [voteUp, setVoteUp] = useState(false);

  const onClickCard = (id) => {
    goToPost(navigate, id);
  };

  const onClickUp = (id) => {
    if (voteDown) {
      setVoteDown(false);
      createVote(id, getData);
    } else if (voteUp) {
      setVoteUp(false);
      deleteVote(id, getData);
    } else {
      createVote(id, getData);
    }
  };

  const onClickDown = (id) => {
    if (voteDown) {
      setVoteDown(false);
      deleteVote(id, getData);
    } else if (voteUp) {
      setVoteUp(false);
      changeVote(id, getData, setVoteDown);
    } else {
      changeVote(id, getData, setVoteDown);
    }
  };

  const postCard = posts.map((post) => {
    return (
      <PostCard key={post.id} variant="outlined" color="primary">
        <Container>
          <ButtonContainer>
            <IconButton
              size="small"
              color="primary"
              onClick={() => {
                onClickUp(post.id);
              }}
            >
              <ThumbUp />
            </IconButton>

            <Typography variant="body1">
              {post.voteSum ? post.voteSum : "0"}
            </Typography>

            <IconButton
              size="small"
              color="primary"
              onClick={() => {
                onClickDown(post.id);
              }}
            >
              <ThumbDown />
            </IconButton>
          </ButtonContainer>

          <PostContainer>
            <NameAndDate>
              <Typography
                variant="h6"
                mt={2}
                color="text.primary"
                fontSize="1rem"
              >
                <Reddit
                  sx={{ bgcolor: "secondary" }}
                  color="primary"
                  size="large"
                />
                <b>{post.username}</b>
              </Typography>

              <Typography variant="overline" color={"text.primary"} ml={1}>
                posted at {post.createdAt}
              </Typography>
            </NameAndDate>

            <TitleAndBody>
              <Typography
                variant="h5"
                component="div"
                color="primary"
                onClick={() => onClickCard(post.id)}
              >
                {post.title}
              </Typography>

              <Typography mt={1} mb={2} variant="body1" color="#262626">
                {post.body}
              </Typography>
            </TitleAndBody>

            <div>
              <Stack direction="row" spacing={2}>
                <Button
                  startIcon={<InsertComment />}
                  size="small"
                  onClick={() => onClickCard(post.id)}
                >
                  Comentários: {post.commentCount ? post.commentCount : "0"}
                </Button>
              </Stack>
            </div>
          </PostContainer>
        </Container>
      </PostCard>
    );
  });

  return (
    <MainContainer>
      <FeedForm />
      {postCard}
    </MainContainer>
  );
};

export default FeedPage;
