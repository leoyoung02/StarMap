import * as THREE from 'three';
import { MyObject3D } from "~/game/basics/MyObject3D";
import { BattleObject } from './BattleObject';

export class BattleStar extends BattleObject {
    protected _mesh: THREE.Mesh;

    constructor(aId: string) {
        super(aId, 'BattleSun');

        let g = new THREE.SphereGeometry(2);
        let m = new THREE.MeshBasicMaterial({
            color: 0xffdd00
        });
        this._mesh = new THREE.Mesh(g, m);
        this.add(this._mesh);

    }

}