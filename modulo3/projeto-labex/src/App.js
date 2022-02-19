import React from 'react'
import axios from 'axios'
import {GlobalStyle} from './constants/style'
import Router from './router/Router'
import {Background} from './Appstyle'



function App() {

  return (
    <div>
      <Router/>
      <GlobalStyle/>
      <Background/>
    </div>
  );
}

export default App;
