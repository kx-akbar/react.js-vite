import React, { useState } from "react";
import "./newPwStyle.css";

function NewPassword() {
  const [view, setView] = useState({
    password: false,
    confirm: false,
  });
  const [val, setVal] = useState("");
  const [inpValue, setInpValue] = useState("");
  const [check, setCheck] = useState({
    1: false,
    2: false,
    3: false,
  });
  const onInputChanges = function (event) {
    const { value, name } = event.target;
    if (name == "confirm") {
      setVal(value);
    }
    if (name == "password") {
      setInpValue(value);
      let reg = /\p{Lu}/gu;
      let digit = /\p{Nd}/gu;

      // ======================================

      if (value.match(reg)?.length > 0) {
        setCheck({ 1: true });
      } else {
        setCheck({ 1: false });
      }

      if (value.match(digit)?.length > 0 && check[1] == true) {
        setCheck({ 1: check[1], 2: true });
      }

      if (value?.length >= 8 && check[1] == true && check[2] == true) {
        setCheck({ 1: check[1], 2: check[2], 3: true });
      }
    }
  };

  const EyeIconClassPw = view.password
    ? "fa-regular fa-eye"
    : "fa-solid fa-eye-slash";
  const EyeIconClassCf = view.confirm
    ? "fa-regular fa-eye"
    : "fa-solid fa-eye-slash";

  const onsubmitBtn = function (e) {
    e.preventDefault();
    if (val === inpValue && val.length > 0 && inpValue.length > 0) {
      alert("Qochqor aka paroliz to'g'ri !");
    } else {
      alert("Qochqor aka paroliz Noto'g'ri !");
    }
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
                value={inpValue}
                name="password"
                maxLength={8}
                autoComplete="off"
                placeholder="	•	•	•	•	•	•	•	•"
                onChange={onInputChanges}
              />
              <i
                className={EyeIconClassPw}
                onClick={() => setView({ password: !view.password })}
              ></i>
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
                maxLength={8}
                autoComplete="off"
                placeholder="	•	•	•	•	•	•	•	•"
                onChange={onInputChanges}
              />
              <i
                className={EyeIconClassCf}
                onClick={() => setView({ confirm: !view.confirm })}
              ></i>
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
            <p className="password-test">
              <i
                style={
                  check[1]
                    ? { color: "green" }
                    : { color: "rgb(146, 159, 175)" }
                }
                className={
                  check[1]
                    ? "fa-regular fa-circle-check"
                    : "fa-regular fa-circle-xmark"
                }
              ></i>
              <b>At least 1 uppercase</b>
            </p>
            <p className="password-test">
              <i
                style={
                  check[2]
                    ? { color: "green" }
                    : { color: "rgb(146, 159, 175)" }
                }
                className={
                  check[2]
                    ? "fa-regular fa-circle-check"
                    : "fa-regular fa-circle-xmark"
                }
              ></i>
              <b>At least 1 number</b>
            </p>
            <p className="password-test">
              <i
                style={
                  check[3]
                    ? { color: "green" }
                    : { color: "rgb(146, 159, 175)" }
                }
                className={
                  check[3]
                    ? "fa-regular fa-circle-check"
                    : "fa-regular fa-circle-xmark"
                }
              ></i>
              <b>At least 8 characters</b>
            </p>
          </div>
          <button className="continue-btn" onClick={onsubmitBtn}>
            Continue
          </button>
        </form>
      </main>
    </div>
  );
}

export default NewPassword;
