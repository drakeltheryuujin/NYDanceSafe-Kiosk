import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Widgets.css';
import sendTextMessage from './actions/textModalAction'
import textModalContainer from './containers/textModalContainer'

class TextModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
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
    let mobileNumber = this.state.mobileNumber;
    let regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let isValidNumber = mobileNumber.match(regEx)

    if(isValidNumber !== null && isValidNumber.input) {
      console.log('Form submitted with these values: ' + JSON.stringify(this.state));
      sendTextMessage(this.state)
    }else{
      alert('Please provide a valid phone number')
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

  render() {
	  return(
      <div className={`share-modal modal-visibility-${this.props.currentData.modalOpen}`}  id="text">
          <div className="close-modal" onClick={ () => this.props.modal() }><i className="fa fa-times"></i></div>
          <div className="row">
            <div className="col-md-4">
                <div className="preview-image">
                    <img src={`${this.props.currentData.previewUrl}`} alt="preview"/>
                </div>
            </div>
            <div className="col-md-8">
                <h4 className="widget-title">{`Send download via Text for this ${this.props.currentData.currentInfo} Drug Info Card`}</h4>
                <p>{`Share this information with your friends or save it for later!</br>
                Many PDF files are 300dpi for print resolution.`}
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" onChange={this.handleInputChange} />
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
      </div>
    )
  }
}

export default TextModal
