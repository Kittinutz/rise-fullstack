import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import logo from "../../logo.svg";
const HeadNav = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="head-nav-wrapper">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="desktop-nav-wrapper">
        <Link className="btn" to="/">
          First test
        </Link>
        <Link className="btn" to="/responsive">
          Second test
        </Link>
        <Link className="btn">Abount us</Link>
        <Link className="btn">Contact us</Link>
      </div>
      <div className="mobile-nav-wrapper">
        <div className="hamburger" onClick={() => setActiveMenu(!activeMenu)}>
          <div className="hambur1"></div>
          <div className="hambur2"></div>
          <div className="hambur3"></div>
        </div>
        <div className={`menu-wrapper ${activeMenu && "active"}`}>
          <Link className="btn" to="/">
            First test
          </Link>
          <Link className="btn" to="/responsive">
            Second test
          </Link>
          <Link className="btn">Abount us</Link>
          <Link className="btn">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default HeadNav;
