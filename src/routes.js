import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import createBrowserHistory from 'history/createBrowserHistory';

import Scene from './pages/Scene';
import Companies from './pages/Companies';
import Company from './pages/Company';
import Offer from './pages/Offer';
import About from './pages/About';

const history = createBrowserHistory();

const Routes = withRouter(({ location }) => (
	<TransitionGroup>
		<CSSTransition key={location.key} classNames="fade" timeout={300}>
			<Switch location={location}>
				<Route exact path="/" component={Scene} />
				<Route exact path="/companies" component={Companies} />
				<Route path="/companies/:companyId" component={Company} />
				<Route path="/offer" component={Offer} />
				<Route path="/about" component={About} />
			</Switch>
		</CSSTransition>
	</TransitionGroup>
));

export default Routes;
