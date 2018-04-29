import React from 'react';

import './style.scss';

const Slideshow = ({ slidesConf, pageName }) => {
	let slides = React.createRef();
	const handleClick = offset => {
		slides.current.style.transform = `translateX(-${offset * 100}%)`;
	};

	const menuItems = slidesConf.map((s, i) => {
		return (
			<div className="slideshow__item" onClick={() => handleClick(i)} key={`menu_${i}`}>
				<img src={s.menu.img} alt={`${s.menu.name} icon`} />
				<div className="slideshow__name">
					<div>{s.menu.name}</div>
				</div>
			</div>
		);
	});

	const slidesItems = slidesConf.map((s, i) => {
		return (
			<div className={`slideshow__slide ${s.slide.className}`} key={`slide_${i}`}>
				{s.slide.content}
			</div>
		);
	});

	return (
		<div className={`page ${pageName}`}>
			<div className="slideshow__menu">{menuItems}</div>
			<div className="slideshow__slider">
				<div className="slideshow__slides" ref={slides}>
					{slidesItems}
				</div>
			</div>
		</div>
	);
};

export default Slideshow;
