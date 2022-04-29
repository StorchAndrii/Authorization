import React from "react";
import { NavLink } from "react-router-dom";
import { Login } from "../components/Login";

const LoginPage = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <Login />
      <p>
        Or <NavLink to={"/register"}>registration</NavLink>
      </p>
    </div>
  );
};

export default LoginPage;
