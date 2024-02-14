import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	Mesh,
	SphereGeometry,
	MeshPhongMaterial,
	MeshPhysicalMaterial,
	TextureLoader,
	BufferGeometry,
	Shape,
	ShapeGeometry,
	ExtrudeGeometry
} from 'three'



export const centerHeart = () => {
	const heartShape = new Shape()

	heartShape.moveTo(5, -5);
	heartShape.bezierCurveTo(5, -5, 4, 0, 0, 0);
	heartShape.bezierCurveTo(-6, 0, -6, -7, -6, -7);
	heartShape.bezierCurveTo(-6, -11, -2, -15.4, 5, -19);
	heartShape.bezierCurveTo(12, -15.4, 16, -11, 16, -7);
	heartShape.bezierCurveTo(16, -7, 16, 0, 10, 0);
	heartShape.bezierCurveTo(7, 0, 5, -5, 5, -5);

	const extrudeSettings = { depth: 10, bevelEnabled: true, bevelSegments: 12, steps: 20, bevelSize: 2, bevelThickness: 2 };

	const HeartGeometry = new ExtrudeGeometry(heartShape, extrudeSettings);

	const centerHeartMaterial = new MeshPhongMaterial({ color: 0x049EF4, emissive: 0x9D3F3F, specular: 0xF8F7F7 })
	const centerHeartMesh = new Mesh(
		HeartGeometry,
		centerHeartMaterial
	)
	return centerHeartMesh
}

export const Heart1 = () => {
	const heart1Shape = new Shape()

	const x = 0;
	const y = 0;

	const scaleFactor = 0.4;

	heart1Shape.moveTo((x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor);
	heart1Shape.bezierCurveTo((x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor, (x + 4) * scaleFactor, (-1 * y) * scaleFactor, x * scaleFactor, (-1 * y) * scaleFactor);
	heart1Shape.bezierCurveTo((x - 6) * scaleFactor, (-1 * y) * scaleFactor, (x - 6) * scaleFactor, (-1 * (y + 7)) * scaleFactor, (x - 6) * scaleFactor, (-1 * (y + 7)) * scaleFactor);
	heart1Shape.bezierCurveTo((x - 6) * scaleFactor, (-1 * (y + 11)) * scaleFactor, (x - 3) * scaleFactor, (-1 * (y + 15.4)) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 19)) * scaleFactor);
	heart1Shape.bezierCurveTo((x + 12) * scaleFactor, (-1 * (y + 15.4)) * scaleFactor, (x + 16) * scaleFactor, (-1 * (y + 11)) * scaleFactor, (x + 16) * scaleFactor, (-1 * (y + 7)) * scaleFactor);
	heart1Shape.bezierCurveTo((x + 16) * scaleFactor, (-1 * (y + 7)) * scaleFactor, (x + 16) * scaleFactor, (-1 * y) * scaleFactor, (x + 10) * scaleFactor, (-1 * y) * scaleFactor);
	heart1Shape.bezierCurveTo((x + 7) * scaleFactor, (-1 * y) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor);

	const extrudeSettings = { depth: 2, bevelEnabled: true, bevelSegments: 2, steps: 20, bevelSize: 1, bevelThickness: 1 };

	const Heart1Geometry = new ExtrudeGeometry(heart1Shape, extrudeSettings);

	const Heart1Material = new MeshPhongMaterial({ color: 0xF8F7F7, emissive: 0x9D3F3F, specular: 0x049EF4 })
	const Heart1Mesh = new Mesh(
		Heart1Geometry,
		Heart1Material
	)
	return Heart1Mesh
}



