import React from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/users'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({username:"", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
    }

    return(
            <form onSubmit={onSubmitForm}>
                <TextField 
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome de Usuário"}
                    fullWidth
                    required
                    type="text"
                    margin={"normal"}
                />

                <TextField 
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    fullWidth
                    required
                    type="email"
                    margin={"normal"}
                />

                <TextField 
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    fullWidth
                    required
                    type="password"
                    margin={"normal"}
                />

                <Button 
                    variant="contained" 
                    color="secondary"
                    type="submit"
                    margin={"normal"}
                    fullWidth
                > 
                    Cadastrar
                </Button>

            </form>
    )
}

export default SignUpForm;