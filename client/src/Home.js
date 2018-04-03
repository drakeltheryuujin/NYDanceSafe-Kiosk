import React, { Component } from 'react';
import Header from './Header';
import MainMenu from './MainMenu';
import SocialIcons from './SocialIcons';
import './assets/css/Sidebar.css';
import './assets/css/Widgets.css';

class Home extends Component {
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
                <MainMenu/>
              </div>
              <div className="social-icons">
                <SocialIcons/>
              </div>
            </div>
          </nav>
        </div>

        <div className="banner-bg" id="top">
          <div className="video-background">
              <div className="video-foreground">
                  <iframe title="background-video" src="https://www.youtube.com/embed/cQtNQA9o1LQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=cQtNQA9o1LQ-UmQ"
                      frameBorder="0" allowFullScreen></iframe>
              </div>
          </div>
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
