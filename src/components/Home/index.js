import React, { Component } from 'react';
import * as THREE from 'three';
import 'three/examples/js/loaders/ColladaLoader';
import 'three/examples/js/objects/Water';
import 'three/examples/js/objects/Sky';

import { Link } from 'react-router-dom';

import initThree from '../../utils/initThree';

import dae from './models/Building_Distribution_NetworksModel.dae';
import waternormals from './assets/waternormals.jpg';

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
			axesHelper: false,
		});
		this.renderer = renderer;
		this.stats = stats;

		// lights
		const light = new THREE.DirectionalLight(0xffffff, 0.2);
		scene.add(light);

		// model
		const daeLoader = new THREE.ColladaLoader();
		daeLoader.load(dae, object => {
			object.scene.position.set(0, 0, -30);
			scene.add(object.scene);
		});

		// water
		const waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);
		const water = new THREE.Water(waterGeometry, {
			textureWidth: 512,
			textureHeight: 512,
			waterNormals: new THREE.TextureLoader().load(waternormals, texture => {
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			}),
			sunDirection: light.position.clone().normalize(),
			sunColor: 0xffffff,
			waterColor: 0x001e0f,
			fog: scene.fog !== undefined,
		});
		water.rotation.x = -Math.PI / 2;
		water.material.uniforms.distortionScale.value = 2;
		water.material.uniforms.size.value = 6;
		water.material.uniforms.alpha.value = 0.95;
		console.log(water.material.uniforms);
		scene.add(water);

		// sky
		const sky = new THREE.Sky();
		sky.scale.setScalar(10000);
		sky.material.uniforms.turbidity.value = 10;
		sky.material.uniforms.rayleigh.value = 2;
		sky.material.uniforms.luminance.value = 1;
		sky.material.uniforms.mieCoefficient.value = 0.005;
		sky.material.uniforms.mieDirectionalG.value = 0.8;
		scene.add(sky);

		const parameters = {
			distance: 400,
			inclination: 0.55, //0.1,
			azimuth: 0.75, //0.015,
		};
		const cubeCamera = new THREE.CubeCamera(1, 20000, 256);
		cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
		const updateSun = () => {
			const theta = Math.PI * (parameters.inclination - 0.5);
			const phi = 2 * Math.PI * (parameters.azimuth - 0.5);
			light.position.x = parameters.distance * Math.cos(phi);
			light.position.y = parameters.distance * Math.sin(phi) * Math.sin(theta);
			light.position.z = parameters.distance * Math.sin(phi) * Math.cos(theta);
			sky.material.uniforms.sunPosition.value = light.position.copy(light.position);
			water.material.uniforms.sunDirection.value.copy(light.position).normalize();
			cubeCamera.update(renderer, scene);
		};
		updateSun();

		const animate = timestamp => {
			this.rafID = requestAnimationFrame(animate);
			stats.begin();
			water.material.uniforms.time.value += 0.002;
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
