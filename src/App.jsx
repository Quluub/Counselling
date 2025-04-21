
// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './Client/WelcomePage';
import Signup from './Client/Auth/Signup';
import Login from "./Client/Auth/Login";
import Verify from "./Client/Auth/VerifyEmail";
import ClientDob from "./Client/Auth/ClientDob";
import Nationality from './Client/Auth/Nationality';
import Country from './Client/Auth/Country';
import City from './Client/Auth/City';
import MaritalStatus from './Client/Auth/MaritalStatus';
import Counselling from './Client/Auth/TypeOfCounselling';
import Languages from './Client/Auth/Languages';



// import ClientPage from './components/ClientPage';
// import CounsellorPage from './components/CounsellorPage';

const App = () => (
  <Router>
    <Routes>
      {/* Welcome route */}
      <Route path="/" element={<WelcomePage />} />
      <Route path="/client/sign-up" element={<Signup />} />
      <Route path="/client/login" element={<Login />} />
      <Route path="/client/verify" element={<Verify />} />
      <Route path="/client/client-dob" element={<ClientDob/>} />
      <Route path="/client/nationality" element={<Nationality/>} />
      <Route path="/client/country" element={<Country/>} />
      <Route path="/client/city" element={<City/>} />
      <Route path="/client/marital-status" element={<MaritalStatus/>} />
      <Route path="/client/counselling" element={<Counselling/>} />
      <Route path="/client/languages" element={<Languages/>} />











      {/* Future routes */}
      {/* <Route path="/client" element={<ClientPage />} /> */}
      {/* <Route path="/counsellor" element={<CounsellorPage />} /> */}

      {/* Redirect unknown URLs back to Welcome */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;