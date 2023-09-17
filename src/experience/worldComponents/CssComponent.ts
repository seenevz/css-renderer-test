import {
  Color,
  DoubleSide,
  Mesh,
  MeshStandardMaterial,
  NoBlending,
  PlaneGeometry,
} from "three";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";

const htmlElem = document.createElement("div");

htmlElem.innerHTML = `This is an element`;
// htmlElem.style.width = "100px";
// htmlElem.style.height = "100px";
htmlElem.style.backgroundColor = "blue";
// htmlElem.innerHTML = `
// <iframe width="560" height="315" src="https://www.youtube.com/embed/l64YwNl1wr0?si=BMr9oS_Hwne5nBeG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// `;
htmlElem.innerHTML = `
<div style="padding:56.25% 0 0 0;position:relative;width:720px;"><iframe src="https://player.vimeo.com/video/386521424?h=c85b2610ad&color=ffffff&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`;

// htmlElem.style.backgroundColor = "rgba(255,255,255,0)";
// htmlElem.insertAdjacentHTML(
//   "afterbegin",
//   `
//   <h1 style=''>THIS IS A TEST</h1>
// `
// );

export class CssComponent extends CSS3DObject {
  public regularPlane = new Mesh(
    new PlaneGeometry(720, 400),
    new MeshStandardMaterial({
      color: new Color(0, 0, 0),
      opacity: 0,
      side: DoubleSide,
      blending: NoBlending,

      transparent: true,
    })
  );

  constructor(pos: [x: number, y: number, z: number] = [0, 0, 0]) {
    super(htmlElem);
    const scaleMultiplier = 0.01;
    this.position.set(...pos);
    this.regularPlane.castShadow = true;
    this.scale.multiplyScalar(scaleMultiplier);
    this.regularPlane.scale.multiplyScalar(scaleMultiplier);

    this.rotation.x = -Math.PI / 4;

    this.regularPlane.position.copy(this.position);
    this.regularPlane.rotation.copy(this.rotation);
  }
}
