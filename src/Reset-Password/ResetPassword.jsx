import React from "react";
import "./resetPassword.css";

function ResetPassword() {
  return (
    <div>
      <main className="main">
        <h1>Reset Password</h1>
        <p>Enter your email to reset your password.</p>
        <form className="form">
          <strong>Phone</strong>
          <div className="password-box">
            <select className="country">
              <option value="1">
                <b>&#9873;</b>
                <b>UZ</b>
              </option>
              <option value="2">
                <b>&#9873;</b>
                <b>EN</b>
              </option>
              <option value="3">
                <b>&#9873;</b>
                <b>RU</b>
              </option>
            </select>
            <input type="tel" placeholder="+998 90 000 00 00" />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </main>
    </div>
  );
}

export default ResetPassword;
