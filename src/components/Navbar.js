import React from "react";
import "./components-styles/navbar.css";

const Navbar = () => {

  function showHideMenu() {
    var div = document.getElementById("collapse");
    if (div.style.display === "none") {
      div.style.display="block";
    } else {
      div.style.display="none";
    }
  }

  return (
    <div className="navbar">
      {/* navbar left side content */}
      <a href="https://www.airbnb.co.in/">
      <div className="nav-left">
        <img
          className="brand-logo"
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"
          alt=""
        />
        <h3 className="brand-name">airbnb</h3>
      </div>
      </a>

      {/* navbar right side content */}
      <div className="nav-right">
        <button className="link-btn nav-btn d-none d-md-inline-block" style={{ borderRadius: "20px" }}>
          <a href="https://www.airbnb.co.in/host/homes">Become a host</a>
        </button>
        <button className="link-btn nav-btn d-none d-md-inline-block" style={{ borderRadius: "50%" }}>
          <i className="fa-solid fa-globe"></i>
        </button>
        <button className="nav-btn profile-btn" onClick={showHideMenu}>
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-user"></i>
        </button>
      </div>

      <div id="collapse" className="menu-bar" style={{display:"none"}}>
        <div className="top-menu-bar">
          <button className="menu">Sign up</button>
          <button className="menu">Log in</button>
        </div>
        <div className="bottom-menu-bar">
          <a href="https://www.airbnb.co.in/host/homes"><button className="menu">Host your home</button></a>
          <a href="https://www.airbnb.co.in/host/experiences?from_nav=1"><button className="menu">Host an experience</button></a>
          <a href="https://www.airbnb.co.in/help?audience=guest"><button className="menu">Help</button></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
