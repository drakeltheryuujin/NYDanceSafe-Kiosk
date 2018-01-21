import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
import Welcome from '../components/Welcome';

class MainHeader extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.dispatch(getStarted());
	}
	render() {
		return (
        <Welcome welcomeText={ this.props.welcomeText } />
		);
	}
}

export default connect(state => state)(MainHeader);
