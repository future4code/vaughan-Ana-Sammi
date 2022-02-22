import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Header from '../components/Header/Header'

export const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/cadastrar' element={<SignUpPage/>}/>
                <Route path='/feed' element={<FeedPage/>}/>
                <Route path='/post/:id' element={<PostPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}