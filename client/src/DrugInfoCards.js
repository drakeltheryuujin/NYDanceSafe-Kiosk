import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header';
import Menu from './DrugInfoCardMenu';
import TextDataButton from './TextDataButton';
import ShareDataButton from './ShareDataButton';
import SocialIcons from './SocialIcons';
import './assets/css/Sidebar.css';
import './assets/css/Widgets.css';

class Home extends Component {
  constructor( props ) {
		super( props );
    this.state = {
      background: {
        page1: "/client/src/assets/images/page-display/drug-info-cards/en/front/2cs.jpg",
        page2: "/client/src/assets/images/page-display/drug-info-cards/en/back/2cs.jpg"
        }
      }
      this.displayData = this.displayData.bind(this);
    }

  displayData(data){
    this.setState({
        background: Object.assign({}, this.state.background, data
      ),
    },() => console.log(this.state.background))
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
      return <Menu childProps={propsCopy} state={this.state.background} action={this.displayData}/>;
    } else {
      return '<ul className="navigation"><li>No Information to Load</li></ul>';
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

        <div className="share-info">
          <ul>
            <TextDataButton/>
            <ShareDataButton/>
          </ul>
        </div>
        <div className="banner-bg" id="front" style={{backgroundImage: `url(${this.state.background.page1})`}}></div>
        <div className="banner-bg" id="back" style={{backgroundImage: `url(${this.state.background.page2})`}}></div>
      </div>
    )
  }
}

export default Home
