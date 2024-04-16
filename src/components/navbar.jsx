import React, { Component } from "react";

class NavBar extends Component {
  //   state = {};
  render() {
    const { counters } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge bg-secondary">{counters.length}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
