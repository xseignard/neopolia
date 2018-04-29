import React from 'react';
import Slideshow from '../../components/Slideshow';

import './style.scss';
import menu from './assets/menu.jpg';

const Offer = () => {
	const conf = [
		{
			menu: { img: menu, name: 'Fields of expertise' },
			slide: { className: 'expetise', content: 'Fields of expertise' },
		},
		{
			menu: { img: menu, name: 'Levels of positioning' },
			slide: { className: 'positioning', content: 'Levels of positioning' },
		},
		{
			menu: { img: menu, name: 'Neopolia AtomOuest offer' },
			slide: { className: 'offer', content: 'Neopolia AtomOuest offer' },
		},
		{
			menu: { img: menu, name: 'Qualifications' },
			slide: { className: 'qualifications', content: 'Qualifications' },
		},
	];

	return <Slideshow slidesConf={conf} pageName="offer" />;
};

export default Offer;
