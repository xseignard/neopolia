import React from 'react';

import './style.scss';
import France from './assets/france.svg';
import Company from './assets/company.svg';

const computePosition = coord => {
	const boundaries = { top: 51.0891, left: -4.79556, bottom: 42.3327, right: 8.2306 };
	const delta = {
		y: boundaries.bottom - boundaries.top,
		x: boundaries.right - boundaries.left,
	};
	const picto = { w: 35, h: 45.46 };
	const map = { w: 200, h: 202.2 };

	let x = (coord.lng - boundaries.left) * map.w / delta.x;
	x -= picto.w / 2;
	let y = (coord.lat - boundaries.top) * map.h / delta.y;
	y -= picto.h;
	return { top: y, left: x };
};

const Map = ({ hq, subs }) => {
	const headquarter = <Company className="headquarter" style={computePosition(hq)} />;
	let subsidiaries = null;
	if (subs && subs.length) {
		subsidiaries = subs.map((s, i) => {
			const style = s.type[0] === 'Commercial Office' ? 'commercial' : 'subsidiary';
			return <Company key={i} className={style} style={computePosition(s.subsidiary)} />;
		});
	}
	return (
		<div className="map">
			<div className="map__container">
				<France />
				{subsidiaries}
				{headquarter}
			</div>
			<div className="map__legend">
				<p className="headquarter">Head Office</p>
				<p className="subsidiary">Commercial Office</p>
				<p className="commercial">Subsidiary Company</p>
			</div>
		</div>
	);
};

export default Map;
