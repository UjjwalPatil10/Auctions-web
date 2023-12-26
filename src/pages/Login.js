import React, { useState } from "react";
import "./pages/Login.css";
import Logo from '../logo.png'


const Login = () => {  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
             <>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <label>USER NAME </label>
                    <input type="text"  className="form-control form-control-lg"  name="uname"  tabIndex="1"  required />
                    {renderErrorMessage("uname")}
                  </div>
                  <div className="input-container">
                    <label>PASSWORD </label>
                    <input type="password" className="form-control form-control-lg" name="pass"  tabIndex="2" required />
                    {renderErrorMessage("pass")}
                  </div>
                  <div class="input-group">
                  <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
            <label class="form-check-label" for="flexCheckIndeterminate">
            Remember Me
            </label>
            </div>

          </div>
                  <div className="button-container">
                    <input type="submit" value="SIGN IN"/>
                  </div>
                </form>
              </div>
          </>
  );

  return (
    <>
    <div className="app">
    <div className="login-form">
      <img className="logo-container" src={Logo} alt="logo" />
     </div>
      <div className="login-form">
        {renderForm}
      </div>
    </div>
    
    </>   
  );
}

export default Login;
