import React from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import useForm from '../../hooks/useForm'
import {login} from '../../services/users'
import { useNavigate } from 'react-router-dom'


const LoginForm = ({setButtonText}) => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setButtonText)
    }

    return(
            <form onSubmit={onSubmitForm}>
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
                    Login 
                </Button>

            </form>
    )
}

export default LoginForm;