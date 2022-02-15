import react from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate()
    const pathParams = useParams()
    const id = pathParams.id

    const goToAdmin = () => {
        navigate('/admin/:id')
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="email"/>
            <input placeholder="senha"/>
            <button type="submit" onClick={goToAdmin}>Login</button>
            <button onClick={goBack}>voltar</button>
        </div>
    )
}