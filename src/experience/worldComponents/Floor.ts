import { Color, DoubleSide, Mesh, MeshStandardMaterial, PlaneGeometry } from "three";

export default class Floor extends Mesh<PlaneGeometry, MeshStandardMaterial> {
  constructor(pos: [x: number, y: number, z: number] = [0, 0, 0]) {
    super(
      new PlaneGeometry(30, 30),
      new MeshStandardMaterial({ color: new Color("beige"), side: DoubleSide })
    );
    this.receiveShadow = true;
    this.rotation.x = -Math.PI / 2;
    this.position.set(...pos);
  }
}
