// src/components/WelcomePage.jsx
import React, { useState } from "react";
import logo from "../../assets/Quluub logo green icon 1.png";
import background from "../../assets/mosque-7856761_1280 1.png";
import "react-datepicker/dist/react-datepicker.css";


const City = () => {

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

<div className="d-flex justify-content-center mt-4">
  <img src={logo} alt="" style={{ height: '53px', width: '53px' }} />
</div>
        <div className="row g-0">
          {/* Left Panel */}
          <div className="col-md-6  position-relative d-flex flex-column p-5">
          <p className="mb-2" style={{  fontSize: "20px",  fontStyle:'italic' , marginBottom:'10px' }}>
              Please Fill in the correct information
            </p>
            <div className="mb-3 mt-1">
           
              <div className="mb-1 mt-2">
              
               <span className="text-bold"> <b>4.  </b> </span> <span className="mx-2 font-weight-bold" style={{ textDecoration: "underline" , fontWeight:'bold'}}>    City of Residence</span>
              </div>
              

              <input type="text" 
              placeholder="Input"
             className="w-100 mx-4 mt-3"
             style={{width:"431px", height:'40px', borderRadius:'8px'}}
              />
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
        border: "none"
      }}
    >
      {/* Top content */}
      

      {/* Absolutely positioned button */}
      <div
        className="text-center position-absolute start-50 translate-middle-x"
        style={{ bottom: "0px" }}
      >
          <div className="d-flex justify-content-between align-items-center mb-3">
                  <button type="submit" style={{width:'200px', height:'40px', borderRadius:'8px'}} className="btn text-black btn-outline-secondary btn-sm me-3"><a href="/client/country" style={{ color: 'black', textDecoration: 'none' }}>Previous</a></button>
                  <button type="submit" style={{width:'200px', height:'40px', borderRadius:'8px'}} className="btn btn-teal  "> <a href="/client/marital-status" style={{ color: 'white', textDecoration: 'none' }}>Next</a></button>
        
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

export default City;
