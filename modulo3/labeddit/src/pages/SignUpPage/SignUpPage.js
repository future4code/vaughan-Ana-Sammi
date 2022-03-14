import React from "react";
import { Button, Typography } from "@mui/material";
import SignUpForm from "./SignUpForm";
import { goToLogin } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({ setButtonText }) => {
  useUnprotectedPage();

  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h2" mt={2} mb={2} color="primary">Cadastro</Typography>

      <SignUpForm setButtonText={setButtonText} />

      <Button
        variant={"text"}
        color={"primary"}
        onClick={() => goToLogin(navigate)}
        margin={"normal"}
      >
        Já é cadastrado? Fazer login
      </Button>
    </Container>
  );
};

export default SignUpPage;
