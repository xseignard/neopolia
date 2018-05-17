import React, { Fragment, Component } from 'react';
import Loader from '../../components/Loader';
import Map from '../../components/Map';
import Slider from '../../components/Slider';

import { getCompanyByIdOffline } from '../../services/company';
import { getRealisationByCompanyIdOffline } from '../../services/realisation';

import Desc from './assets/desc.svg';
import Title from './assets/title.svg';
import Top from './assets/top.svg';

import './style.scss';

class Company extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	componentDidMount() {
		const company = getCompanyByIdOffline(this.props.match.params.companyId);
		const realisations = getRealisationByCompanyIdOffline(this.props.match.params.companyId);
		this.setState({ company, realisations, loaded: true });
	}

	render() {
		let loader = <Loader variant="big" />;
		let companyComponent = null;
		let map = null;
		if (this.state.loaded) {
			console.log(this.state.company);
			loader = null;
			const images = this.state.realisations.map(r => r.pictures[0].url);
			let realisationsFragment = <Slider images={images} />;
			const c = this.state.company;
			let subsidiaries = null;
			if (c.subsidiaries) subsidiaries = c.subsidiaries.map(s => s.subsidiary);
			companyComponent = (
				<Fragment>
					<div className="company__data">
						<div className="company__name">
							<Top className="company__svg top" />
							<Title className="company__svg title" />
							<h1>{c.name}</h1>
						</div>
						<div className="company__presentation">
							<Desc className="company__svg desc" />
							<p>{c.presentation}</p>
						</div>
						<div className="company__logo">
							<img src={c.logo.sizes.large} alt={`${c.name}'s logo`} />
						</div>
					</div>
					<div className="company__details">
						<Map hq={c.headquarters} subs={subsidiaries} />
						<div className="company__numbers">
							<p className="company__turnover">
								<span>Turnover: </span>
								{c.turnover}
							</p>
							<p className="company__workforce">
								<span>Workforce: </span>
								{c.workforce}
							</p>
							<p className="company__certifications">
								<span>Certifications: </span>
								{(c.certifications && c.certifications.join(', ')) || 'None'}
							</p>
							<p className="company__expertises">
								<span>Expertises: </span>
								{(c.fields_of_expertise && c.fields_of_expertise.join(', ')) ||
									'None'}
							</p>
							<p className="company__knowledges">
								<span>Knowledges: </span>
								{(c.knowledge && c.knowledge.join(', ')) || 'None'}
							</p>
						</div>
						{realisationsFragment}
					</div>
				</Fragment>
			);
		}
		return (
			<div className="page company">
				{loader}
				{companyComponent}
				{map}
			</div>
		);
	}
}

export default Company;
