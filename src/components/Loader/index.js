import React from 'react';
import { Loader as ReactLoader } from 'react-loaders';

import './style.scss';

const Loader = ({ variant }) => {
	let className = 'loader';
	if (variant) className += ` loader-${variant}`;
	return <ReactLoader type="square-spin" className={className} innerClassName="loader__custom" />;
};

export default Loader;
