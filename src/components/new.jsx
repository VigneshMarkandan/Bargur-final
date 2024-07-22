import React, { useState } from 'react';
import '../assets/new.css';
import { Link } from 'react-router-dom';

function New() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item dropdown">
              <Link to="/about" className="nav-link">About  &#9662;</Link>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Genesis</a>
                  <a href="/">Mission</a>
                  <a href="/">Vision</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Objectives</a>
                  <a href="/">Board Of Governors</a>
                  <a href="/">Director's Message</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Institute Colloquium</a>
                  <a href="/">Institution Eminence</a>
                  <a href="/">Gallery</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Campus Diary</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown" id='programmes'>
              <a href="/" className="nav-link">Administration &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Organization structure</a>
                  <a href="/">Principle</a>
                  <a href="/">Governing council</a>
                  <a href="/">Committees</a>
                  <a href="/">Key officials</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Fee structure</a>
                  <a href="/">TENDERS</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown" id='programmes'>
              <a href="/" className="nav-link">Academics &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Programmes</a>
                  <a href="/">Scholarships</a>
                  <a href="/">Regulations</a>
                  <a href="/">Curriculum and Syllabi</a>
                  <a href="/">NPTEL LOCAL CHAPTER</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Lectures Desk</a>
                  
                </div>
              </div>
            </li>
            <li className="nav-item dropdown" id='people'>
              <a href="/" className="nav-link">Campus Facilities &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Placement</a>
                  <a href="/">Association</a>
                  <a href="/">Canteen</a>
                  <a href="/">Hostel</a>
                  
                </div>
                <div className="dropdown-row">
                <a href="/">Library</a>
                  <a href="/">Medical Facility</a>
                  <a href="/">Post Office</a>
                  <a href="/">Staff Quarters</a> 
                 
                </div>
                <div className="dropdown-row">
                <a href="/">Tansport</a>
                <a href="/">Bank</a>
                <a href="/">Sports</a>
                <a href="/">NSS</a>
                
                
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">Departments &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Computer Science and Engineering</a>
                  <a href="/">Electronic and Communication Engineering</a>
                  <a href="/">Electrical and Electronic Engineering</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Mechanical Engineering</a>
                  <a href="/">Civil Engineering</a>
                  <a href="/">Science and Humanities</a>
          
                </div>

              </div>
            </li>
            <li className="nav-item dropdown" id='placements'>
              <a href="/" className="nav-link"> COE &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">COE Officials</a>
                  <a href="/">Exam Fee Details</a>
                  <a href="/">Regulations</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Examination Schedule</a>
                  <a href="/">Examination Reform Policy</a>
                  <a href="/">Results</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Minutes of Academic Council Meeting</a>
                  <a href="/">Minutes of Finance Committee Meeting</a>
                  <a href="/">Minutes of Standing Committee Meeting</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">Accreditation &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">TEQIP III</a>
                  <a href="/">NAAC</a>
                  <a href="/">AICTE</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">RESEARCH</a>
                  <a href="/">NBA</a>
                  <a href="/">REPORTS</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Memorandum of Understanding</a>
                  <a href="/">Students Exchange Programme</a>
                  <a href="/">IQAC</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">My GGEB</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default New;
