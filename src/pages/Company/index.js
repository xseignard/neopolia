import React, { Fragment, Component } from 'react';

import Loader from '../../components/Loader';
import Map from '../../components/Map';
import Slider from '../../components/Slider';
import Close from '../../components/Close';
import Title from '../../components/Title';
import Description from '../../components/Description';

import { getCompanyByIdOffline } from '../../services/company';
import { getRealisationByCompanyIdOffline } from '../../services/realisation';

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
			loader = null;
			const content = this.state.realisations.map(r => {
				return { image: r.pictures[0].url, title: r.name, id: r.id };
			});
			const c = this.state.company;
			let subsidiaries = null;
			if (c.subsidiaries) subsidiaries = c.subsidiaries;
			companyComponent = (
				<Fragment>
					<div className="company__data">
						<Title content={c.name} />
						<Description content={c.presentation} />
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
						<Slider content={content} />
					</div>
				</Fragment>
			);
		}
		return (
			<div className="page company">
				{loader}
				{companyComponent}
				{map}
				<Close nav="Members" />
			</div>
		);
	}
}

export default Company;
