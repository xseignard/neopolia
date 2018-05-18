import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import './style.scss';

const CustomSlider = ({ className, content, size }) => {
	let slider = null;
	const slides = content.map((c, i) => {
		let title = null;
		if (c.title && c.id) {
			title = (
				<Link to={`/realisation/${c.id}`}>
					<div className="slider__title" dangerouslySetInnerHTML={{ __html: c.title }} />
				</Link>
			);
		}
		return (
			<div key={i} className="slider__slide">
				{title}
				<img width={`${size || 300}px`} height={`${size || 300}px`} src={c.image} />
			</div>
		);
	});
	if (slides.length) {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
		};
		slider = (
			<Slider {...settings} className={`slider ${className}`}>
				{slides}
			</Slider>
		);
	}
	return slider;
};

export default CustomSlider;
