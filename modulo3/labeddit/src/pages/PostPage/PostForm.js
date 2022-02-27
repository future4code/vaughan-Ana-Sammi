import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { createComment } from "../../services/comments";
import { Form } from "./style";

const PostForm = ({ params, getData }) => {
  const [form, onChange, clear] = useForm({ body: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment(form, clear, params.id, getData);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <TextField
        name={"body"}
        value={form.body}
        onChange={onChange}
        label={"Comentário"}
        fullWidth
        type="text"
        margin={"normal"}
        required
        multiline
        rows={2}
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

export default PostForm;
