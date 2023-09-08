import { Scene } from "three";

import type SceneCamera from "./SceneCamera";

export class CssWorld extends Scene {
  constructor(sceneCamera: SceneCamera) {
    super();
    this.add(sceneCamera);
  }
}
