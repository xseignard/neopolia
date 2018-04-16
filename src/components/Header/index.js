import React from 'react';
import AppContext from '../App/AppContext';

import './style.scss';

const HeaderItem = ({ content }) => {
	return <div className="header__item">{content}</div>;
};

const Header = () => {
	return (
		<AppContext.Consumer>
			{({ nav }) => (
				<header className="header">
					<HeaderItem content={nav} />
					<HeaderItem content="Products" />
					<HeaderItem content="Harbour works" />
				</header>
			)}
		</AppContext.Consumer>
	);
};

export default Header;
