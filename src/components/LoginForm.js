import React from "react";

const LoginForm = ({ setIsLoggedIn, isLoggedIn }) => {

  const handleSubmit = (e) => {
    e.preventDefault();      // ✅ page reload stop
    setIsLoggedIn(true);     // ✅ parent state update
  };

  return (
    <div>
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          UserName:
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
          <br /><br />

          Password:
          <input
            type="password"
            placeholder="Enter your password"
            required
          />
          <br /><br />

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
