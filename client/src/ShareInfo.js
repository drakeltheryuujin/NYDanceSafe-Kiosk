import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './containers/modalContainer';

class TextDataButton extends Component {

  render() {
    return(
      <div>
        <div className="share-info">
          <ul>
            <li><Link to={`${this.props.url}/text`} onClick={ () => this.props.action("text") }><i className="fa fa-phone-square"></i>Text this info</Link></li>
            <li><Link to={`${this.props.url}/email`} onClick={ () => this.props.action("email") }><i className="fa fa-envelope"></i>Email this info</Link></li>
            {/*<li><Link to={`${this.props.url}/share`} onClick={ () => this.props.action("share") }><i className="fa fa-share-alt-square"></i> Share this info</Link></li>*/}
          </ul>
        </div>
        <Modal currentData={this.props.currentData} modal={this.props.modal}/>
      </div>
    )
  }
}

export default TextDataButton
