import React from 'react';
import AppContext from '../App/AppContext';

import './style.scss';

const Test = () => {
	return (
		<AppContext.Consumer>
			{context => (
				<h1 className="test">
					{context.raycast.object ? context.raycast.object.name : 'Nope'}
				</h1>
			)}
		</AppContext.Consumer>
	);
};

export default Test;
