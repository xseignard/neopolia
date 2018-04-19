import React, { Fragment, Component } from 'react';
import Loader from '../../components/Loader';

import { getCompanyById } from '../../services/company';
import './style.scss';

class Company extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	async componentDidMount() {
		const company = await getCompanyById(this.props.match.params.companyId);
		this.setState({ company, loaded: true });
	}

	render() {
		let loader = <Loader />;
		let companyComponent = null;
		if (this.state.loaded) {
			loader = null;
			const c = this.state.company;
			companyComponent = (
				<Fragment>
					<div className="company__data">
						<h1 className="company__name">{c.name}</h1>
						<p className="company__presentation">{c.presentation}</p>
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
						</div>
					</div>
					<div className="company__logo">
						<img src={c.logo.sizes.large} alt={`${c.name}'s logo`} />
					</div>
				</Fragment>
			);
		}
		return (
			<div className="page company">
				{loader}
				{companyComponent}
			</div>
		);
	}
}

export default Company;
