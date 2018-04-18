import React from 'react';
import { Loader as ReactLoader } from 'react-loaders';

import './style.scss';

const Loader = () => {
	return <ReactLoader type="square-spin" innerClassName="loader__custom" />;
};

export default Loader;
