import React from 'react';
import Slider from 'react-slick';

import './style.scss';

const CustomSlider = ({ images }) => {
	let slider = null;
	const slides = images.map((image, i) => {
		return (
			<div key={i} className="slider__slide">
				<img width="300px" height="300px" src={image} />
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
		};
		slider = (
			<Slider {...settings} className="slider">
				{slides}
			</Slider>
		);
	}
	return slider;
};

export default CustomSlider;
