import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextDataButton extends Component {

  render() {
    return(
      <li><Link to="/share"><i className="fa fa-share-alt-square"></i> Share this info</Link></li>
    )
  }
}

export default TextDataButton
