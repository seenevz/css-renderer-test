import { Color, Scene } from "three";

import type SceneCamera from "./SceneCamera";
import BasicCube from "./worldComponents/BasicCube";
import { CssWorld } from "./CssWorld";
import { CssComponent } from "./worldComponents/CssComponent";
import Floor from "./worldComponents/Floor";
import PlaneLight from "./worldComponents/PlaneLight";
import FlashLight from "./worldComponents/FlashLight";

export default class World extends Scene {
  private basicCube: BasicCube[];
  private cssElement: CssComponent;
  private floor: Floor;
  private planeLight: PlaneLight;
  private flashlight: FlashLight;

  constructor(sceneCamera: SceneCamera, private cssWorld: CssWorld) {
    super();
    this.background = new Color("white");

    this.basicCube = [new BasicCube([0, 3, 5]), new BasicCube([0, 3, -5])];
    this.cssElement = new CssComponent([0, 3, 0]);
    this.floor = new Floor();
    this.planeLight = new PlaneLight();
    this.flashlight = new FlashLight([-12, 12, 12]);

    this.add(sceneCamera, ...this.basicCube, this.floor, this.planeLight, this.flashlight);
    this.addCssComponent(this.cssElement);
  }

  addCssComponent = (elem: CssComponent) => {
    this.add(elem.regularPlane);
    this.cssWorld.add(elem);
  };
}
