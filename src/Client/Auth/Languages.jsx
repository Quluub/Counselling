// src/components/WelcomePage.jsx
import React, { useState } from "react";
import logo from "../../assets/Quluub logo green icon 1.png";
import background from "../../assets/mosque-7856761_1280 1.png";
import "react-datepicker/dist/react-datepicker.css";


const Languages = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        position: "relative",
        height: "840px",
      }}
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(0, 137, 130, 0.45) 0%, rgba(163, 212, 209, 0.45) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="card w-75"
        style={{
          maxWidth: "1060px",
          height: "510px",
          zIndex: 20,
          borderRadius: "16px",
        }}
      >
        {/* Logo */}
        <div className="d-flex justify-content-center mt-4">
          <img src={logo} alt="Logo" style={{ height: "53px", width: "53px" }} />
        </div>

        <div className="row g-0">
          {/* Left Panel */}
          <div className="col-md-6  position-relative d-flex flex-column py-3 ps-5">
            <p
              className="mb-2"
              style={{
                fontSize: "20px",
                fontStyle: "italic",
                marginBottom: "10px",
              }}
            >
              Please Tick the correct information applicable to you
            </p>
            <div className="mb-3 mt-1">
              <div className="mb-1 mt-2">
                <span className="font-weight-bold">
                  <b>7. </b>
                </span>
                <span className="mx-2 font-weight-bold" style={{ textDecoration: "underline" , fontWeight:'bold'}}>
                Languages Spoken
                </span>
              </div>

              <div class="container mt-4">
  <div class="form-check border rounded px-3 py-2 mb-2">
    <input class="form-check-input float-end" type="checkbox" value="" id="marital"/>
    <label class="form-check-label" for="marital">
      Yoruba
    </label>
  </div>

  <div class="form-check border rounded px-3 py-2 mb-2">
    <input class="form-check-input float-end" type="checkbox" value="" id="premarital"/>
    <label class="form-check-label" for="premarital">
      Igbo
    </label>
  </div>

  <div style={{borderRadius:'8px'}} class="form-check  px-3 py-2 mb-2">
    <input class="form-check-input float-end" type="checkbox" value="" id="mentalhealth"/>
    <label class="form-check-label" for="mentalhealth">
      Hausa
    </label>
  </div>

  <input type="text" class="form-control fst-italic" placeholder="Others (input)"/>
</div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100 h-100 position-relative">
              <div
                className="card p-4 position-relative"
                style={{
                  maxWidth: "400px",
                  width: "100%",
                  height: "400px", // Give the card a height
                  border: "none",
                }}
              >
                {/* Absolutely positioned buttons */}
                <div
                  className="text-center position-absolute start-50 translate-middle-x"
                  style={{ bottom: "20px" }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <button
                      type="submit"
                      style={{ width: "200px", height: "40px", borderRadius: "8px" }}
                      className="btn text-black btn-outline-secondary btn-sm me-3"
                    >
                      <a href="/client/counselling" style={{ color: 'black', textDecoration: 'none' }}> Previous</a>
                     
                    </button>
                    <button
                      type="submit"
                      style={{ width: "200px", height: "40px", borderRadius: "8px" }}
                      className="btn btn-teal"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
