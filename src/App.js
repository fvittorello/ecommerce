import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from 'redux/user/user.selector';
import { checkUserSession } from 'redux/user/user.actions';

// Components
import { HomePage } from 'pages/HomePage';
import ShopPage from 'pages/Shop';
import { SignInAndSignUpPage } from 'pages/SignIn-SignUp';
import Checkout from 'pages/Checkout';
import Header from 'components/Header';

// Styles
import './App.css';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={Checkout} />
				<Route exact path='/signin' render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />)} />
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
