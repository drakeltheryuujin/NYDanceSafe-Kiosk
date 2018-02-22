import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/SocialIcons.css';

class SocialIcons extends Component {
  render() {
	  return(
      <ul>
        <li>
          <Link to="#">
            <i className="fa fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-facebook"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-youtube"></i>
          </Link>
        </li>
      </ul>
    )
  }
}

export default SocialIcons
