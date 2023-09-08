import { CameraHelper, SpotLight } from "three";

export default class FlashLight extends SpotLight {
  public helper: CameraHelper;

  constructor(pos: [x: number, y: number, z: number] = [0, 0, 0]) {
    super(0xfefefe, 2, 100, Math.PI * 0.1, 0.25, 0);
    this.position.set(...pos);
    this.castShadow = true;
    this.shadow.camera.fov = 30;
    this.shadow.camera.near = 1;
    this.shadow.camera.far = 20;
    this.shadow.mapSize.width = this.shadow.mapSize.height = 1024;

    this.helper = new CameraHelper(this.shadow.camera);
    this.helper.visible = false;
  }

  public getThisWithTarget = () => [this, this.target];
}
