// src/components/WelcomePage.jsx
import React from 'react';
import logo from '../../assets/logo-teal.png';
import illustration from '../../assets/OBJECTS.png';
import background from "../../assets/mosque-7856761_1280 1.png";
import google from "../../assets/devicon_google.png";

import { Link } from 'react-router-dom';


const Signup = () => (
    <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      position: 'relative',
      height:'840px'
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
        background: 'linear-gradient(to bottom,rgba(0, 137, 130, 0.45) 0%,rgba(163, 212, 209, 0.45) 100%)',
        zIndex: 1,
      }}
    />
  
    <div className="card w-75" style={{ maxWidth: '1060px', height: '510px', zIndex:'20', borderRadius:'16px' }}>
      <div className="row g-0 h-100">
        {/* Left Panel */}
        <div className="col-md-6 border-end position-relative d-flex flex-column align-items-center justify-content-center p-4">
          <div className="d-flex align-items-center ">
            <img src={logo} alt="Quluub Logo" width="278" height="146" />
          </div>
          <h2 style={{height:'77px', fontSize:'30px', marginBottom:'10px'}} className="mb-5">Client</h2>
          <img
            src={illustration}
            alt="Couple Illustration"
            className="position-absolute"
            style={{ bottom: '-49px', left: '20px', width: '250px', pointerEvents: 'none' }}
          />
        </div>

        {/* Right Panel */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
        <div className=" d-flex align-items-center justify-content-center ">
    <div className="card p-1" style={{ maxWidth: '400px', width: '100%', border:'none' }}>
      <h3 className="text-center mb-2">Sign Up</h3>
      <p style={{fontSize:'15px'}} className="text-center text-muted mb-4">Strengthen Your Heart, Strengthen Your Relationship</p>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control input-teal"
            placeholder="Email address*"
            required
            style={{ borderRadius:'8px'}}

          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            className="form-control input-teal"
            placeholder="First Name*"
            required
            style={{ borderRadius:'8px'}}

          />
          <small className="form-text text-danger">This will not be visible to other users</small>
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control input-teal"
            placeholder="Last Name*"
            required
            style={{ borderRadius:'8px'}}

          />
          <small className="form-text text-danger">This will not be visible to other users</small>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control input-teal"
            placeholder="Password*"
            required
            style={{ borderRadius:'8px'}}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Link to="/login" style={{width:'200px', height:'40px', borderRadius:'8px'}} className="btn btn-outline-secondary btn-sm me-3">Login</Link>
          <button type="submit" style={{width:'200px', height:'40px', borderRadius:'8px'}} className="btn btn-teal  "> <a href="/client/client-dob" style={{ color: 'white', textDecoration: 'none' }}>Next</a></button>

        </div>
        <div className="text-center text-secondary mb-2">OR</div>
        <button
  type="button"
  style={{ borderRadius: '8px' }}
  className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
>
  <img src={google} alt="google" style={{ width: '20px', height: '20px' }} />
  Continue with Google
</button>

      </form>
    </div>
  </div>      </div>
      </div>
    </div>
  </div>
);

export default Signup;