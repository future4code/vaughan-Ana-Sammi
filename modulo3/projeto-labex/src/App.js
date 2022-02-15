import React from 'react'
import axios from 'axios'
import {GlobalStyle} from './constants/style'
import Router from './router/Router'


function App() {

  return (
    <div >
      <Router/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
