import React, { Component } from 'react';
import './assets/css/Widgets.css';
import sendEmailMessage from './actions/emailModalAction'
import sendTextMessage from './actions/textModalAction'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: '',
      optIn: false,
      description: '',
      downloadUrl: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const state = this.state
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  optInToggle(event) {
    this.setState({
      optIn: !this.state.optIn
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let contactInfo = this.state.contactInfo;
    let isValidContact;

    if (this.props.modalOpen.current === "text") {
      let numberRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      isValidContact = contactInfo.match(numberRegEx)
      this.sendAction(isValidContact)
    } else if (this.props.modalOpen.current === "email") {
      let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValidContact = contactInfo.match(emailRegEx)
      this.sendAction(isValidContact)
    }
  }

  sendAction(isValidContact) {
    if(isValidContact !== null && isValidContact.input) {
      console.log('Form submitted with these values: ' + JSON.stringify(this.state));
      if (this.props.modalOpen.current === "text") {
        sendTextMessage(this.state)
      }
      if (this.props.modalOpen.current === "email") {
        sendEmailMessage(this.state)
      }
    }else{
      alert('Please provide valid contact information')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.description !== this.state.description) {
      this.setState({
        description: this.props.currentData.description,
        downloadUrl: this.props.currentData.downloadUrl
      });
    }
  }

  renderModalBody() {
    if (this.props.modalOpen.text === true){
      return(
        <div className="row">
          <div className="col-md-4">
              <div className="preview-image">
                  <img src={`${this.props.currentData.previewUrl}`} alt="preview"/>
              </div>
          </div>
          <div className="col-md-8">
              <h4 className="widget-title">{`Send download via Text for this ${this.props.currentData.currentInfo} Drug Info Card`}</h4>
              <p>Share this information with your friends or save it for later!<br/>
              Many PDF files are 300dpi for print resolution.
              </p>
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <input type="text" className="form-control" id="mobileNumber" name="contactInfo" placeholder="Enter your mobile number" onChange={this.handleInputChange} />
                      <small id="phoneHelp" className="form-text text-muted">We'll never share your number with anyone else or send unsolicited messages.</small>
                  </div>
                  <div className="form-group clearfix">
                    <div className="form-check pull-left">
                      <input type="checkbox" className="form-check-input" id="optIn" name="optIn" onChange={this.optInToggle.bind(this)}/>
                      <label className="form-check-label" htmlFor="optIn">Send me updates about New York DanceSafe</label>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send" />
                    </div>
                  </div>
              </form>
          </div>
        </div>
      )
    } else if (this.props.modalOpen.email === true ) {
      return(
        <div className="row">
          <div className="col-md-4">
              <div className="preview-image">
                  <img src={`${this.props.currentData.previewUrl}`} alt="preview"/>
              </div>
          </div>
          <div className="col-md-8">
              <h4 className="widget-title">{`Send download via Email for this ${this.props.currentData.currentInfo} Drug Info Card`}</h4>
              <p>Share this information with your friends or save it for later!<br/>
              Many PDF files are 300dpi for print resolution.
              </p>
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <input type="email" className="form-control" id="emailAddress" name="contactInfo" placeholder="Enter your email address" onChange={this.handleInputChange} />
                      <small id="phoneHelp" className="form-text text-muted">We'll never share your email with anyone else or send unsolicited messages.</small>
                  </div>
                  <div className="form-group clearfix">
                    <div className="form-check pull-left">
                      <input type="checkbox" className="form-check-input" id="optIn" name="optIn" onChange={this.optInToggle.bind(this)}/>
                      <label className="form-check-label" htmlFor="optIn">Send me updates about New York DanceSafe</label>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send" />
                    </div>
                  </div>
              </form>
          </div>
        </div>
      )
    } // <!-- Logging in for social sharing in this manner seems tedious, scratch it... for now -->
    //else if (this.props.modalOpen.share === true ) {
      // return(
        // <div className="row">
          // <div className="col-md-4">
              // <div className="preview-image">
                  // <img src={`${this.props.currentData.previewUrl}`} alt="preview"/>
              // </div>
          // </div>
          // <div className="col-md-8">
            // <h4 className="widget-title">{`Send Social Shareable Link via Text for this ${this.props.currentData.currentDrug} Drug Info Card`}</h4>
            // <p>Share this information with your friends or save it for later!<br/>
                // Select social media, and click the link that will be sent to your phone to share.
            // </p>
            // <form onSubmit={this.handleSubmit}>
              // <div className="social-media-options">
                  // <label>
                      // <input type="radio" className="hide" name="social1" value="twitter"/>
                      // <i className="fa fa-fw fa-twitter-square"></i>
                  // </label>
                  // <label>
                      // <input type="radio" className="hide" name="social1" value="facebook"/>
                      // <i className="fa fa-fw fa-facebook-square"></i>
                  // </label>
              // </div>
                // <div className="form-group">
                    // <input type="tel" className="form-control" id="inputPhone" name="contactInfo" onChange={this.handleInputChange} />
                    // <small id="phoneHelp" className="form-text text-muted">We'll never share your number with anyone else or send unsolicited messages.</small>
                // </div>
                // <div className="form-group">
                  // <div className="form-check pull-left">
                    // <input type="checkbox" className="form-check-input" id="opt_in" name="optIn"/>
                    // <label className="form-check-label" for="opt-in">Send me updates about New York DanceSafe</label>
                  // </div>
                  // <div className="form-group">
                    // <input type="submit" className="btn btn-primary pull-right btn-lg btn-block" value="Send" />
                  // </div>
                // </div>
            // </form>
          // </div>
        // </div>
      // )
    // } else {
      // return <h4>What?</h4>
    // }
    else if (this.props.modalOpen.social === true ) {
      return(
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="widget-title">{this.props.currentData.currentInfo}</h4>
            <p>Follow us!</p>
          </div>
        </div>
      )
    }
  }

  render() {
    let visibility;
    if (this.props.modalOpen.current === "none") {
      visibility = false;
    } else {
      visibility = true;
    }

	  return(
      <div className={`share-modal modal-visibility-${visibility}`}  id={`${this.props.modalOpen.current}_modal`}>
        <div className="close-modal" onClick={ () => this.props.modal() }><i className="fa fa-times"></i></div>
        {this.renderModalBody()}
      </div>
    )
  }
}

export default Modal
