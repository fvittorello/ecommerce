import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Components
import { HomePage } from 'pages/HomePage';
import ShopPage from 'pages/Shop';
import { Header } from 'components/Header';

const HatsPage = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Hats page</h1>
		</div>
	);
};

export function App() {
	return (
		<div>
			{/* <HomePage /> */}
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}
