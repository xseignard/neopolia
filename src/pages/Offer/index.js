import React from 'react';
import SVG from 'react-inlinesvg';
import Slideshow from '../../components/Slideshow';
import AppContext from '../../components/App/AppContext';

import { getOfferOffline } from '../../services/offer';
import { getSlideByIdOffline } from '../../services/slide';

import './style.scss';

const Offer = () => {
	const offer = getOfferOffline();

	const conf = offer.slides.map(s => {
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

	const clicks = [
		{ id: 'teamNeopolia', target: '/about', nav: 'About us' },
		{ id: 'Leaders', target: '/companies', nav: 'Members' },
		{
			id: 'Conception__x26__Manufacturing_of_sub-assemblies',
			target: '/companies/Conception_and_manufacturing_of_sub-assemblies',
			nav: 'Members',
		},
		{
			id: 'On-site_interventions_for_new_works_and_maintenance',
			target: '/companies/On-site_interventions_for_new_works_and_maintenance',
			nav: 'Members',
		},
		{
			id: 'Special_equipment__x26__toolings',
			target: '/companies/Special_equipment_and_toolings',
			nav: 'Members',
		},
		{ id: 'Dismantlement', target: '/companies/Dismantlement', nav: 'Members' },
	];

	return (
		<AppContext.Consumer>
			{context => (
				<Slideshow
					slidesConf={conf}
					clicks={clicks}
					updateNav={context.changeNav}
					pageName="offer"
				/>
			)}
		</AppContext.Consumer>
	);
};

export default Offer;
