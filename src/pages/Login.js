import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../provider/authProvider";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../utils/axiosInstance";
import "../css/Login.css";
import { Button } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleLogin = async () => {
    if (!username || !password) {
      if (!username) setUsernameError(true);
      if (!password) setPasswordError(true);
      toast.error("Please fill all the fields.");
      return;
    }
    try {
      const response = await axiosInstance.post("/api/v1/auth/authenticate", {
        username,
        password,
      });

      // Assuming the server responds with a user object or token
      const data = response.data;

      setToken(data.message);
      navigate("/products", { replace: true });
    } catch (error) {
      // Handle authentication failure (show an error message, redirect, etc.)
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container mt-5" >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-header">
            <img className="logo" src="/Images/auction-logo.png" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card adjust">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

{usernameError && (
            <div className="invalid-feedback">Required field</div>
          )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    required
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                   {passwordError && (
            <div className="invalid-feedback">Required field</div>
          )}
                </div>
                <div>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </div>
                <div className="row mt-2">
                  <div className="col-md-12 d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>
<div className="mt-3">

                <Grid container>
              <Grid item xs>
                <Link className="text-decoration-none " href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link className="text-decoration-none" href="#" variant="body2"
                >
                  {"Don't have an account ?  Register First"}
                </Link>
              </Grid>
            </Grid>

            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
