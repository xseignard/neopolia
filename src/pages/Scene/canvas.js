import * as THREE from 'three';
import 'three/examples/js/loaders/ColladaLoader';
import 'three/examples/js/objects/Water';
import 'three/examples/js/objects/Sky';

import initThree from '../../utils/initThree';

import dae from './models/Building_Distribution_NetworksModel.dae';

import waternormals from './assets/waternormals.jpg';
import back from './assets/back.png';
import bottom from './assets/bottom.png';
import front from './assets/front.png';
import left from './assets/left.png';
import right from './assets/right.png';
import top from './assets/top.png';

import './style.scss';

const canvas = document.createElement('canvas');
const { stats, renderer, scene, camera, controls } = initThree(canvas, {
	camera: {
		x: 0,
		y: 2,
		z: -6,
	},
	renderer: {
		shadowMap: true,
	},
	debug: true,
	axesHelper: false,
});

// constants
const size = 194;

// lights
const light = new THREE.DirectionalLight(0xffffff, 0.2);
scene.add(light);

// fog
scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);

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

// skybox
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
const sky = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), material);
sky.position.set(0, -15, 0);
scene.add(sky);

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
			intersects[0].object.material.forEach(m => (m.color = new THREE.Color(0xe58c19)));
		} else {
			intersects[0].object.material.color = new THREE.Color(0xe58c19);
		}
	}
};
addEventListener('click', handleClick);

camera.addEventListener('change', e => {
	console.log(e);
});

let rafID;
const animate = timestamp => {
	rafID = requestAnimationFrame(animate);
	stats.begin();
	water.material.uniforms.time.value += 0.004;
	renderer.render(scene, camera);
	stats.end();
};
requestAnimationFrame(animate);

export default canvas;
