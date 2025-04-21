// src/components/WelcomePage.jsx
import React from 'react';
import logo from '../assets/logo-teal.png';
import illustration from '../assets/illustration-couple.png';
import background from "../assets/mosque-7856761_1280 1.png";


const WelcomePage = () => (
    <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      position: 'relative',
    }}
    className="vh-100 d-flex align-items-center justify-content-center"
  >
    {/* Gradient overlay */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0, 137, 130, 0.45) 0%, rgba(163, 212, 209, 0.29) 50%)',
        zIndex: 1,
      }}
    />
  
    <div className="card w-75" style={{ maxWidth: '1000px', height: '510px', zIndex:'20', borderRadius:'16px' }}>
      <div className="row g-0 h-100">
        {/* Left Panel */}
        <div  className="col-md-6 border-end position-relative d-flex flex-column align-items-center justify-content-center p-4">
          <div className="d-flex align-items-center ">
            <img src={logo} alt="Quluub Logo" width="278" height="146" />
          </div>
          <h2 style={{height:'77px', fontSize:'60px', marginBottom:'10px'}} className="mb-5">Welcome!</h2>
          <img
            src={illustration}
            alt="Couple Illustration"
            className="position-absolute"
            style={{ bottom: '-59px', left: '20px', width: '240px', pointerEvents: 'none' }}
          />
        </div>

        {/* Right Panel */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-4">
        <button
    style={{
      width: '150px',
      padding: '6px 12px',
      fontSize: '1.2rem'
    }}
    className="btn btn-teal btn-sm mb-2"
  >
<a href="/client/sign-up" style={{ color: 'white', textDecoration: 'none' }}>Client</a>
   
  </button>          <span className="text-secondary my-2">OR</span>
  <button
    style={{
      width: '150px',
      padding: '6px 12px',
      fontSize: '1.2rem'
    }}
    className="btn btn-teal btn-sm"
  >
    Counsellor
  </button>        </div>
      </div>
    </div>
  </div>
);

export default WelcomePage;