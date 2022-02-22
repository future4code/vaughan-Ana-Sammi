import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {StyledToolbar} from './style'
import {goToFeed, goToLogin, goToSignUp} from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'



export default function ButtonAppBar() {
  const navigate = useNavigate();
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
                onClick={() => goToLogin(navigate)} 
                variant="outlined" 
                color="secondary"
            > Login </Button>
          </div>

        </StyledToolbar>
      </AppBar>
  );
}