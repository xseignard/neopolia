import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../App/AppContext';

import './style.scss';
import logo from './assets/LogoNeopoliaAtomOuest.png';

const FooterItem = withRouter(({ content, route, updateNav, history }) => {
	const handleClick = () => {
		updateNav(content);
		history.push(route);
	};
	return (
		<div className="footer__item" onClick={handleClick}>
			<div>
				{content}
				<svg height="100%" width="100%">
					<line x1="0" y1="100%" x2="100%" y2="100%" />
				</svg>
			</div>
		</div>
	);
});

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
			<AppContext.Consumer>
				{({ nav, changeNav }) => (
					<Fragment>
						<FooterItem content="Products" route="/" updateNav={changeNav} />
						<FooterItem content="About us" route="/about" updateNav={changeNav} />
						<FooterItem content="Offer" route="/contact" updateNav={changeNav} />
						<FooterItem content="Members" route="/companies" updateNav={changeNav} />
					</Fragment>
				)}
			</AppContext.Consumer>
		</footer>
	);
};

export default Footer;
