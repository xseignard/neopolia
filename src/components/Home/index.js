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
				y: 2,
				z: -6,
			},
			axesHelper: false,
		});
		this.renderer = renderer;
		this.stats = stats;

		// constants
		const size = 194;

		// lights
		const light = new THREE.DirectionalLight(0xffffff, 0.2);
		scene.add(light);

		// fog
		scene.fog = new THREE.FogExp2(0xaaaaaa, 0.02);

		// model
		let model;
		const daeLoader = new THREE.ColladaLoader();
		daeLoader.load(dae, object => {
			model = object.scene;
			model.traverse(node => {
				if (node instanceof THREE.Mesh) {
					node.castShadow = true;
					node.receiveShadow = true;
					if (Array.isArray(node.material)) {
						node.material.forEach(m => (m.side = THREE.DoubleSide));
					} else {
						node.material.side = THREE.DoubleSide;
					}
				}
			});
			model.scale.set(0.1, 0.1, 0.1);
			model.position.set(0.5, 0, 6);
			scene.add(model);
		});

		// water
		const waterGeometry = new THREE.PlaneBufferGeometry(size, size);
		const water = new THREE.Water(waterGeometry, {
			textureWidth: 512,
			textureHeight: 512,
			waterNormals: new THREE.TextureLoader().load(waternormals, texture => {
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			}),
			sunDirection: light.position.clone().normalize(),
			sunColor: 0x000000,
			waterColor: 0x001e3f,
			fog: scene.fog !== undefined,
		});
		water.rotation.x = -Math.PI / 2;
		water.material.uniforms.distortionScale.value = 1;
		water.material.uniforms.size.value = 10;
		water.material.uniforms.alpha.value = 0.95;
		scene.add(water);

		// sky
		const sky = new THREE.Sky();
		sky.scale.setScalar(size);
		sky.material.uniforms.turbidity.value = 10;
		sky.material.uniforms.rayleigh.value = 2;
		sky.material.uniforms.luminance.value = 1;
		sky.material.uniforms.mieCoefficient.value = 0.005;
		sky.material.uniforms.mieDirectionalG.value = 0.8;
		scene.add(sky);

		const parameters = {
			distance: 400,
			inclination: 0,
			azimuth: 0.25,
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

		// raycasting
		const raycaster = new THREE.Raycaster();
		const mouse = new THREE.Vector2();
		const handleClick = e => {
			e.preventDefault();
			mouse.x = e.clientX / window.innerWidth * 2 - 1;
			mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
			model.traverse(node => {
				if (node instanceof THREE.Mesh) {
					if (Array.isArray(node.material)) {
						node.material.forEach(m => (m.color = new THREE.Color(0xffffff)));
					} else {
						node.material.color = new THREE.Color(0xffffff);
					}
				}
			});
			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects(model.children, true);
			if (intersects.length > 0) {
				if (Array.isArray(intersects[0].object.material)) {
					intersects[0].object.material.forEach(
						m => (m.color = new THREE.Color(0xe58c19))
					);
				} else {
					intersects[0].object.material.color = new THREE.Color(0xe58c19);
				}
			}
		};
		addEventListener('click', handleClick);

		const animate = timestamp => {
			this.rafID = requestAnimationFrame(animate);
			stats.begin();
			water.material.uniforms.time.value += 0.004;
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
