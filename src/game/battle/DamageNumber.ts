import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Font } from "three/examples/jsm/loaders/FontLoader";
import { ThreeLoader } from '../utils/threejs/ThreeLoader';
import gsap from 'gsap';
// import { TextGeometry } from 'three/examples/jsm/';

export class DamageNumber {
    private _camera: THREE.Camera;
    private _mesh: THREE.Mesh;

    constructor(aParams: {
        parent: THREE.Group,
        camera: THREE.Camera,
        position: THREE.Vector3,
        text: string,
        color?: number,
        size?: number
    }) {
        this._camera = aParams.camera;
        let f = ThreeLoader.getInstance().getFont('Arial');
        const geometry = new TextGeometry(aParams.text, {
            font: f,
            size: aParams.size || 2,
            height: 0.1
        });
        const material = new THREE.MeshBasicMaterial({ color: aParams.color || 0xff0000 });
        this._mesh = new THREE.Mesh(geometry, material);
        this._mesh.position.copy(aParams.position);
        aParams.parent.add(this._mesh);
    }

    animate(aDir: 1 | -1) {
        const newY = this._mesh.position.y + 10;
        gsap.to(this._mesh.position, {
            y: newY,
            duration: 1,
            ease: 'sine.Out',
            onUpdate: () => {
                this._mesh.quaternion.copy(this._camera.quaternion);
            },
            onComplete: () => {
                this.dispose();
            }
        });
    }

    dispose() {
        this._mesh.parent?.remove(this._mesh);
    }


}