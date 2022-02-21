import { Navigate } from "react-router-dom"

export const goToLogin = () => {
    Navigate('/login')
}

export const goToFeed = () => {
    Navigate('/')
}

export const goToSignUp = () => {
    Navigate('/cadastrar')
}

export const goToPost = (id) => {
    Navigate(`/post/${id}`)
}