import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/WelcomePage.sass';

const description = '/*The place where enthusiastic students meet innovative IT projects and help to solve real-life problems*/';

class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	render() {
		console.log('AUTHETICATED', this.props.authenticated);
		if (this.props.authenticated) {
			this.props.history.push('/feed');
		}
		return (
			<div id="welcome">
				<div className="title">HireMe.kz</div>
				<div className="description"> {description} </div>
				<button onClick={() => this.onClickHandler('login')}>Sign in</button>
				<button onClick={() => this.onClickHandler('register')}>Sign up</button>
			</div>
		);
	}

	onClickHandler(name) {
		this.props.history.push('/' + name);
		console.log(`goto: ${name}`);
	}
}

function mapStateToProps({auth: {authenticated}}) {
	return {
		authenticated
	}
}

WelcomePage = connect(mapStateToProps)(WelcomePage);

export default withRouter(WelcomePage);
