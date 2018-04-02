import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Widgets.css';
import sendEmailMessage from './actions/emailModalAction'
import emailModalContainer from './containers/emailModalContainer'

class EmailModal extends Component {
  render() {
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
  }
}

export default EmailModal
