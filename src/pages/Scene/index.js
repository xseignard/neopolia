import React, { Component } from 'react';
import ElementContainer from '../../components/ElementContainer';
import AppContext from '../../components/App/AppContext';

import canvas, { attachRaycastHandler } from './canvas';

let raycasterAttached = false;
class WebGL extends Component {
	componentDidMount() {
		if (!raycasterAttached) {
			attachRaycastHandler(this.props.raycastHanler);
			raycasterAttached = true;
		}
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return <ElementContainer id="canvas" child={canvas} />;
	}
}

// We warn the developer when the canvas renders & re-mounts/re-renders
// as it may have performance implications.
let hasRendered = false;
let hasMounted = false;

// The Scene element is just a div that holds a canvas
class Scene extends Component {
	componentWillMount() {
		if (!hasMounted) hasMounted = true;
		else console.warn('Re-mounting WebGLCanvas.');
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		if (hasRendered) console.warn('Re-rendering WebGLCanvas component.');
		else if (process.env.NODE_ENV === 'development') console.log('[WebGL] Rendering canvas');
		hasRendered = true;
		return (
			<AppContext.Consumer>
				{context => <WebGL raycastHanler={context.raycaster} />}
			</AppContext.Consumer>
		);
	}
}

export default Scene;
