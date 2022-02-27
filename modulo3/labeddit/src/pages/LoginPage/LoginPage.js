import React from "react";
import { Button, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import { goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({ setButtonText }) => {
  useUnprotectedPage();
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h2" mt={2} mb={2} color="primary">
        Login
      </Typography>

      <LoginForm setButtonText={setButtonText} />

      <Button
        variant={"text"}
        color={"primary"}
        onClick={() => goToSignUp(navigate)}
        margin={"normal"}
      >
        Ainda não tem conta? Cadastre-se
      </Button>
    </Container>
  );
};

export default LoginPage;
