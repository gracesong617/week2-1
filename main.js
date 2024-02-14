import './style.css'
import * as THREE from 'three'
import { centerHeart } from './addMeshes'
import { Heart1 } from './addMeshes'
import { Heart2 } from './addMeshes'
import { Heart3 } from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
const scene = new THREE.Scene()
const meshes = {}
const lights = {}

const clock = new THREE.Clock()

init()
function init() {
	//set up our renderer default settings, add scene/canvas to webpage
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	meshes.center = centerHeart()

	meshes.heart1 = Heart1()

	meshes.heart2 = Heart2()

	meshes.heart3 = Heart3()

	lights.default = addLight()

	scene.add(lights.default)
	scene.add(meshes.center)
	scene.add(meshes.heart1)
	scene.add(meshes.heart2)
	scene.add(meshes.heart3)


	camera.position.set(0, 0, 100)
	resize()
animate()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	const tick = clock.getElapsedTime()
	requestAnimationFrame(animate)
	// meshes.center.rotation.x += 0.01
	// meshes.center.rotation.y -= 0.01
	meshes.heart2.position.y = Math.sin(tick * 9) + 20;
	meshes.heart2.position.z = Math.cos(tick* 2)* 10

	meshes.heart3.position.y = Math.sin(tick * 9) - 35;
	meshes.heart3.position.z = Math.cos(tick* 5)* 10

	meshes.heart1.position.x = Math.sin(tick* 2)* 30
	meshes.heart1.position.z = Math.cos(tick* 2)* 50



	meshes.center.scale.x = Math.sin(tick* 5) * 0.2 + 1; 
    meshes.center.scale.y = Math.sin(tick * 5) * 0.2 + 1;
    meshes.center.scale.z = Math.sin(tick * 5) * 0.2 + 1;

	renderer.render(scene, camera)
}
