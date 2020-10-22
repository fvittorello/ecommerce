import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Components
import { HomePage } from 'pages/HomePage';
import ShopPage from 'pages/Shop';
import { SignInAndSignUpPage } from 'pages/SignIn-SignUp';
import { Header } from 'components/Header';
import { auth } from 'firebase/firebase.utils';

const HatsPage = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Hats page</h1>
		</div>
	);
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/hats' component={HatsPage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
