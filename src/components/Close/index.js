import React from 'react';
import { withRouter } from 'react-router-dom';

import AppContext from '../App/AppContext';

import CloseIcon from './assets/close.svg';
import './style.scss';

const Icon = withRouter(props => {
	const handleClick = () => {
		if (props.nav) props.updateNav(props.nav);
		if (props.title) props.updateTitle(props.title);
		props.history.goBack();
	};
	const classNames = window.innerHeight === 1080 ? 'close fullscreen' : 'close';
	return <CloseIcon className={classNames} onClick={handleClick} />;
});

const Close = props => {
	return (
		<AppContext.Consumer>
			{context => (
				<Icon
					updateNav={context.changeNav}
					nav={props.nav}
					updateTitle={context.changeTitle}
					title={props.title}
				/>
			)}
		</AppContext.Consumer>
	);
};

export default Close;
