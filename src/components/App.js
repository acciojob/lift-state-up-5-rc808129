
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm.js";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        {isLoggedIn && <h1>user is login</h1>}
        
        <LoginForm setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default App
