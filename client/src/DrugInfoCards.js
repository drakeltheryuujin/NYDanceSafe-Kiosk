import React, { Component } from 'react';
import Header from './Header';
import Menu from './DrugInfoCardMenu';
import ShareInfo from './ShareInfo';
import SocialIcons from './SocialIcons';
import './assets/css/Sidebar.css';
import './assets/css/Widgets.css';
import { resortDrugsByName } from './utility/util.js';

class DrugInfoCards extends Component {
  constructor( props ) {
		super( props );
    this.state = {
      currentInfo: "",
      description: "",
      background: {
        page1: "/images/page-display/default.jpg",
        page2: "/images/page-display/default.jpg"
        },
      previewUrl: "",
      downloadUrl: ""
    }
    this.updateDrug = this.updateDrug.bind(this);
  }

  updateDrug(data){
    this.setState({
      background: Object.assign({}, this.state.background, data.displayUrl),
      currentInfo: data.name,
      description: data.description,
      previewUrl: data.previewUrl,
      downloadUrl: data.downloadUrl
    },() => console.log(this.state))
  }

  renderMenuItems() {
    if(this.props.drugInfoCards) {
      let propsCopy = Object.assign({}, this.props);
      propsCopy.drugInfoCards = propsCopy.drugInfoCards.sort(resortDrugsByName);
      return <Menu childProps={propsCopy} state={this.state.background} updateDrug={this.updateDrug}/>;
    } else {
      return <ul className="navigation"><li><a>No Information Loaded</a></li></ul>
    }
  }

  renderShareButtons() {
    if(this.state.currentInfo) {
      return <ShareInfo url={this.props.match.path} currentData={this.state} />;
    }
  }

  componentDidMount() {
    this.props.getDrugInfoCards()
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

        {this.renderShareButtons()}

        <div className="banner-bg" id="front" style={{backgroundImage: `url(${this.state.background.page1})`}}></div>
        <div className="banner-bg" id="back" style={{backgroundImage: `url(${this.state.background.page2})`}}></div>

      </div>
    )
  }
}

export default DrugInfoCards
