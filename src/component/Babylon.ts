import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";

import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";

export interface IInitProps {
  scene: BABYLON.Scene;
  canvas: HTMLCanvasElement;
}

interface IProps {
  canvas: HTMLCanvasElement;
  debug?: boolean;
  init: (p: IInitProps) => void;
}

class BabylonApp {
  public canvas: HTMLCanvasElement;
  public engine: BABYLON.Engine;
  public scene: BABYLON.Scene;

  constructor(props: IProps) {
    this.canvas = props.canvas;
    this.engine = new BABYLON.Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });
    this.scene = new BABYLON.Scene(this.engine);
    props.init({
      scene: this.scene,
      canvas: this.canvas,
    });
    if (props.debug) {
      this.scene.debugLayer.show();
    }

    window.addEventListener("resize", () => {
      this.engine.resize();
    });
    return this;
  }

  run() {
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
}

export default BabylonApp;
