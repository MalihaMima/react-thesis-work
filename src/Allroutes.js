import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import LogIn from './routes/LogIn';
import SignUp from './routes/SignUp'
import './pages/Allroutesstyle.css';
import UserProfile from './routes/UserProfile';


export default function AllRoutes() {
  return ( 
      <Router>
          <nav className='navdesign'>
              <Link className='linkdesign' to="/">Home</Link>
              <Link className='linkdesign' to="/about">About</Link>
              <Link className='linkdesign' to="/login">Log In</Link>
              <Link className='linkdesign' to="/signup">Sign Up</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
      </Router>
  )
}