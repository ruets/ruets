import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false }; // Initialize checkbox state
    console.log(this)
  }

  toggleCheckbox = () => { this.setState({ isChecked: !this.state.isChecked }) }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-toggle'>
          <input type='checkbox' id='checkbox' checked={this.state.isChecked} onChange={this.toggleCheckbox}/>
          <label for='checkbox' className='toggle'>
            <div className='bars' id='bar1'/>
            <div className='bars' id='bar2'/>
            <div className='bars' id='bar3'/>
          </label>
        </div>

        {this.state.isChecked && (
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <button>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <span className="material-symbols-outlined icon">home</span>
                    <span className="link-text">Accueil</span>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <button>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <span className="material-symbols-outlined icon">badge</span>
                    <span className="link-text">A propos</span>
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
