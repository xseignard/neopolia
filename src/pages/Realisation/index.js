import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../../components/Loader';
import Slider from '../../components/Slider';
import Close from '../../components/Close';
import Title from '../../components/Title';

import { getRealisationByIdOffline } from '../../services/realisation';
import { getCompanyByIdOffline } from '../../services/company';

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
		const company = getCompanyByIdOffline(realisation.company[0].ID);
		this.setState({ realisation, company, loaded: true });
	}
	render() {
		let loader = <Loader variant="big" />;
		let realisationFragment = null;
		if (this.state.loaded) {
			loader = null;
			const r = this.state.realisation;
			const c = this.state.company;
			const pictures = r.pictures.map(p => {
				return { image: p.url };
			});
			realisationFragment = (
				<Fragment>
					<Title content={r.name} size={40} />
					<Link className="realisation__logo" to={`/company/${c.id}/Products`}>
						<img src={c.logo.sizes.thumbnail} alt={`${c.name}'s logo`} />
					</Link>
					<div className="realisation__details">
						<div className="realisation__numbers">
							{r.amount && (
								<p className="realisation__amount">
									<span>Amount: </span>
									{r.amount}
								</p>
							)}
							{r.application && (
								<p className="realisation__application">
									<span>Application: </span>
									{Array.isArray(r.application)
										? r.application.join(', ')
										: r.application}
								</p>
							)}
							{r.client_name && (
								<p className="realisation__client">
									<span>Client: </span>
									{r.client_name}
								</p>
							)}
							{r.geographic_zone && (
								<p className="realisation__geographic">
									<span>Geographic zone: </span>
									{Array.isArray(r.geographic_zone)
										? r.geographic_zone.join(', ')
										: r.geographic_zone}
								</p>
							)}
							{r.market_type && (
								<p className="realisation__market">
									<span>Market type: </span>
									{Array.isArray(r.market_type)
										? r.market_type.join(', ')
										: r.market_type}
								</p>
							)}
							{r.program && (
								<p className="realisation__program">
									<span>Program: </span>
									{Array.isArray(r.program) ? r.program.join(', ') : r.program}
								</p>
							)}
							{r.zone && (
								<p className="realisation__zone">
									<span>Zone: </span>
									{Array.isArray(r.zone) ? r.zone.join(', ') : r.zone}
								</p>
							)}
							{r.certifications && (
								<p className="realisation__certifications">
									<span>Certifications: </span>
									{Array.isArray(r.certifications)
										? r.certifications.join(', ')
										: r.certifications}
								</p>
							)}
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
