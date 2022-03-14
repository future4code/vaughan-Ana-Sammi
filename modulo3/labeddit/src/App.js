import React, {useState} from 'react'
import theme from './constants/theme';
import {Router} from './routes/Router'
import { ThemeProvider } from '@mui/material/styles'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header'


const App = () => {
  const token = window.localStorage.getItem("token")
  const [buttonText, setButtonText] = useState(token ? "Logout" : "Login")


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header buttonText={buttonText} setButtonText={setButtonText} />
      <Router setButtonText={setButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
