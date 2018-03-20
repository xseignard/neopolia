import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import Detail from './components/Detail';
import Companies from './components/Companies';
import Company from './components/Company';
import Contact from './components/Contact';
import About from './components/About';

const history = createBrowserHistory();

const Routes = props => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/detail/:id" component={Detail} />
			<Route exact path="/companies" component={Companies} />
			<Route path="/companies/:id" component={Company} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/about" component={About} />
		</div>
	</Router>
);

export default Routes;
