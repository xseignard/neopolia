import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppContext from './AppContext';
import Routes from '../../routes';
import Header from '../Header';
import Footer from '../Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.changeNav = newNav => {
			this.setState({ nav: newNav });
		};

		this.raycastHandler = target => {
			const filtered = target.reduce((x, y) => {
				const index = x.findIndex(e => e.object.parent.name === y.object.parent.name);
				return index < 0 ? [...x, y] : x;
			}, [])[0];
			this.setState({ raycast: filtered.object ? filtered.object.parent : {} });
		};

		this.loadingHandler = loaded => {
			this.setState({ loaded });
		};

		this.state = {
			nav: 'Products',
			changeNav: this.changeNav,
			raycast: '',
			raycastHandler: this.raycastHandler,
			loaded: false,
			loadingHandler: this.loadingHandler,
		};
	}
	render() {
		return (
			<AppContext.Provider value={this.state}>
				<Router>
					<Fragment>
						<Header />
						<Footer />
						<Routes />
					</Fragment>
				</Router>
			</AppContext.Provider>
		);
	}
}

export default App;
