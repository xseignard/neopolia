import React from 'react';
import AppContext from '../App/AppContext';

import './style.scss';

const Test = () => {
	return (
		<AppContext.Consumer>
			{context =>
				context.nav === 'Products' &&
				context.raycast.object &&
				context.raycast.object.name ? (
					<h1 className="test">{context.raycast.object.name}</h1>
				) : null
			}
		</AppContext.Consumer>
	);
};

export default Test;
