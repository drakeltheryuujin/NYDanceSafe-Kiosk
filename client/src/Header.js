import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Header.css';

class Header extends Component {
  render() {
	  return(
      <div className="top-section">
        <div className="profile-image">
          <Link to="/"><img src={require('./assets/images/profile.png')} alt="New York DanceSafe"/></Link>
        </div>
        <h3 className="profile-title">Harm Reduction Kiosk</h3>
      </div>
    )
  }
}

export default Header
