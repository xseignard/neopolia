import React from 'react';

import Right from './assets/right.svg';
import Left from './assets/left.svg';

import './style.scss';

const Title = ({ content, size }) => {
	return (
		<div className="title">
			<div className="title__decoration">
				<Left className="title__svg left" />
				<div />
			</div>
			<h1 className="title__name" style={{ fontSize: `${size || 72}px`}}dangerouslySetInnerHTML={{ __html: content }} />
			<Right className="title__svg right" />
		</div>
	);
};

export default Title;
