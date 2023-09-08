import { CssWorld } from "./CssWorld";
import SceneCamera from "./SceneCamera";
import World from "./World";
import { Renderer, SceneCameraControls } from "./systems";
import { CssRenderer } from "./systems/CssRenderer";

export class Experience {
  private renderer: Renderer;
  private cssRenderer: CssRenderer;
  private sceneCamera: SceneCamera;
  private world: World;
  private cssWorld: CssWorld;
  private sceneControls: SceneCameraControls;

  constructor(container: HTMLElement) {
    this.cssRenderer = new CssRenderer(container);
    this.renderer = new Renderer(container);
    this.sceneCamera = new SceneCamera(container);
    this.cssWorld = new CssWorld(this.sceneCamera);
    this.world = new World(this.sceneCamera, this.cssWorld);
    this.sceneControls = new SceneCameraControls(this.sceneCamera, container);

    this.reroutePointerEvents();
    this.update();
  }

  reroutePointerEvents = () => {
    this.renderer.domElement.onpointerdown = e =>
      this.cssRenderer.domElement.setPointerCapture(e.pointerId);
    this.renderer.domElement.onpointerup = e =>
      this.cssRenderer.domElement.releasePointerCapture(e.pointerId);
  };

  update = () => {
    this.sceneControls.update();

    this.renderer.render(this.world, this.sceneCamera);
    this.cssRenderer.render(this.cssWorld, this.sceneCamera);

    requestAnimationFrame(this.update);
  };
}
