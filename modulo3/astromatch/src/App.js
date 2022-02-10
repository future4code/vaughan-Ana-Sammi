import React, {useState} from 'react'
import Matches from './pages/Matches'
import InitialPage from './pages/InitialPage'


function App() {
  const [page, setPage] = useState('home')

  
  const switchPage =() => {
    switch(page) {
      case "home":
        return <InitialPage goToMatch={goToMatch}/>
      case "matches":
        return <Matches goHome={goHome}/>
      default:
        return <InitialPage goToMatch={goToMatch}/>
  }}
 

  const goToMatch = () => {
    setPage("matches")
  }


  const goHome = () => {
    setPage("home")
  }


  return (
    <div className="App">
      {switchPage()}
    </div>
  );
}

export default App;
