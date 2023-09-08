import { PerspectiveCamera } from "three";

export default class SceneCamera extends PerspectiveCamera {
  constructor(private container: HTMLElement) {
    super(50, 1, 0.1, 100);

    this.position.set(3, 3, 10);
    this.resizeCamera();

    container.addEventListener("resize", this.resizeCamera);
  }

  resizeCamera = () => {
    this.aspect = this.container.clientWidth / this.container.clientHeight;
    this.updateProjectionMatrix();
  };
}
