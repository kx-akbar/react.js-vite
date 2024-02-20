import React, { useState } from "react";
import "./LogInStyle.css";

function LogIn() {
  const [viewPw, dontViewPw] = useState(false);
  const [inputvalue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    pwError: "",
  });

  const obj = {
    email: "webbrain123@gmail.com",
    password: "12345",
  };

  function onChange(e) {
    const { value, name } = e.target;
    setError("");
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const forgotPassword = (e) => {
    e.preventDefault();
    setInputValue((val) => ({ ...val, password: "" }));
  };

  const onSubmit = () => {
    if (inputvalue.email == obj.email && inputvalue.password == obj.password) {
      setError((err) => ({
        ...err,
        emailError: "Correct value",
        pwError: "Correct value",
      }));
      setTimeout(() => alert("Welcome to Webbrain"), 1000);
    } else if (
      inputvalue.email == obj.email &&
      inputvalue.password != obj.password
    ) {
      setError((err) => ({
        ...err,
        emailError: "Correct value",
        pwError: "Wrong Answer",
      }));
    } else if (
      inputvalue.email != obj.email &&
      inputvalue.password == obj.password
    ) {
      setError((err) => ({
        ...err,
        pwError: "Correct value",
        emailError: "Wrong Answer",
      }));
    } else {
      setError((err) => ({
        ...err,
        emailError: "Wrong Answer",
        pwError: "Wrong Answer",
      }));
    }
  };

  const pwClass = viewPw ? "fa-regular fa-eye" : "fa-solid fa-eye-slash";
  const inputType = viewPw ? "text" : "password";

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="text">
            <h1 className="login">Login to your account</h1>
            <p className="description">Enter your details to login.</p>
          </div>
          <form className="form">
            <div className="input-box-1">
              <label htmlFor="email-input">
                Email Address <b>*</b>
                <span
                  style={
                    error.emailError == "Correct value"
                      ? { color: "green", marginLeft: "0.3rem" }
                      : { color: "red", marginLeft: "0.3rem" }
                  }
                >
                  {error.emailError}
                </span>
              </label>
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  id="email-input"
                  autoComplete="off"
                  name="email"
                  value={inputvalue.email}
                  onChange={onChange}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="input-box-2">
              <label htmlFor="email-password">
                Email Address <b>*</b>
                <span
                  style={
                    error.pwError == "Correct value"
                      ? { color: "green", marginLeft: "0.3rem" }
                      : { color: "red", marginLeft: "0.3rem" }
                  }
                >
                  {error.pwError}
                </span>
              </label>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type={inputType}
                  id="email-password"
                  placeholder="**********"
                  autoComplete="off"
                  name="password"
                  maxLength={15}
                  value={inputvalue.password}
                  onChange={onChange}
                />
                <i className={pwClass} onClick={() => dontViewPw(!viewPw)}></i>
              </div>
            </div>
            <button className="forgot-pw" onClick={forgotPassword}>
              Forgot password?
            </button>
          </form>
          <button className="login-btn" type="submit" onClick={onSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
