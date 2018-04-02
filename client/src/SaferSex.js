import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header';
import Menu from './DrugInfoCardMenu';
import ShareInfo from './ShareInfo';
import SocialIcons from './SocialIcons';
import './assets/css/Sidebar.css';
import './assets/css/Widgets.css';
import { resortDrugsByName } from './utility/util.js';

class SaferSex extends Component {
  constructor( props ) {
		super( props );
    this.state = {
      currentInfo: "",
      description: "",
      background: {
        page1: "/images/page-display/default.jpg",
        page2: "/images/page-display/default.jpg",
        page3: "/images/page-display/default.jpg"
        },
      previewUrl: "",
      downloadUrl: "",
      modalOpen: "false"
      }
      this.updateDrug = this.updateDrug.bind(this);
      this.openShareModal = this.openShareModal.bind(this);
      this.openTextModal = this.openTextModal.bind(this);
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

  openTextModal(){
    this.setState({
      modalOpen: "true"
    },() => console.log(this.state.modalOpen))
  }

  openShareModal(){
    this.setState({
      modalOpen: "true"
    },() => console.log(this.state.modalOpen))
  }

  closeModal(){
    this.setState({
        modalOpen: "false"
    },() => console.log(this.state.modalOpen))
  }

  resortDrugsByName(a, b) {
      const drugA = a.prettyName.toUpperCase();
      const drugB = b.prettyName.toUpperCase();

      let resort = 0;
      if (drugA > drugB) {
        resort = 1;
      } else if (drugA < drugB) {
        resort = -1;
      }
      return resort;
  }

  renderMenuItems() {
    if(this.props.drugInfoCards) {
      let propsCopy = Object.assign({}, this.props);
      propsCopy.drugInfoCards = propsCopy.drugInfoCards.sort(this.resortDrugsByName);
      return <Menu childProps={propsCopy} state={this.state.background} updateDrug={this.updateDrug} />;
    } else {
      return <ul className="navigation"><li><a>No Information Loaded</a></li></ul>
    }
  }

  componentDidMount() {
    this.props.getSaferSex()
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

        <ShareInfo url={this.props.match.path} action={this.openModal} currentData={this.state} modal={this.closeModal}/>

        <div className="banner-bg full-height" id="front">
          <img src={this.state.background.page1}/>
          if (this.state.background.page2){
            <img src={this.state.background.page2}/>
          }
          if (this.state.background.page3){
          <img src={this.state.background.page3}/>
          }
        </div>

      </div>
    )
  }
}

export default SaferSex
