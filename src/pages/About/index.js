import React from 'react';
import Slideshow from '../../components/Slideshow';

import './style.scss';
import menu from './assets/menu.jpg';

const About = () => {
	const conf = [
		{
			menu: { img: menu, name: 'In a nutshell' },
			slide: { className: 'nutshell', content: 'In a nutshell' },
		},
		{
			menu: { img: menu, name: 'Strengths' },
			slide: { className: 'strengths', content: 'Strengths' },
		},
		{
			menu: { img: menu, name: 'Working with us' },
			slide: { className: 'working', content: 'Working with us' },
		},
	];

	return <Slideshow slidesConf={conf} pageName="about" />;
};

export default About;
