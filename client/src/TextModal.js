import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Widgets.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      optIn: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      mobileNumber: target.value,
      optIn: target.checked
    });
  }

  handleSubmit(event) {
    console.log('Form submitted with these values: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  sendSms() {
    axios('/api/send', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({recipient: this.state.recipient})
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
    })
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
                <h4 className="widget-title">{`Send download via Text for this ${this.props.currentData.currentDrug} Drug Info Card`}</h4>
                <p>{`Share this information with your friends or save it for later!</br>
                Many PDF files are 300dpi for print resolution.`}
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputPhone"  placeholder="Enter your mobile number" onChange={this.handleInputChange} />
                        <small id="phoneHelp" className="form-text text-muted">We'll never share your number with anyone else or send unsolicited messages.</small>
                    </div>
                    <div className="form-group">
                      <div className="form-check pull-left">
                        <input type="checkbox" className="form-check-input" id="opt_in" name="optIn" checked={this.state.optIn} onChange={this.handleInputChange}/>
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
