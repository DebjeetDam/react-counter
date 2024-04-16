import React, { Component } from "react";

const NavBar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge bg-secondary">{counters.length}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
