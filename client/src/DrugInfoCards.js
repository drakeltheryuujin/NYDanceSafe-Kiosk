import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header';
import Menu from './DrugInfoCardMenu';
import SocialIcons from './SocialIcons';
import './assets/css/Sidebar.css';
import './assets/css/Widgets.css';

class Home extends Component {
  componentDidMount() {
    this.props.getDrugInfoCards()
  }

  renderMenuItems() {
    if(this.props.drugInfoCards) {
      const info = this.props.drugInfoCards
      return <Menu drug={info}/>;
    } else {
      return '<ul className="navigation"><li>No Information to Load</li></ul>';
    }
  }
  render() {
	  return(
      <div>
        <div className="menu top left horizontal">
          <input id="slide" name="slide" type="checkbox"/>
          <label htmlFor="slide" className="icon open">
            <i className="fa fa-bars"></i>
          </label>

          <nav>
            <div className="sidebar-menu">
              <Header/>
              <div className="main-navigation">
                {this.renderMenuItems()}
              </div>
              <div className="social-icons">
                <SocialIcons/>
              </div>
            </div>
          </nav>
        </div>

        <div className="banner-bg" id="top">
          <div className="banner-overlay"></div>
          <div className="welcome-text">
              <h2>DanceSafe's available harmreduction resources</h2>
              <h5>At your fingertips!</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
