import * as BABYLON from "@babylonjs/core";

import BabylonApp, { IInitProps } from "../component/Babylon";

// CreateScene function that creates and return the scene
const createScene = function ({
  scene,
  canvas,
}: IInitProps) {
  // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
  var camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 5, -10),
    scene
  );
  // Target the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());
  // Attach the camera to the canvas
  camera.attachControl(canvas, false);
  // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
  new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  // Create a built-in "sphere" shape using the SphereBuilder
  var sphere = BABYLON.MeshBuilder.CreateSphere(
    "sphere1",
    { segments: 32, diameter: 2, sideOrientation: BABYLON.Mesh.FRONTSIDE },
    scene
  );
  // Move the sphere upward 1/2 of its height
  sphere.position.y = 1.5;
  // Create a built-in "ground" shape;
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground1",
    { width: 6, height: 6, subdivisions: 2, updatable: false },
    scene
  );
  const groundMaterial = new BABYLON.StandardMaterial("GroundMaterial", scene);
  groundMaterial.diffuseColor = BABYLON.Color3.Green();
  ground.material = groundMaterial;
  BABYLON.SceneLoader.ImportMesh(
    "",
    Assets.meshes.Yeti.rootUrl,
    Assets.meshes.Yeti.filename,
    scene,
    function (newMeshes) {
      newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    }
  );
};

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;

const app = new BabylonApp({
  canvas,
  init: createScene,
  debug: false,
});
app.run();
