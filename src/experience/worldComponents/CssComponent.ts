import {
  AddEquation,
  AdditiveBlending,
  Color,
  CustomBlending,
  DoubleSide,
  MaxEquation,
  Mesh,
  MeshBasicMaterial,
  MinEquation,
  MultiplyBlending,
  NoBlending,
  NormalBlending,
  PlaneGeometry,
  ReverseSubtractEquation,
  SubtractEquation,
  SubtractiveBlending,
} from "three";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";

const htmlElem = document.createElement("div");

// htmlElem.innerHTML = `This is an element`;
// htmlElem.style.width = "100px";
// htmlElem.style.height = "100px";
// htmlElem.style.backgroundColor = "blue";
// htmlElem.innerHTML = `
// <iframe width="560" height="315" src="https://www.youtube.com/embed/l64YwNl1wr0?si=BMr9oS_Hwne5nBeG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// `;

htmlElem.style.backgroundColor = "rgba(255,255,255,0)";
htmlElem.insertAdjacentHTML(
  "afterbegin",
  `
  <h1 style=''>THIS IS A TEST</h1>
`
);

export class CssComponent extends CSS3DObject {
  public regularPlane = new Mesh(
    new PlaneGeometry(560, 315),
    new MeshBasicMaterial({
      color: new Color(0, 0, 0),
      opacity: 0,
      side: DoubleSide,
      blending: NoBlending,

      transparent: true,
    })
  );

  constructor() {
    super(htmlElem);
    const scaleMultiplier = 0.01;
    this.scale.multiplyScalar(scaleMultiplier);
    this.regularPlane.scale.multiplyScalar(scaleMultiplier);
    this.position.z = -5;

    this.regularPlane.position.copy(this.position);
  }
}
