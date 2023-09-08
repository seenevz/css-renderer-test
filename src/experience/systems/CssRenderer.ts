import { CSS3DRenderer } from "three/addons/renderers/CSS3DRenderer.js";

export class CssRenderer extends CSS3DRenderer {
  constructor(private container: HTMLElement) {
    super();
    this.setRenderSize();

    this.domElement.style.position = "absolute";
    this.domElement.style.top = "0";

    container.append(this.domElement);

    container.addEventListener("resize", this.setRenderSize);
  }
  setRenderSize = () => {
    this.setSize(this.container.clientWidth, this.container.clientHeight);
  };
}
