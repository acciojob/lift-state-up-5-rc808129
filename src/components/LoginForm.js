

import React from "react"
const LoginForm = ({setIsLoggedIn, isLoggedIn})=>{



  return(<div>
    {isLoggedIn ||
    <form onSubmit={()=>setIsLoggedIn(true)}>
     <h1>Parent Componet</h1>
     UserName:
     <input type="text" placeholder="Enter your name"/>
     <br></br>
     <br></br>
     password:
     <input type="password" placeholder="Enter your password"/>
     <br></br>
     <button>Login</button>

    </form>
}
   
  </div>)
}

export default LoginForm