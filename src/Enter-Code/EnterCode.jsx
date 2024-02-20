import React from "react";
import "./enterCode.css";

function EnterCode() {
  return (
    <div>
      <main>
        <h1>Enter Verification Code</h1>
        <p>
          We’ve sent a code to <b>+998 90 000 00 00</b>
        </p>
        <section className="resend-code">
          <strong>4</strong>
          <strong>1</strong>
          <strong>9</strong>
          <strong>7</strong>
        </section>
        <div className="resend-box">
          <button className="resend-btn">Resend Code</button>
          <p>Experiencing issues receiving the code?</p>
          <a href="#">Resend code</a>
        </div>
      </main>
    </div>
  );
}

export default EnterCode;