export const Heart2 = () => {
	const heart2Shape = new Shape()

	const x = 9;
	const y = 0;

	const scaleFactor = 0.4;

	heart2Shape.moveTo((x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor);
	heart2Shape.bezierCurveTo((x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor, (x + 4) * scaleFactor, (-1 * y) * scaleFactor, x * scaleFactor, (-1 * y) * scaleFactor);
	heart2Shape.bezierCurveTo((x - 6) * scaleFactor, (-1 * y) * scaleFactor, (x - 6) * scaleFactor, (-1 * (y + 7)) * scaleFactor, (x - 6) * scaleFactor, (-1 * (y + 7)) * scaleFactor);
	heart2Shape.bezierCurveTo((x - 6) * scaleFactor, (-1 * (y + 11)) * scaleFactor, (x - 3) * scaleFactor, (-1 * (y + 15.4)) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 19)) * scaleFactor);
	heart2Shape.bezierCurveTo((x + 12) * scaleFactor, (-1 * (y + 15.4)) * scaleFactor, (x + 16) * scaleFactor, (-1 * (y + 11)) * scaleFactor, (x + 16) * scaleFactor, (-1 * (y + 7)) * scaleFactor);
	heart2Shape.bezierCurveTo((x + 16) * scaleFactor, (-1 * (y + 7)) * scaleFactor, (x + 16) * scaleFactor, (-1 * y) * scaleFactor, (x + 10) * scaleFactor, (-1 * y) * scaleFactor);
	heart2Shape.bezierCurveTo((x + 7) * scaleFactor, (-1 * y) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor);

	const extrudeSettings = { depth: 2, bevelEnabled: true, bevelSegments: 2, steps: 20, bevelSize: 1, bevelThickness: 1 };

	const Heart2Geometry = new ExtrudeGeometry(heart2Shape, extrudeSettings);

	const Heart2Material = new MeshPhongMaterial({ color: 0xF8F7F7, emissive: 0x9D3F3F, specular: 0x049EF4 })
	const Heart2Mesh = new Mesh(
		Heart2Geometry,
		Heart2Material
	)
	return Heart2Mesh
}

export const Heart3 = () => {
	const heart3Shape = new Shape()

	const x = 9;
	const y = 0;

	const scaleFactor = 0.4;

	heart3Shape.moveTo((x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor);
	heart3Shape.bezierCurveTo((x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor, (x + 4) * scaleFactor, (-1 * y) * scaleFactor, x * scaleFactor, (-1 * y) * scaleFactor);
	heart3Shape.bezierCurveTo((x - 6) * scaleFactor, (-1 * y) * scaleFactor, (x - 6) * scaleFactor, (-1 * (y + 7)) * scaleFactor, (x - 6) * scaleFactor, (-1 * (y + 7)) * scaleFactor);
	heart3Shape.bezierCurveTo((x - 6) * scaleFactor, (-1 * (y + 11)) * scaleFactor, (x - 3) * scaleFactor, (-1 * (y + 15.4)) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 19)) * scaleFactor);
	heart3Shape.bezierCurveTo((x + 12) * scaleFactor, (-1 * (y + 15.4)) * scaleFactor, (x + 16) * scaleFactor, (-1 * (y + 11)) * scaleFactor, (x + 16) * scaleFactor, (-1 * (y + 7)) * scaleFactor);
	heart3Shape.bezierCurveTo((x + 16) * scaleFactor, (-1 * (y + 7)) * scaleFactor, (x + 16) * scaleFactor, (-1 * y) * scaleFactor, (x + 10) * scaleFactor, (-1 * y) * scaleFactor);
	heart3Shape.bezierCurveTo((x + 7) * scaleFactor, (-1 * y) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor, (x + 5) * scaleFactor, (-1 * (y + 5)) * scaleFactor);

	const extrudeSettings = { depth: 2, bevelEnabled: true, bevelSegments: 2, steps: 20, bevelSize: 1, bevelThickness: 1 };

	const Heart3Geometry = new ExtrudeGeometry(heart3Shape, extrudeSettings);

	const Heart3Material = new MeshPhongMaterial({ color: 0xF8F7F7, emissive: 0x9D3F3F, specular: 0x049EF4 })
	const Heart3Mesh = new Mesh(
		Heart3Geometry,
		Heart3Material
	)
	return Heart3Mesh
}