import React, { Component, Fragment } from 'react';

import Loader from '../../components/Loader';
import Slider from '../../components/Slider';
import Close from '../../components/Close';
import Title from '../../components/Title';

import { getRealisationByIdOffline } from '../../services/realisation';

import './style.scss';

class Realisation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}
	componentDidMount() {
		const realisation = getRealisationByIdOffline(this.props.match.params.realisationId);
		this.setState({ realisation, loaded: true });
	}
	render() {
		let loader = <Loader variant="big" />;
		let realisationFragment = null;
		if (this.state.loaded) {
			loader = null;
			const r = this.state.realisation;
			const pictures = r.pictures.map(p => {
				return { image: p.url };
			});
			realisationFragment = (
				<Fragment>
					<Title content={r.name} size={40} />
					<div className="realisation__details">
						<div className="realisation__numbers">
							{r.amount && (
								<p className="realisation__amount">
									<span>Amount: </span>
									{r.amount}
								</p>
							)}
							<p className="realisation__application">
								<span>Application: </span>
								{r.application.join(', ')}
							</p>
							<p className="realisation__client">
								<span>Client: </span>
								{r.client_name}
							</p>
							{r.geographic_zone && (
								<p className="realisation__geographic">
									<span>Geographic zone: </span>
									{r.geographic_zone.join(', ')}
								</p>
							)}
							{r.market_type && (
								<p className="realisation__market">
									<span>Market type: </span>
									{r.market_type.join(', ')}
								</p>
							)}
							{r.program && (
								<p className="realisation__program">
									<span>Program: </span>
									{r.program.join(', ')}
								</p>
							)}
							<p className="realisation__zone">
								<span>Zone: </span>
								{r.zone.join(', ')}
							</p>
							<p className="realisation__certifications">
								<span>Certifications: </span>
								{(r.certifications && r.certifications.join(', ')) || 'None'}
							</p>
						</div>
						<Slider className="realisation__slider" content={pictures} size={500} />
					</div>
				</Fragment>
			);
		}
		return (
			<div className="page realisation">
				{loader}
				{realisationFragment}
				<Close />
			</div>
		);
	}
}

export default Realisation;
