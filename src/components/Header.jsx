import React from "react";
import logo from "../assets/img/logo.webp"; // Make sure you have the logo image in the appropriate path
import search from "../assets/img/search-3-24.png";
import { Link } from "react-router-dom";
function Header() {
  // Define menu items for other sections similarly

  return (
    <header className="header">
      <div className="header-main">
        <Link to='/'>
        <img src={logo} alt=" GCEB" className="header-logo" />
        </Link>
        <div className="header-title">
          <h1>GOVERNMENT COLLEGE OF ENGINEERING-BARGUR</h1>
          <h1>அரசு பொறியல் கல்லூரி - பர்கூர்</h1>
        </div>
      </div>
      <div className="language-toggle"> 
        <div className="serach-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <span>
            <img src={search} alt="Search" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
