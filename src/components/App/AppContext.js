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

const title = {
	title: 'Products',
	changeTitle: () => {},
};

const aboutIndex = {
	aboutIndex: 0,
	changeAboutIndex: () => {},
};

const offerIndex = {
	offerIndex: 0,
	changeOfferIndex: () => {},
};

const AppContext = React.createContext({
	...navigation,
	...raycasting,
	...loading,
	...title,
	...aboutIndex,
	...offerIndex,
});

export default AppContext;
