import React from 'react';

const navigation = {
	nav: 'Products',
	changeNav: () => {},
};

const raycasting = {
	raycast: '',
	raycastHandler: () => {},
};

const loading = {
	loaded: false,
	loadingHandler: () => {},
};

const AppContext = React.createContext({
	...navigation,
	...raycasting,
	...loading,
});

export default AppContext;
