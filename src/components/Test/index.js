import React, { Fragment } from 'react';
import AppContext from '../App/AppContext';

import Close from './assets/close.svg';

import './style.scss';

const Test = () => {
	return (
		<AppContext.Consumer>
			{context => {
				let content = null;
				let styles = 'test';
				if (
					context.nav === 'Products' &&
					context.raycast.object &&
					context.raycast.object.name
				) {
					content = (
						<Fragment>
							<h1>{context.raycast.object.name}</h1>
							<p>Blablablablablabla</p>
							<p>Blablablablablabla</p>
							<p>Blablablablablabla</p>
							<Close onClick={() => context.raycastHandler([{}])} />
						</Fragment>
					);
					styles += ' test-visible';
				}
				return <div className={styles}>{content}</div>;
			}}
		</AppContext.Consumer>
	);
};

export default Test;
