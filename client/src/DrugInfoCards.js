import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
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
      downloadUrl: "",
      modalOpen: {
        current: "none",
        text: false,
        email: false,
        share: false
      }
    }

    this.updateDrug = this.updateDrug.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal(modal){
    let modalOpen = Object.assign({}, this.state.modalOpen); //copy
    modalOpen = _.mapValues(this.state.modalOpen, () => false); //make sure all are closed
    this.setState({modalOpen}) //set to close all modals first
    modalOpen[modal] = true; //set to open specific modal
    modalOpen.current = modal; //set current modal
    this.setState({
      modalOpen: modalOpen,
    },() => console.log(this.state.modalOpen)) // sets state with 1 modal open
  }

  closeModal(){
    let modalOpen = Object.assign({}, this.state.modalOpen);
    modalOpen = _.mapValues(this.state.modalOpen, () => false);
    modalOpen.current = "none"; //set current modal
    this.setState({modalOpen})
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
      return <ShareInfo url={this.props.match.path} action={this.openModal} currentData={this.state} modal={this.closeModal}/>;
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
