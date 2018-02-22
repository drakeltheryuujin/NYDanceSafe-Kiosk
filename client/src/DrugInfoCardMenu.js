import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/MainMenu.css';


class DrugInfoCardMenu extends Component {

  render() {
    // const drugInfoCard = this.props
    const drugInfoCard = ["test1", "test2", "test3", "test4"]

    const InfoCards = drugInfoCard.map((drugName)=> {
      return (
        <li id={drugName}>
          <Link to={drugName}>{drugName}</Link>
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
