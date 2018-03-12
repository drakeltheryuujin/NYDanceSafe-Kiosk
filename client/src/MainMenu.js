import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/MainMenu.css';

class MainMenu extends Component {
  render() {
	  return(
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/drug-info-cards">Drug Info Cards</Link>
        </li>
        <li>
          <Link to="/harmreduction">Harm Reduction</Link>
        </li>
        <li>
          <a className="disabled">Buy Kits</a>
        </li>
        <li>
          <Link to="/hydration-nutrition">Hydration & Nutrition</Link>
        </li>
        <li>
          <Link to="/hearing-protection">Hearing Protection</Link>
        </li>
        <li>
          <Link to="/sexual-health">Sexual Health</Link>
        </li>
        <li>
          <Link to="/consent">Consent</Link>
        </li>
        <li>
          <a className="disabled">Drug Lookup</a>
        </li>
        <li>
          <Link to="/mapping-the-universe-of-drugs">Mapping the Universe of Drugs</Link>
        </li>
        <li>
          <Link to="/drug-info-cards-es">Drug Info Cards (ES)</Link>
        </li>        
        <li>
          <Link to="/drug-info-cards-old">Drug Info Cards (Originals)</Link>
        </li>
        <li>
          <a className="disabled">Test Results</a>
        </li>
      </ul>

    )
  }
}

export default MainMenu
