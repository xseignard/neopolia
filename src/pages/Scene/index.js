import React, { Fragment, Component } from 'react';
import ElementContainer from '../../components/ElementContainer';
import AppContext from '../../components/App/AppContext';
import Loader from 'react-loaders';

import canvas, { attachLoadingHandler, attachRaycastHandler } from './canvas';

let handlersAttached = false;
class WebGL extends Component {
	componentDidMount() {
		if (!handlersAttached) {
			attachLoadingHandler(this.props.loadingHandler);
			attachRaycastHandler(this.props.raycastHandler);
			handlersAttached = true;
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
				{context => {
					let loader = <Loader type="square-spin" innerClassName="loader__custom" />;
					let styleName = 'canvas-hidden';
					if (context.loaded) {
						loader = null;
						styleName = 'canvas-active';
					}
					return (
						<Fragment>
							<WebGL
								raycastHandler={context.raycastHandler}
								loadingHandler={context.loadingHandler}
								className={styleName}
							/>
							{loader}
						</Fragment>
					);
				}}
			</AppContext.Consumer>
		);
	}
}

export default Scene;
