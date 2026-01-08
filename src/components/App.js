
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm.js";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>

        {isLoggedIn && <p>user is login</p>}
        
        <LoginForm setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default App
