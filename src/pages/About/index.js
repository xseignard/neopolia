import React from 'react';
import SVG from 'react-inlinesvg';
import Slideshow from '../../components/Slideshow';

import { getAboutUsOffline } from '../../services/about';
import { getSlideByIdOffline } from '../../services/slide';

import './style.scss';

const About = () => {
	const about = getAboutUsOffline();

	const conf = about.slides.map(s => {
		const currentSlide = getSlideByIdOffline(s);
		const imageUrl = currentSlide.image.url;
		let content;
		if (imageUrl.endsWith('.svg')) {
			content = <SVG src={imageUrl} />;
		} else {
			content = <img src={imageUrl} />;
		}
		return {
			menu: { img: currentSlide.picto.sizes.large, name: currentSlide.name },
			slide: { content },
		};
	});

	return <Slideshow slidesConf={conf} pageName="about" />;
};

export default About;
