import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../App/AppContext';

import './style.scss';
import logo from './assets/LogoNeopoliaAtomOuest.png';

const FooterItem = withRouter(props => {
	const handleClick = () => {
		props.updateNav(props.content);
		props.updateTitle(props.content);
		props.resetRaycast([{}]);
		props.history.push(props.route);
	};
	let active;
	if (props.route === props.location.pathname && props.route === '/') {
		active = 'footer__item-active';
	} else {
		active =
			props.location.pathname.startsWith(props.route) && props.route.length > 1
				? 'footer__item-active'
				: '';
	}
	return (
		<div className={`footer__item ${active}`} onClick={handleClick}>
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

class Footer extends Component {
	componentDidMount() {
		let t;
		window.addEventListener('click', e => {
			clearTimeout(t);
			t = setTimeout(() => {
				if (this.props.location.pathname !== '/video') this.props.history.push('/video');
			}, 5 * 60 * 1000);
		});
	}
	render() {
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
								updateTitle={context.changeTitle}
								resetRaycast={context.raycastHandler}
							/>
							<FooterItem
								content="About us"
								route="/about"
								updateNav={context.changeNav}
								updateTitle={context.changeTitle}
								resetRaycast={context.raycastHandler}
							/>
							<FooterItem
								content="Offer"
								route="/offer"
								updateNav={context.changeNav}
								updateTitle={context.changeTitle}
								resetRaycast={context.raycastHandler}
							/>
							<FooterItem
								content="Members"
								route="/companies"
								updateNav={context.changeNav}
								updateTitle={context.changeTitle}
								resetRaycast={context.raycastHandler}
							/>
						</Fragment>
					)}
				</AppContext.Consumer>
			</footer>
		);
	}
}

export default withRouter(Footer);
