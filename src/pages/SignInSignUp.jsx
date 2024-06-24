import React, { useState } from "react";
import "./SignInSignUp.css"; // Import the CSS file

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between SignIn and SignUp

  const toggleForm = () => setIsSignIn(!isSignIn); // Toggle function

  return (
    <div className="signin-signup-container">
      <div className="form-container">
        {isSignIn ? (
          <>
            <h2 className="header-h2">Sign In</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
            </form>
          </>
        ) : (
          <>
            <h2 className="header-h2">Sign Up</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
          </>
        )}
        <button onClick={toggleForm} className="toggle-button">
          {isSignIn
            ? "Need an account? Sign Up"
            : "Already have an account? Sign In"}
        </button>
      </div>
    </div>
  );
};

export default SignInSignUp;
