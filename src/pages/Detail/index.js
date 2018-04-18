import React, { Component } from 'react';

import { getAllRealisations } from '../../services/realisation';

class Detail extends Component {
	async componentDidMount() {
		const works = await getAllRealisations();
		console.log(works);
	}
	render() {
		return (
			<div className="page detail">
				<h1>Detail</h1>
			</div>
		);
	}
}

export default Detail;
