import React, { useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/url";
import PostForm from "./PostForm";
import { MainContainer, PostCard, Container, ContainerComment } from "./style";
import { Typography } from "@mui/material";

function PostPage() {
  useProtectedPage();
  const params = useParams();
  const [posts] = useRequestData([], `${baseURL}/posts`);
  const [comments, getData] = useRequestData(
    [],
    `${baseURL}/posts/${params.id}/comments`
  );

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
        <Typography variant="overline" component="div" color="primary"><b>{item.username}</b> comentou:</Typography>
        <Typography mt={1} mb={2} ml={1} color="body1" color="#262626">{item.body}</Typography>
      </ContainerComment>
    );
  });

  return (
    <MainContainer>
      <PostCard>{post}</PostCard>

      
      <div> 
        <Typography variant="h6"> Comentários</Typography>
          {comment}
    </div>

      <PostForm params={params} getData={getData} />
    </MainContainer>
  );
}

export default PostPage;
