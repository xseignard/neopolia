import React from 'react';
import SVG from 'react-inlinesvg';
import { withRouter } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import AppContext from '../../components/App/AppContext';

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

	return (
		<AppContext.Consumer>
			{context => (
				<Slideshow
					slidesConf={conf}
					menu={props.match.params.menu}
					index={context.aboutIndex}
					updateIndex={context.changeAboutIndex}
					pageName="about"
				/>
			)}
		</AppContext.Consumer>
	);
};

export default withRouter(About);
