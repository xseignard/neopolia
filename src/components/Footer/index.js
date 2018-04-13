import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import logo from './assets/LogoNeopoliaAtomOuest.png';

const FooterItem = ({ content, route }) => {
	return (
		<Link to={route} className="footer__item">
			<div>
				{content}
				<svg height="100%" width="100%">
					<line x1="0" y1="100%" x2="100%" y2="100%" />
				</svg>
			</div>
		</Link>
	);
};

const Logo = () => {
	return (
		<div className="footer__logo">
			<img src={logo} alt="logo Néopolia" />
		</div>
	);
};

const Footer = () => {
	return (
		<footer className="footer">
			<Logo />
			<FooterItem content="Products" route="/" />
			<FooterItem content="About us" route="/about" />
			<FooterItem content="Offer" route="/contact" />
			<FooterItem content="Members" route="/companies" />
		</footer>
	);
};

export default Footer;
