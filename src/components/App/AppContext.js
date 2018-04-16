import React from 'react';

const AppContext = React.createContext({
	nav: 'Products',
	changeNav: () => {},
	raycast: '',
	raycastHandler: () => {},
	loaded: false,
	loadingHandler: () => {},
});

export default AppContext;
