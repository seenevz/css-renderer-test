import { Mesh, MeshNormalMaterial, MeshStandardMaterial, TorusKnotGeometry } from "three";

export default class BasicCube extends Mesh<TorusKnotGeometry, MeshStandardMaterial> {
  constructor(pos: [x: number, y: number, z: number] = [0, 0, 0]) {
    super(new TorusKnotGeometry(), new MeshStandardMaterial({}));
    this.castShadow = true;
    this.position.set(...pos);
  }
}
