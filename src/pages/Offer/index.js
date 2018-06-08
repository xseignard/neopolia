import React from 'react';
import SVG from 'react-inlinesvg';
import { withRouter } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import AppContext from '../../components/App/AppContext';

import { getOfferOffline } from '../../services/offer';
import { getSlideByIdOffline } from '../../services/slide';

import './style.scss';

const Offer = props => {
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
		{ id: 'teamNeopolia', target: '/about/4', nav: 'About us', title: 'About us' },
		{ id: 'Members', target: '/companies/close', nav: 'Members', title: 'Members' },
		{ id: 'Leader', target: '/about/3', nav: 'About us', title: 'About us' },
		{ id: 'Customer', target: '/customers', nav: 'Customers', title: 'Customers' },
		{
			id: 'Conception_Manufacturing_of_sub-assemblies',
			target: '/companies/Conception_and_manufacturing_of_sub-assemblies',
			nav: 'Members',
			title: 'Conception and manufacturing of sub-assemblies',
		},
		{
			id: 'On-site_interventions_for_new_works_and_maintenance',
			target: '/companies/On-site_interventions_for_new_works_and_maintenance',
			nav: 'Members',
			title: 'On-site interventions for new works and maintenance',
		},
		{
			id: 'Special_equipment_toolings',
			target: '/companies/Special_equipment_and_toolings',
			nav: 'Members',
			title: 'Special equipment and toolings',
		},
		{
			id: 'Dismantlement',
			target: '/companies/Dismantlement',
			nav: 'Members',
			title: 'Decommissioning',
		},
	];

	return (
		<AppContext.Consumer>
			{context => (
				<Slideshow
					slidesConf={conf}
					clicks={clicks}
					menu={props.match.params.menu}
					index={context.offerIndex}
					updateIndex={context.changeOfferIndex}
					updateTitle={context.changeTitle}
					updateNav={context.changeNav}
					pageName="offer"
				/>
			)}
		</AppContext.Consumer>
	);
};

export default withRouter(Offer);
