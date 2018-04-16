import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../App/AppContext';

import './style.scss';
import logo from './assets/LogoNeopoliaAtomOuest.png';

const FooterItem = withRouter(props => {
	const handleClick = () => {
		props.updateNav(props.content);
		props.resetRaycast([{}]);
		props.history.push(props.route);
	};
	return (
		<div className="footer__item" onClick={handleClick}>
			<div>
				{props.content}
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
				{context => (
					<Fragment>
						<FooterItem
							content="Products"
							route="/"
							updateNav={context.changeNav}
							resetRaycast={context.raycastHandler}
						/>
						<FooterItem
							content="About us"
							route="/about"
							updateNav={context.changeNav}
							resetRaycast={context.raycastHandler}
						/>
						<FooterItem
							content="Offer"
							route="/contact"
							updateNav={context.changeNav}
							resetRaycast={context.raycastHandler}
						/>
						<FooterItem
							content="Members"
							route="/companies"
							updateNav={context.changeNav}
							resetRaycast={context.raycastHandler}
						/>
					</Fragment>
				)}
			</AppContext.Consumer>
		</footer>
	);
};

export default Footer;
