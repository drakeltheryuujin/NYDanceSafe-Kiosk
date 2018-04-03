import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Modal from './containers/modalContainer';

class TextDataButton extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      modalOpen: {
        current: "none",
        text: false,
        email: false,
        share: false
      }
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    return(
      <div>
        <div className="share-info">
          <ul>
            <li><Link to={`${this.props.url}/text`} onClick={ () => this.openModal("text") }><i className="fa fa-phone-square"></i>Text this info</Link></li>
            <li><Link to={`${this.props.url}/email`} onClick={ () => this.openModal("email") }><i className="fa fa-envelope"></i>Email this info</Link></li>
            {/*<li><Link to={`${this.props.url}/share`} onClick={ () => this.props.action("share") }><i className="fa fa-share-alt-square"></i> Share this info</Link></li>*/}
          </ul>
        </div>
        <Modal currentData={this.props.currentData} modalOpen={this.state.modalOpen} modal={this.closeModal}/>
      </div>
    )
  }
}

export default TextDataButton
