import React from 'react';

const AppContext = React.createContext({
	nav: 'Products',
	changeNav: () => {},
	raycast: '',
	raycaster: () => {},
});

export default AppContext;
