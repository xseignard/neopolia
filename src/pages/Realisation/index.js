import React, { Component, Fragment } from 'react';
import Loader from '../../components/Loader';
import Slider from '../../components/Slider';

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
			const pictures = r.pictures.map(p => p.url);
			realisationFragment = (
				<Fragment>
					<div className="realisation__data">
						<h1
							className="realisation__name"
							dangerouslySetInnerHTML={{ __html: r.name }}
						/>
						<div className="realisation__numbers">
							<p className="realisation__amount">
								<span>Amount: </span>
								{r.amount}
							</p>
							<p className="realisation__application">
								<span>Application: </span>
								{r.application}
							</p>
							<p className="realisation__client">
								<span>Client: </span>
								{r.client_name}
							</p>
							<p className="realisation__geographic">
								<span>Geographic zone: </span>
								{r.geographic_zone}
							</p>
							<p className="realisation__market">
								<span>Market type: </span>
								{r.market_type}
							</p>
							<p className="realisation__program">
								<span>Program: </span>
								{r.program}
							</p>
							<p className="realisation__zone">
								<span>Zone: </span>
								{r.zone}
							</p>
							<p className="realisation__certifications">
								<span>Certifications: </span>
								{(r.certifications && r.certifications.join(', ')) || 'None'}
							</p>
							<Slider images={pictures} />
						</div>
					</div>
				</Fragment>
			);
		}
		return (
			<div className="page realisation">
				{loader}
				{realisationFragment}
			</div>
		);
	}
}

export default Realisation;
