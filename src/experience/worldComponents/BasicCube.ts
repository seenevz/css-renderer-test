import { Mesh, MeshNormalMaterial, TorusKnotGeometry } from "three";

export default class BasicCube extends Mesh<TorusKnotGeometry, MeshNormalMaterial> {
  constructor(pos: [x: number, y: number, z: number] = [0, 0, 0]) {
    super(new TorusKnotGeometry(), new MeshNormalMaterial({}));
    this.position.set(...pos);
  }
}
