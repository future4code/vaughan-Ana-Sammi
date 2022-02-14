import React from 'react'
import axios from 'axios'
import {GlobalStyle} from './constants/style'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import LoginPage from './pages/LoginPage'
import AdminHomePage from './pages/AdminHomePage'
import CreateTripPage from './pages/CreateTripPage'
import TripDetailsPage from './pages/TripDetailsPage'

function App() {

  //* trocar telas

  return (
    <div >
      {/* <HomePage/> */}
      {/* <ListTripsPage/> */}
      {/* <ApplicationFormPage/> */}
      {/* <LoginPage/> */}
      {/* <AdminHomePage/> */}
      <GlobalStyle/>
    </div>
  );
}

export default App;
