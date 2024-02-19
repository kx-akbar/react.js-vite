import React from "react";
import "./signStyle.css";
import "./resetPassword.css";

function ResetPassword() {
  return (
    <div>
      <main className="main">
        <h1>Reset Password</h1>
        <p>Enter your email to reset your password.</p>
        <form className="form">
          <div className="password-box">
            <span className="country">
              <svg
                style={{ borderRadius: "50%" }}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path fill="#1eb53a" d="M0 341.3h512V512H0z" />
                <path fill="#0099b5" d="M0 0h512v170.7H0z" />
                <path fill="#ce1126" d="M0 163.8h512v184.4H0z" />
                <path fill="#fff" d="M0 174h512v164H0z" />
                <circle cx="143.4" cy="81.9" r="61.4" fill="#fff" />
                <circle cx="163.8" cy="81.9" r="61.4" fill="#0099b5" />
                <g fill="#fff" transform="translate(278.5 131)scale(2.048)">
                  <g id="flagUz1x10">
                    <g id="flagUz1x11">
                      <g id="flagUz1x12">
                        <g id="flagUz1x13">
                          <path id="flagUz1x14" d="M0-6L-1.9-.3L1 .7" />
                          <use
                            width="100%"
                            height="100%"
                            href="#flagUz1x14"
                            transform="scale(-1 1)"
                          />
                        </g>
                        <use
                          width="100%"
                          height="100%"
                          href="#flagUz1x13"
                          transform="rotate(72)"
                        />
                      </g>
                      <use
                        width="100%"
                        height="100%"
                        href="#flagUz1x13"
                        transform="rotate(-72)"
                      />
                      <use
                        width="100%"
                        height="100%"
                        href="#flagUz1x12"
                        transform="rotate(144)"
                      />
                    </g>
                    <use
                      width="100%"
                      height="100%"
                      y="-24"
                      href="#flagUz1x11"
                    />
                    <use
                      width="100%"
                      height="100%"
                      y="-48"
                      href="#flagUz1x11"
                    />
                  </g>
                  <use width="100%" height="100%" x="24" href="#flagUz1x10" />
                  <use width="100%" height="100%" x="48" href="#flagUz1x10" />
                  <use width="100%" height="100%" x="-48" href="#flagUz1x11" />
                  <use width="100%" height="100%" x="-24" href="#flagUz1x11" />
                  <use
                    width="100%"
                    height="100%"
                    x="-24"
                    y="-24"
                    href="#flagUz1x11"
                  />
                </g>
              </svg>
              {"UZ"}
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <input type="tel" />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </main>
    </div>
  );
}

export default ResetPassword;
