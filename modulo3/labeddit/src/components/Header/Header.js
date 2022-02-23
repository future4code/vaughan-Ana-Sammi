import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {StyledToolbar} from './style'
import {goToFeed, goToLogin, goToSignUp} from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'


const Header = ({buttonText, setButtonText}) => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token")

  const logout = () => {
    window.localStorage.removeItem('token')
  }

  const buttonTextAction = () => {
    if (token){
      logout()
      setButtonText("Login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button 
            onClick={() => goToFeed(navigate)} 
            color="inherit" 
            size="large"
          > LabEddit </Button>

          <div>
            <Button 
                onClick={() => goToSignUp(navigate)} 
                variant="contained" 
                color="secondary"
            > Cadastre-se </Button>

            <Button 
                onClick={buttonTextAction} 
                variant="contained" 
                color="secondary"
            > {buttonText} </Button>
          </div>

        </StyledToolbar>
      </AppBar>
  );
}

export default Header