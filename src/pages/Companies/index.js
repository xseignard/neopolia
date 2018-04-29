import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

import { getAllCompaniesOffline } from '../../services/company';
import './style.scss';

const CompanyCard = ({ name, logo, id }) => {
	return (
		<Link className="companies__card" to={`/companies/${id}`}>
			<img src={logo} className="companies__logo" alt={`${name}'s logo`} />
			<div className="companies__name">
				<div>{name}</div>
			</div>
		</Link>
	);
};

class Companies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}
	componentDidMount() {
		const companies = getAllCompaniesOffline();
		this.setState({ companies, loaded: true });
	}
	render() {
		let loader = <Loader variant="big" />;
		let companiesCards = null;
		if (this.state.loaded) {
			loader = null;
			companiesCards = this.state.companies.map(c => {
				return (
					<CompanyCard key={c.id} name={c.name} logo={c.logo.sizes.thumbnail} id={c.id} />
				);
			});
		}
		return (
			<div className="page companies">
				{loader}
				<div className="companies__container">{companiesCards}</div>
			</div>
		);
	}
}

export default Companies;
