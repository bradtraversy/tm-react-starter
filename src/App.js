import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Header />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	);
};

export default App;
