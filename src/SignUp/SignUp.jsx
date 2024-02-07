import React, { useState } from "react";
import "./signStyle.css";

function SignUp() {
  const [inpVal, setInpVal] = useState("");
  const [viewPw, dontViewPw] = useState(false);

  function toggleClass() {
    dontViewPw(!viewPw);
  }

  const pwClass = viewPw ? "fa-regular fa-eye" : "fa-solid fa-eye-slash";

  function clearInput(e) {
    e.preventDefault();
    setInpVal("");
  }
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
                <span></span>
              </label>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="email"
                  id="email-input"
                  autoComplete="off"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="input-box-2">
              <label htmlFor="email-password">
                Email Password <b>*</b>
                <span></span>
              </label>
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="password"
                  id="email-password"
                  placeholder="**********"
                  autoComplete="off"
                  value={inpVal}
                  onChange={(e) => setInpVal(e.target.value)}
                />
                <i className={pwClass} onClick={(e) => toggleClass(e)}></i>
              </div>
            </div>
            <button className="forgot-pw" onClick={(e) => clearInput(e)}>
              Forgot password?
            </button>
          </form>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;