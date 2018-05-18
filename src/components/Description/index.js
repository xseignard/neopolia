import React from 'react';

import Right from './assets/right.svg';

import './style.scss';

const Description = ({ content }) => {
	return (
		<div className="description">
			<p className="description__content" dangerouslySetInnerHTML={{ __html: content }} />
			<Right className="description__svg" />
		</div>
	);
};

export default Description;
