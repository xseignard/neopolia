import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/main.scss';

import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
	<Router>
		<Fragment>
			<Header />
			<Footer />
			<Routes location={location} />
		</Fragment>
	</Router>
);

render(<App />, document.getElementById('root'));
