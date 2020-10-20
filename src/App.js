import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Components
import { HomePage } from 'pages/HomePage';

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
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}
