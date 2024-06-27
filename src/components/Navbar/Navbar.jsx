import React from "react";
import { NavLink } from "react-router-dom";

import GoogleFontsIcon from "../GoogleFontsIcon/GoogleFontsIcon";
import "./Navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false }; // Initialize checkbox state
  }

  toggleCheckbox = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar-toggle">
          <input
            type="checkbox"
            id="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleCheckbox}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1" />
            <div className="bars" id="bar2" />
            <div className="bars" id="bar3" />
          </label>
        </div>

        {this.state.isChecked && (
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <button>
                    <GoogleFontsIcon iconName="home" />
                    <span className="link-text">Accueil</span>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <button>
                    <GoogleFontsIcon iconName="badge" />
                    <span className="link-text">A propos</span>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/experiences">
                  <button>
                    <GoogleFontsIcon iconName="work" />
                    <span className="link-text">Expériences</span>
                  </button>
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
  }
}

export default Navbar;
