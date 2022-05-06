import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import './Login.css';
import {get, post} from "../../services/http";
// import AuthService from "../services/auth.service";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    post("auth/register", {name, email, password})
  };
  return (
  <div class="login-page">
    <div class="form">
      <form class="login-form">
        <input type="name" placeholder="Your name" id="name" onChange={onChangeName}/>
        <input type="email" placeholder="Your email" id="email" onChange={onChangeEmail}/>
        <input type="password" placeholder="Your password" id="password" onChange={onChangePassword}/>
        <button onClick={handleRegister}>Register</button>
        <p class="message">Registered? <a href="login">Login</a></p>
      </form>
    </div>
  </div>
  );
};
export default Register;