import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../App/AppContext';
import { getVignetteByNameOffline } from '../../services/vignette';
import { getRealisationByIdOffline } from '../../services/realisation';

import Loader from '../Loader';
import Close from './assets/close.svg';

import './style.scss';

class VignetteContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
		this.loadData = vignetteName => {
			if (vignetteName) {
				const vignette = getVignetteByNameOffline(vignetteName);
				if (vignette) {
					const realisations = [];
					for (let realisation of vignette.realisations) {
						const currentRealisation = getRealisationByIdOffline(realisation.ID);
						realisations.push(currentRealisation);
					}
					this.setState({ vignette, realisations, loaded: true });
				} else return null;
			} else return null;
		};
	}
	componentDidMount() {
		this.loadData(this.props.vignetteName);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.vignetteName !== this.props.vignetteName) {
			this.setState({ vignette: {}, realisations: [], loaded: false });
			this.loadData(nextProps.vignetteName);
		}
	}
	render() {
		let content = null;
		let loader = <Loader variant="relative" />;
		if (this.state.loaded) {
			loader = null;
			content = this.state.realisations.map(r => (
				<Link to={`/realisation/${r.id}`} className="vignette__realisation" key={r.id}>
					<img src={r.pictures[0].sizes.thumbnail} alt={r.piece_name} />
					<div className="vignette__name" dangerouslySetInnerHTML={{ __html: r.name }} />
				</Link>
			));
		}
		return (
			<Fragment>
				<h1>{this.state.vignette ? this.state.vignette.title : this.vignetteName}</h1>
				<Close onClick={() => this.props.closeHandler([{}])} />
				<div className="vignette__realisations">{content}</div>
				{loader}
			</Fragment>
		);
	}
}

const Vignette = () => {
	return (
		<AppContext.Consumer>
			{context => {
				let content = null;
				let styles = 'vignette';
				if (context.nav === 'Products' && context.raycast && context.raycast.name) {
					content = (
						<VignetteContent
							vignetteName={context.raycast.name}
							closeHandler={context.raycastHandler}
						/>
					);
					styles += ' vignette-visible';
				}
				return <div className={styles}>{content}</div>;
			}}
		</AppContext.Consumer>
	);
};

export default Vignette;
