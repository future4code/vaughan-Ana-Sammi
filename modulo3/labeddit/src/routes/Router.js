import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


export const Router = ({setButtonText}) => {
    return(
            <Routes>
                <Route path='/login' element={<LoginPage setButtonText={setButtonText}/>}/>
                <Route path='/cadastrar' element={<SignUpPage setButtonText={setButtonText}/>}/>
                <Route path='/feed' element={<FeedPage/>}/>
                <Route path='/post/:id' element={<PostPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
    )
}