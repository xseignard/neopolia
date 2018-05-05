import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getAllCompaniesOffline } from '../../services/company';
import Loader from '../../components/Loader';
import Close from './assets/close.svg';

import './style.scss';

const CompanyCard = ({ name, logo, id }) => {
	return (
		<Link className="companies__card" to={`/company/${id}`}>
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
		let companies = getAllCompaniesOffline();
		const param = this.props.match.params.filter;
		if (param && param !== 'close') {
			const filter = param.replace(/_/gi, ' ');
			companies = companies.filter(c => c.fields_of_expertise.includes(filter));
			this.setState({ companies, loaded: true });
		}
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
		let close = null;
		if (this.props.match.params.filter)
			close = <Close onClick={() => this.props.history.goBack()} />;
		return (
			<div className="page companies">
				{loader}
				{close}
				<div className="companies__container">{companiesCards}</div>
			</div>
		);
	}
}

export default withRouter(Companies);
