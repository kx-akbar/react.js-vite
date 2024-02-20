import React, { useState } from "react";
import "./newPwStyle.css";

function NewPassword() {
  const [val, setVal] = useState("");
  const [check, setCheck] = useState({
    1: false,
    2: false,
    3: false,
  });
  const onInputChanges = function (event) {
    const { value, name } = event.target;
    if (name == "confirm" && value.length > 0) {
      setVal(value);
    }
    if (name == "password") {
      let regExp = 
    }
    console.log(val);
  };
  return (
    <div>
      <main>
        <h1>New Password</h1>
        <p>Set up a new password to protect your account.</p>
        <form>
          <div className="new-passsword">
            <label>
              New Password <b>*</b>
            </label>

            <div className="inputs">
              <input
                type="text"
                name="password"
                placeholder="	•	•	•	•	•	•	•	•"
                onChange={onInputChanges}
              />
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>

          {/* =========================================================== */}

          <div className="new-passsword">
            <label>
              Confirm Password <b>*</b>
            </label>
            <div className="inputs">
              <input
                type="text"
                name="confirm"
                value={val}
                placeholder="	•	•	•	•	•	•	•	•"
                onChange={onInputChanges}
              />
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
          <div className="line">
            <span
              style={
                check[1]
                  ? { backgroundColor: "rgb(245, 34, 45)" }
                  : { backgroundColor: "rgb(187, 195, 205)" }
              }
            ></span>
            <span
              style={
                check[2]
                  ? { backgroundColor: "rgb(245, 34, 45)" }
                  : { backgroundColor: "rgb(187, 195, 205)" }
              }
            ></span>
            <span
              style={
                check[3]
                  ? { backgroundColor: "rgb(245, 34, 45)" }
                  : { backgroundColor: "rgb(187, 195, 205)" }
              }
            ></span>
          </div>
          <div className="test-box">
            <strong>Weak password. Must contain at least;</strong>
            {/* <i className="fa-regular fa-circle-check"></i> */}
            <p className="password-test">
              <i className="fa-regular fa-circle-xmark"></i>
              <b>At least 1 uppercase</b>
            </p>
            <p className="password-test">
              <i className="fa-regular fa-circle-xmark"></i>
              <b>At least 1 number</b>
            </p>
            <p className="password-test">
              <i className="fa-regular fa-circle-xmark"></i>
              <b>At least 8 characters</b>
            </p>
          </div>
          <button className="continue-btn">Continue</button>
        </form>
      </main>
    </div>
  );
}

export default NewPassword;
{
  /* <i class="fa-solid fa-eye-slash"></i> */
}
