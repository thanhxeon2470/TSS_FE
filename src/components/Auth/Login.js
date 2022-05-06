import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {validate} from 'email-validator'
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
const Login = () => {
  // let navigate = useNavigate();
  // const form = useRef();
  // const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (validate(email)){
      post("auth/login", {email, password})
    }
  };
  return (
  <div class="login-page">
    <div class="form">
      <form class="login-form">
        <input type="email" placeholder="email" id="email" onChange={onChangeEmail}/>
        <input type="password" placeholder="password" id="password" onChange={onChangePassword}/>
        <button onClick={handleLogin}>login</button>
        <p class="message">Not registered? <a href="register">Create an account</a></p>
      </form>
    </div>
  </div>
  );
};
export default Login;