import React, { Component } from 'react';
import { getAllMembers } from '../../services/member';
import './style.scss';

class Companies extends Component {
	async componentDidMount() {
		const members = await getAllMembers();
		console.log(members);
	}
	render() {
		return (
			<div>
				<h1>Companies</h1>
			</div>
		);
	}
}

export default Companies;
