import React, { useState } from "react";
import "./Css/LoginSignUp.css";
import {BACKEND_API} from '../config'


const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let responseData;
    await fetch(`${BACKEND_API}/auth/sign-in`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signUp = async () => {
    let responseData;
    await fetch(`${BACKEND_API}/auth/sign-up`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginSignUp">
      <div className="loginSingUp-container">
        <h1>{state}</h1>

        <div className="loginSignUp-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Your PassWord"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signUp();
          }}
        >
          Davom etish
        </button>
        {state === "Sign Up" ? (
          <p className="loginSignUp-login">
            Hisob qaydnomasi bormi ?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Bu yerda kiring
            </span>
          </p>
        ) : (
          <p className="loginSignUp-login">
            Hisob ochish ?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Bu yerni bosing
            </span>
          </p>
        )}
        <div className="loginSignUp-agree">
          <input type="checkbox" name="" id="" />
          <p>Davom etish orqali men foydalanish shartlari va maxfiylik siyosatiga rozilik bildiraman</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
