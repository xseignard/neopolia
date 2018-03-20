import React, { Component } from 'react';

import { getAllWorks } from '../../services/work';

class Detail extends Component {
	async componentDidMount() {
		const works = await getAllWorks();
		console.log(works);
	}
	render() {
		return (
			<div>
				<h1>Detail</h1>
			</div>
		);
	}
}

export default Detail;
