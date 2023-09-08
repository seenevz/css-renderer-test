import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type SceneCamera from "../SceneCamera";

export class SceneCameraControls extends OrbitControls {
  constructor(camera: SceneCamera, container: HTMLElement) {
    super(camera, container);

    this.enableDamping = true;
    this.maxDistance = 100;
    this.minDistance = 2;
    this.maxPolarAngle = Math.PI / 2;
  }
}
