import { PerspectiveCamera } from "three";
import FlashLight from "./worldComponents/FlashLight";

export default class SceneCamera extends PerspectiveCamera {
  public flashlight: FlashLight;
  constructor(private container: HTMLElement) {
    super(50, 1, 0.1, 100);

    this.flashlight = new FlashLight([-12, 12, 12]);
    this.position.set(12, 12, 10);
    this.resizeCamera();
    // this.add(this.flashlight);

    container.addEventListener("resize", this.resizeCamera);
  }

  resizeCamera = () => {
    this.aspect = this.container.clientWidth / this.container.clientHeight;
    this.updateProjectionMatrix();
  };
}
