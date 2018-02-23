import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/MainMenu.css';



class DrugInfoCardMenu extends Component {
  constructor(props){
    super(props);
    this.sendData = this.sendData.bind(this);
    this.sendData = this.sendData.bind(this);
    this.background = this.props.background;
  }
  sendData(e, data){
   	this.props.action(data.displayUrl)
  }

  render() {

    let infoCards = this.props.childProps.drugInfoCards
    let url = this.props.childProps.match.path
    infoCards = infoCards.map((drug)=> {
      return (
        <li id={drug.id}>
          <Link to={`${url}/${drug.prettyName}`} onClick={ (e) => {this.sendData(e, drug)} }>{drug.name}</Link>
        </li>
      )
    })

    return(
      <ul className="navigation">
        {infoCards}
      </ul>
    )
  }
}

export default DrugInfoCardMenu
