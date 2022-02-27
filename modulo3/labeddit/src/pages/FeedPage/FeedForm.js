import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { Form } from "./style";

const FeedForm = () => {
  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <TextField
        name={"title"}
        value={form.title}
        onChange={onChange}
        label={"Título"}
        type="text"
        margin={"normal"}
        required
        fullWidth
      />
      <TextField
        name={"body"}
        value={form.body}
        onChange={onChange}
        label={"Conteúdo do Post"}
        fullWidth
        type="text"
        margin={"normal"}
        required
        multiline
        rows={3}
      />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        margin={"normal"}
        fullWidth
      >
        Enviar
      </Button>
    </Form>
  );
};

export default FeedForm;
