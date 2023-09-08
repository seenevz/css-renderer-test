import { Color, Scene } from "three";

import type SceneCamera from "./SceneCamera";
import BasicCube from "./worldComponents/BasicCube";
import { CssWorld } from "./CssWorld";
import { CssComponent } from "./worldComponents/CssComponent";

export default class World extends Scene {
  private basicCube: BasicCube[];
  private cssElement: CssComponent;

  constructor(sceneCamera: SceneCamera, private cssWorld: CssWorld) {
    super();
    this.background = new Color("white");

    this.basicCube = [new BasicCube(), new BasicCube([0, 0, -10])];
    this.cssElement = new CssComponent();

    this.add(sceneCamera, ...this.basicCube);
    this.addCssComponent(this.cssElement);
  }

  addCssComponent = (elem: CssComponent) => {
    this.add(elem.regularPlane);
    this.cssWorld.add(elem);
  };
}
