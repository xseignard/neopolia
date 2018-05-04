import React from 'react';
import SVG from 'react-inlinesvg';
import { withRouter } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';

import { getAboutUsOffline } from '../../services/about';
import { getSlideByIdOffline } from '../../services/slide';

import './style.scss';

const About = props => {
	const about = getAboutUsOffline();

	const conf = about.slides.map(s => {
		const currentSlide = getSlideByIdOffline(s);
		const imageUrl = currentSlide.image.url;
		let content;
		if (imageUrl.endsWith('.svg')) {
			content = <SVG src={imageUrl} />;
		} else {
			content = (
				<span>
					<img src={imageUrl} />
				</span>
			);
		}
		return {
			menu: { img: currentSlide.picto.sizes.large, name: currentSlide.name },
			slide: { content },
		};
	});

	return <Slideshow slidesConf={conf} menu={props.match.params.menu} pageName="about" />;
};

export default withRouter(About);
