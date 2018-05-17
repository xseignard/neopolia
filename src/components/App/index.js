import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppContext from './AppContext';
import Routes from '../../routes';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader';

import { loadData } from '../../services/loader';

class App extends Component {
	constructor(props) {
		super(props);

		this.changeNav = newNav => {
			this.setState({ nav: newNav });
		};

		this.raycastHandler = target => {
			this.setState({ raycast: target || {} });
		};

		this.loadingHandler = loaded => {
			this.setState({ loaded });
		};

		this.changeTitle = newTitle => {
			this.setState({ title: newTitle });
		};

		this.changeAboutIndex = newIndex => {
			this.setState({ aboutIndex: newIndex });
		};

		this.changeOfferIndex = newIndex => {
			this.setState({ offerIndex: newIndex });
		};

		this.state = {
			nav: 'Products',
			changeNav: this.changeNav,
			raycast: '',
			raycastHandler: this.raycastHandler,
			loaded: false,
			loadingHandler: this.loadingHandler,
			title: 'Products',
			changeTitle: this.changeTitle,
			aboutIndex: 0,
			changeAboutIndex: this.changeAboutIndex,
			offerIndex: 0,
			changeOfferIndex: this.changeOfferIndex,
			dataLoaded: false,
		};
	}
	async componentDidMount() {
		await loadData();
		this.setState({ dataLoaded: true });
	}

	render() {
		let loader = <Loader variant="big" />;
		let routes = null;
		if (this.state.dataLoaded) {
			loader = null;
			routes = <Routes />;
		}
		return (
			<AppContext.Provider value={this.state}>
				<Router>
					<Fragment>
						<Header />
						<Footer />
						{routes}
						{loader}
					</Fragment>
				</Router>
			</AppContext.Provider>
		);
	}
}

export default App;
