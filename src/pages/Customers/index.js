import React, { Component, Fragment } from 'react';
import { getAllCustomersOffline } from '../../services/customer';
import Loader from '../../components/Loader';
import Close from '../../components/Close';

import './style.scss';

const CustomerCard = ({ name, logo }) => {
	return (
		<div className="customers__card">
			<img src={logo} className="customers__logo" alt={`${name}'s logo`} />
			<div className="customers__name">
				<div>{name}</div>
			</div>
		</div>
	);
};

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}
	componentDidMount() {
		let customers = getAllCustomersOffline();
		const param = this.props.match.params.filter;
		if (param && param !== 'close') {
			const filter = param.replace(/_/gi, ' ');
			customers = customers.filter(c => c.fields_of_expertise.includes(filter));
		}
		customers.sort((a, b) => a.name.localeCompare(b.name));
		this.setState({ customers, loaded: true });
	}
	render() {
		let loader = <Loader variant="big" />;
		let customersCards = null;
		if (this.state.loaded) {
			loader = null;
			customersCards = this.state.customers.map(c => {
				return <CustomerCard key={c.id} name={c.name} logo={c.logo.sizes.thumbnail} />;
			});
		}
		return (
			<div className="page customers">
				{loader}
				<h1 className="customers__title">Our customers</h1>
				<Close nav="Offer" title="Offer" />
				<div className="customers__container">{customersCards}</div>
			</div>
		);
	}
}

export default Customers;
