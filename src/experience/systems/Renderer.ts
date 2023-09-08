import { PCFShadowMap, PCFSoftShadowMap, WebGLRenderer } from "three";
import { getDevicePixelRatio } from "../utils";

export class Renderer extends WebGLRenderer {
  constructor(private container: HTMLElement) {
    super({ antialias: true, powerPreference: "high-performance", alpha: true });
    this.setRenderSize();
    container.append(this.domElement);
    this.domElement.style.pointerEvents = "none";
    this.domElement.style.position = "absolute";
    this.domElement.style.zIndex = "1";
    this.domElement.style.top = "0  ";

    this.shadowMap.enabled = true;
    this.shadowMap.type = PCFSoftShadowMap;

    container.addEventListener("resize", this.setRenderSize);
  }

  setRenderSize = () => {
    this.setSize(this.container.clientWidth, this.container.clientHeight);
    this.setPixelRatio(getDevicePixelRatio());
  };
}
