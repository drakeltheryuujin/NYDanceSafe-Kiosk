import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Widgets.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      social: 'twitter',
      mobileNumber: '',
      optIn: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'radio' || target.type === 'checkbox' ? target.checked : target.placeholder
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    debugger
    console.log('Form submitted with these values: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {

	  return(
      <div className={`share-modal modal-visibility-${this.props.currentData.modalOpen}`}  id="text">
          <div className="row">
            <div className="col-md-4">
                <div className="preview-image">
                    <img src={`${this.props.currentData.previewUrl}`} alt="preview"/>
                </div>
            </div>
            <div className="col-md-8">
                <h4 className="widget-title">{`Send Social Shareable Link via Text for this ${this.props.currentData.currentDrug} Drug Info Card`}</h4>
                <p>Share this information with your friends or save it for later!<br/>
                    Select social media, and click the link that will be sent to your phone to share.
                </p>
                <form onSubmit={this.handleSubmit}>
                  <div className="social-media-options">
                      <label>
                          <input type="radio" className="hide" name="social1" value="twitter"/>
                          <i className="fa fa-fw fa-twitter-square"></i>
                      </label>
                      <label>
                          <input type="radio" className="hide" name="social1" value="facebook"/>
                          <i className="fa fa-fw fa-facebook-square"></i>
                      </label>
                  </div>
                    <div className="form-group">
                        <input type="tel" className="form-control" id="inputPhone" value={this.state.mobileNumber} onChange={this.handleInputChange} />
                        <small id="phoneHelp" className="form-text text-muted">We'll never share your number with anyone else or send unsolicited messages.</small>
                    </div>
                    <div className="form-group">
                      <div className="form-check pull-left">
                        <input type="checkbox" className="form-check-input" id="opt_in" name="optIn"/>
                        <label className="form-check-label" for="opt-in">Send me updates about New York DanceSafe</label>
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary pull-right btn-lg btn-block" value="Send" />
                      </div>
                    </div>
                </form>
            </div>
          </div>
      </div>
    )
  }
}

export default Header
