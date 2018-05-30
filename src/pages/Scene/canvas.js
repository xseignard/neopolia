import * as THREE from 'three';
import 'three/examples/js/loaders/GLTFLoader';
// import 'three/examples/js/loaders/DRACOLoader';
import 'three/examples/js/objects/Water';
import 'three/examples/js/objects/Sky';

import initThree from '../../utils/initThree';

import glb from './model.glb';

import waternormals from './assets/waternormals.jpg';
import back from './assets/back.png';
import bottom from './assets/bottom.png';
import front from './assets/front.png';
import left from './assets/left.png';
import right from './assets/right.png';
import top from './assets/top.png';

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
const opts = {
	camera: {
		x: 0,
		y: 8,
		z: -28,
	},
	renderer: {
		shadowMap: true,
	},
	debug: false,
	axesHelper: false,
	fxaa: true,
};
const { stats, renderer, composer, scene, camera, controls } = initThree(canvas, opts);

// constants
const size = 390;

// lights
const light = new THREE.DirectionalLight(0xffffff, 0.2);
scene.add(light);
// fog
scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);

// model
let model;
const addModel = () => {
	const gltfLoader = new THREE.GLTFLoader();
	//THREE.DRACOLoader.setDecoderPath('../../libs/draco');
	//gltfLoader.setDRACOLoader(new THREE.DRACOLoader());
	gltfLoader.load(glb, object => {
		model = object.scene;
		model.traverse(node => {
			if (node.isMesh) {
				const material = node.material;
				material.side = THREE.DoubleSide;
				if (material.map) material.map.encoding = THREE.sRGBEncoding;
				if (material.emissiveMap) material.emissiveMap.encoding = THREE.sRGBEncoding;
				if (material.map || material.emissiveMap) material.needsUpdate = true;
			}
		});
		model.scale.set(39.3, 39.3, 39.3);
		model.rotation.y = Math.PI / 2;
		scene.add(model);
	});
};

// water
let water;
const addWater = () => {
	const waterGeometry = new THREE.PlaneBufferGeometry(size, size);
	water = new THREE.Water(waterGeometry, {
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
	water.material.uniforms.distortionScale.value = 0.1;
	water.material.uniforms.size.value = 0.8;
	water.material.uniforms.alpha.value = 0.95;
	water.position.set(18, 0, -38);
	scene.add(water);
};

// skybox
let sky;
const addSky = () => {
	const images = [right, left, top, bottom, back, front];
	const cube = new THREE.CubeTextureLoader().load(images);
	cube.format = THREE.RGBFormat;
	const shader = THREE.ShaderLib['cube'];
	shader.uniforms['tCube'].value = cube;
	const material = new THREE.ShaderMaterial({
		fragmentShader: shader.fragmentShader,
		vertexShader: shader.vertexShader,
		uniforms: shader.uniforms,
		depthWrite: false,
		side: THREE.BackSide,
	});
	sky = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), material);
	sky.position.set(18, -15, -38);
	scene.add(sky);
};

// loading handler
const attachLoadingHandler = cb => {
	THREE.DefaultLoadingManager.onLoad = () => cb(true);
	addWater();
	addSky();
	addModel();
};

// raycasting
const selectionColor = new THREE.Color(0xee4c19);
let prevColor;
const attachRaycastHandler = cb => {
	const raycaster = new THREE.Raycaster();
	const mouse = new THREE.Vector2();
	let lastDown;
	const handleClick = e => {
		// grab click or touch coordinates
		const x = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : e.clientX;
		const y = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : e.clientY;
		// prevent default only for clicks, because windows scoped touches listener already preventDefault
		if (!e.changedTouches) e.preventDefault();
		// if there is more than one finger don't handle the touch
		// if the drag is longer than 200ms, it's just a drag, not a click/touch
		if ((e.changedTouches && e.changedTouches.length > 1) || Date.now() - lastDown > 200) {
			return;
		}

		// clear all coloring
		model.traverse(node => {
			if (node instanceof THREE.Mesh) {
				if (Array.isArray(node.material)) {
					node.material.forEach(m => {
						const { r, g, b } = m.color;
						if (
							r === selectionColor.r &&
							g === selectionColor.g &&
							b === selectionColor.b
						) {
							m.color = prevColor;
						}
					});
				} else {
					const { r, g, b } = node.material.color;
					if (
						r === selectionColor.r &&
						g === selectionColor.g &&
						b === selectionColor.b
					) {
						node.material.color = prevColor;
					}
				}
			}
		});
		// if within the displayed part of the canvas, try the raycast
		// only handle click when the foremost dom element clicked is the canvas
		const element = document.elementFromPoint(x, y);
		if (element && element.id === 'canvas') {
			mouse.x = x / window.innerWidth * 2 - 1;
			mouse.y = -(y / window.innerHeight) * 2 + 1;
			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects(model.children, true);
			if (intersects.length > 0) {
				const filtered = intersects.reduce((x, y) => {
					const index = x.findIndex(e => e.object.parent.name === y.object.parent.name);
					return index < 0 ? [...x, y] : x;
				}, [])[0];
				let target = filtered.object;
				if (target.name !== 'NonCliquable') {
					cb(target);
					prevColor = filtered.object.material.color;
					filtered.object.material.color = selectionColor;
				} else cb([{}]);
			} else cb([{}]);
		}
	};
	addEventListener('mousedown', () => {
		lastDown = Date.now();
	});
	addEventListener('touchstart', e => {
		if (e.touches.length === 1) {
			lastDown = Date.now();
		}
	});
	addEventListener('mouseup', handleClick);
	addEventListener('touchend', handleClick);
};

let rafID;
const animate = timestamp => {
	rafID = requestAnimationFrame(animate);
	stats.begin();
	if (water) water.material.uniforms.time.value += 0.0005;
	if (opts.fxaa) composer.render();
	else renderer.render(scene, camera);
	stats.end();
};
requestAnimationFrame(animate);

export default canvas;
export { attachLoadingHandler, attachRaycastHandler };
