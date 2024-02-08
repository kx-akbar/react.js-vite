import React, { useState } from "react";
import "./signStyle.css";

function SignUp() {
  const [inpVal, setInpVal] = useState("");
  const [viewPw, dontViewPw] = useState(false);
  const [defaultValue, setValue] = useState("");
  const [defInpValue, wrongInpValue] = useState("");
  const [initalValue, setInitialValue] = useState("");

  function wrongValue(e) {
    const eventValue = e.target.value;
    const onlyLatin = /^[a-zA-Z]*$/;
    const email = "Webbrain";
    if (onlyLatin.test(eventValue) || eventValue == email) {
      setValue(eventValue);
      wrongInpValue("Correct value");
      setTimeout(() => {
        wrongInpValue("");
      }, 4000);
    } else {
      wrongInpValue("Wrong Value");
      setTimeout(() => {
        wrongInpValue("");
      }, 2000);
    }
  }

  const pwClass = viewPw ? "fa-regular fa-eye" : "fa-solid fa-eye-slash";
  const inputType = viewPw ? "text" : "password";

  function clearInput(e) {
    e.preventDefault();
    setInpVal("");
  }

  function passwordInput(e) {
    setInpVal(e.target.value);
    const eventVal = e.target.value;
    const pw = "Webbrain";
    if (eventVal == pw || eventVal == "WBA" || eventVal == "wba123") {
      setInitialValue("Correct Password");
      setTimeout(() => {
        setInitialValue("");
      }, 4000);
    } else if (eventVal != pw || eventVal != "WBA" || eventVal != "wba123") {
      setInitialValue("Wrong Password");
      setTimeout(() => {
        setInitialValue("");
      }, 2000);
    }
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
                <span
                  style={
                    defInpValue == "Correct value"
                      ? {
                          color: "green",
                          marginLeft: "0.4rem",
                        }
                      : { color: "red", marginLeft: "0.4rem" }
                  }
                >
                  {defInpValue}
                </span>
              </label>
              <div
                className="input"
                style={
                  defInpValue == "Correct value"
                    ? { border: "1px solid green" }
                    : defInpValue == ""
                    ? { border: "1px solid rgb(208, 215, 222)" }
                    : { border: "1px solid red" }
                }
              >
                <i className="fa-solid fa-lock"></i>
                <input
                  type="email"
                  id="email-input"
                  autoComplete="off"
                  value={defaultValue}
                  onChange={wrongValue}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="input-box-2">
              <label htmlFor="email-password">
                Email Address <b>*</b>
                <span
                  style={
                    initalValue == "Correct Password"
                      ? { color: "green", marginLeft: "0.4rem" }
                      : { color: "red", marginLeft: "0.4rem" }
                  }
                >
                  {initalValue}
                </span>
              </label>
              <div
                className="input"
                style={
                  initalValue == "Correct Password"
                    ? { border: "1px solid green" }
                    : initalValue == ""
                    ? { border: "1px solid rgb(208, 215, 222)" }
                    : { border: "1px solid red" }
                }
              >
                <i className="fa-solid fa-envelope"></i>
                <input
                  type={inputType}
                  id="email-password"
                  placeholder="**********"
                  autoComplete="off"
                  maxLength={15}
                  value={inpVal}
                  onChange={(e) => passwordInput(e)}
                />
                <i className={pwClass} onClick={() => dontViewPw(!viewPw)}></i>
              </div>
            </div>
            <button className="forgot-pw" onClick={clearInput}>
              Forgot password?
            </button>
          </form>
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
