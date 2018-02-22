import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/MainMenu.css';


class DrugInfoCardMenu extends Component {

  render() {
    const InfoCards = this.props.drug.map((drug)=> {
      return (
        <li id={drug.id}>
          <Link to={drug.name}>{drug.name}</Link>
        </li>
      )
    })

    return(
      <ul className="navigation">
        {InfoCards}
      </ul>
    )
  }
}

export default DrugInfoCardMenu
