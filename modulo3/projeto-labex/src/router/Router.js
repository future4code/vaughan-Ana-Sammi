import React from 'react' 
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import LoginPage from '../pages/LoginPage'
import AdminHomePage from '../pages/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage'

export default function Router() {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/trips/list' element={<ListTripsPage/>}/>
            <Route exact path='/trips/application' element={<ApplicationFormPage/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/admin/:id' element={<AdminHomePage/>}/>
            <Route exact path='/admin/trips/create' element={<CreateTripPage/>}/>
            <Route path='/admin/trips/details/:id' element={<TripDetailsPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}


