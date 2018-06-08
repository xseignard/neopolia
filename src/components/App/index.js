import React, { Component, Fragment } from 'react';
/// #if ELECTRON
import { HashRouter as Router, Route } from 'react-router-dom';
/// #else
import { BrowserRouter as Router, Route } from 'react-router-dom';
/// #endif

import AppContext from './AppContext';
import Routes from '../../routes';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader';

import { loadData, clearData } from '../../services/loader';
import { isOnline } from '../../utils/internet';

class App extends Component {
	constructor(props) {
		super(props);

		this.changeNav = newNav => {
			this.setState({ prevNav: this.state.nav, nav: newNav });
		};

		this.raycastHandler = target => {
			this.setState({ raycast: target || {} });
		};

		this.loadingHandler = loaded => {
			this.setState({ loaded });
		};

		this.changeTitle = newTitle => {
			this.setState({ prevTitle: this.state.title, title: newTitle });
		};

		this.changeAboutIndex = newIndex => {
			this.setState({ aboutIndex: newIndex });
		};

		this.changeOfferIndex = newIndex => {
			this.setState({ offerIndex: newIndex });
		};

		this.state = {
			nav: 'Products',
			prevNav: 'Products',
			changeNav: this.changeNav,
			raycast: '',
			raycastHandler: this.raycastHandler,
			loaded: false,
			loadingHandler: this.loadingHandler,
			title: 'Products',
			prevTitle: 'Products',
			changeTitle: this.changeTitle,
			aboutIndex: 0,
			changeAboutIndex: this.changeAboutIndex,
			offerIndex: 0,
			changeOfferIndex: this.changeOfferIndex,
			dataLoaded: false,
		};
	}
	async componentDidMount() {
		const online = await isOnline();
		if (online) {
			await clearData();
			await loadData();
		} else if (!localStorage.getItem('companies')) {
			alert('Please go first online and press ctrl+u to load the data.');
		}
		this.setState({ dataLoaded: true });
		window.addEventListener('keydown', async e => {
			if (e.key === 'u') {
				this.setState({ dataLoaded: false });
				await clearData();
				await loadData();
				this.setState({ dataLoaded: true });
			}
		});
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
