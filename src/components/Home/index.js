import React, { Component } from 'react';
import * as THREE from 'three';
import 'three/examples/js/loaders/MTLLoader';
import 'three/examples/js/loaders/OBJLoader';
import 'three/examples/js/loaders/ColladaLoader';
import { Link } from 'react-router-dom';

import initThree from '../../utils/initThree';

import dae from './models/Building_Distribution_NetworksModel.dae';

import './style.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	componentDidMount() {
		// init three
		const { stats, renderer, scene, camera, controls } = initThree(this.canvas, {
			camera: {
				x: 0,
				y: 3,
				z: -6,
			},
			axisHelper: false,
		});
		this.renderer = renderer;
		this.stats = stats;

		const spotLight = new THREE.SpotLight(0x000000);
		spotLight.angle = 25 * (Math.PI / 180);
		spotLight.position.set(40, 40, 0);
		spotLight.castShadow = true;
		spotLight.distance = 200;
		spotLight.decay = 2;
		spotLight.penumbra = 0.9;
		scene.add(spotLight);

		const daeLoader = new THREE.ColladaLoader();
		daeLoader.load(dae, object => {
			object.scene.position.set(0, 0, -30);
			scene.add(object.scene);
		});

		const animate = timestamp => {
			this.rafID = requestAnimationFrame(animate);
			stats.begin();
			renderer.render(scene, camera);
			stats.end();
		};
		requestAnimationFrame(animate);
	}

	componentWillUnmount() {
		this.renderer.dispose();
		this.canvas.outerHTML = '';
		this.stats.domElement.outerHTML = '';
		delete this.canvas;
		delete this.stats.domElement;
		window.cancelAnimationFrame(this.rafID);
	}

	render() {
		return (
			<div>
				<canvas
					id="canvas"
					ref={canvas => {
						this.canvas = canvas;
					}}
				/>
			</div>
		);
	}
}

export default Home;
