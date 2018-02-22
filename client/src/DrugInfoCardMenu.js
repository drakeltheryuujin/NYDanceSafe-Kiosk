import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/MainMenu.css';


class DrugInfoCardMenu extends Component {

  render() {

    function resortDrugsByName(a, b) {
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

    let infoCards = this.props.drug
    infoCards = infoCards.sort(resortDrugsByName);
    infoCards = infoCards.map((drug)=> {
      return (
        <li id={drug.id}>
          <Link to={drug.name}>{drug.name}</Link>
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
