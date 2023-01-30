import React, { useState } from "react";
import SignUp from "./SignUp";

const Login = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="login_page">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignUp(true)} className="login_button">
          Sign In
        </button>
        <div className="login_gradient" />
      </div>
      <div className="login_body">
        {signUp ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anyWhere. Cancel at anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignUp(true)}
                  className="login_getStarted_btn"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
