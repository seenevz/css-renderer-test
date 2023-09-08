import { DirectionalLight } from "three";

export default class PlaneLight extends DirectionalLight {
  constructor() {
    super(0xffffff, 0.2);
    this.position.set(2, 10, 0);
  }
}
