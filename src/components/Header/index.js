import React from 'react';
import './style.scss';

const HeaderItem = ({ content }) => {
	return <div className="header__item">{content}</div>;
};

const Header = () => {
	return (
		<header className="header">
			<HeaderItem content="Products" />
			<HeaderItem content="Products" />
			<HeaderItem content="Harbour works" />
		</header>
	);
};

export default Header;
