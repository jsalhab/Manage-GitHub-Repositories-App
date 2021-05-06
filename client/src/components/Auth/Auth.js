import React, { useState } from "react";
import { connect } from "react-redux";
import { login, signup } from "../../store/actions";

import "./Auth.css";

const Auth = (props) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const emailIsValid = email.trim() !== "";
  const emailIsInvalid = !emailIsValid && emailIsTouched;

  const passwordIsValid = email.trim() !== "";
  const passwordInvalid = !passwordIsValid && passwordIsTouched;

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const passwordBlurHandler = () => {
    setPasswordIsTouched(true);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();

    setEmailIsTouched(true);
    setPasswordIsTouched(true);

    if (!emailIsValid) {
      return;
    }

    if (!emailIsValid) {
      return;
    }
    if (isLoginMode) {
      const formData = {
        email,
        password,
      };
      props.login(formData);
    } else {
      const formData = {
        email,
        password,
      };
      props.signup(formData);
    }
  };

  return (
    <React.Fragment>
      <div className="authentication">
        {isLoginMode ? <h2>Login</h2> : <h2>Signup</h2>}
        <hr />
        <div className="error-msg">{props.auth.error}</div>
        <form onSubmit={authSubmitHandler}>
          <input
            name="email"
            placeholder="Email Address"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
            type="email"
          />
          {emailIsInvalid && (
            <p className="error-msg">Email must not be empty.</p>
          )}
          <input
            name="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={password}
            type="password"
          />
          {passwordInvalid && (
            <p className="error-msg">Password must not be empty.</p>
          )}
          <button
            disabled={!formIsValid}
            type="submit"
            className="btn submit-btn"
          >
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </button>
        </form>
        <button onClick={switchModeHandler} className="btn switch-btn">
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login, signup })(Auth);
