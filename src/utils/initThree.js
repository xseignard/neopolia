import * as THREE from 'three';
import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/postprocessing/EffectComposer';
import 'three/examples/js/postprocessing/RenderPass';
import 'three/examples/js/postprocessing/ShaderPass';
import 'three/examples/js/shaders/CopyShader';
import fxaa from 'three-shader-fxaa';
import Stats from 'stats.js';
import merge from 'lodash/merge';

const initThree = (canvas, opts) => {
	// default opts
	const defaults = {
		renderer: {
			alpha: true,
			shadowMap: false,
		},
		camera: {
			fov: 75,
			nearPlane: 0.1,
			farPlane: 1000,
			x: 0,
			y: 2,
			z: 20,
		},
		ambient: {
			color: 0xffffff,
		},
		axesHelper: true,
		fxaa: false,
	};
	// merged opts
	const mergedOpts = merge(defaults, opts);

	// stats
	const stats = new Stats();
	if (mergedOpts.debug) {
		stats.domElement.style.top = '';
		stats.domElement.style.bottom = '7vh';
		document.body.appendChild(stats.domElement);
	}

	// renderer
	const renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: mergedOpts.renderer.alpha,
		canvas,
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.gammaOutput = true;
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = '0px';
	renderer.domElement.style.left = '0px';
	if (mergedOpts.renderer.shadowMap) {
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFShadowMap;
	}

	// scene
	const scene = new THREE.Scene();

	// camera
	const camera = new THREE.PerspectiveCamera(
		mergedOpts.camera.fov,
		window.innerWidth / window.innerHeight,
		mergedOpts.camera.nearPlane,
		mergedOpts.camera.farPlane
	);
	camera.position.x = mergedOpts.camera.x;
	camera.position.y = mergedOpts.camera.y;
	camera.position.z = mergedOpts.camera.z;

	// fxaa
	const composer = new THREE.EffectComposer(renderer);
	composer.addPass(new THREE.RenderPass(scene, camera));
	window.THREE = THREE;
	const shaderPass = new THREE.ShaderPass(fxaa());
	shaderPass.renderToScreen = true;
	composer.addPass(shaderPass);
	shaderPass.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);

	// controls
	const controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI * 0.44;
	controls.panningMode = THREE.HorizontalPanning;
	controls.minDistance = 10;
	controls.maxDistance = 35;

	// axis helper
	const axesHelper = new THREE.AxesHelper(50);
	if (mergedOpts.axesHelper) scene.add(axesHelper);

	// ambient light
	const ambient = new THREE.AmbientLight(mergedOpts.ambient.color);
	scene.add(ambient);

	const handleResize = () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		if (mergedOpts.fxaa) {
			shaderPass.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
			composer.setSize(window.innerWidth, window.innerHeight);
		}
	};
	addEventListener('resize', handleResize);

	return { stats, renderer, composer, scene, camera, controls };
};

export default initThree;
