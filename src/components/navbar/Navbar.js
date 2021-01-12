import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/navList";
// import logo from "../../assets/image/soprano_logo.PNG";
// import "../../assets/css/header.css";

class Navbar extends Component {
  //   activeRoute = (e) => {
  //     console.log("======>", e.currentTarget);
  //     e.currentTarget.className += ' active';
  //   };

  render() {
    return (
      <div className="app-navbar">
        {ROUTE_PATHS.map((route, index) => (
          <NavLink
            exact
            to={route.path}
            className="app-nav-list"
            isActive={false}
            // activeStyle={}
             activeClassName={"selected"}
          >
            {route.name}
            <hr className="app-nav-list-hr" />
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Navbar;
