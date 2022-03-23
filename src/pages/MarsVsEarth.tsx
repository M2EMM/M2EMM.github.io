import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonPage,
} from '@ionic/react';
import {
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  DirectionalLight,
  MeshBuilder,
  Scene,
  Mesh,
  StandardMaterial,
  Texture,
  Color3,
} from '@babylonjs/core';
import SceneComponent from 'babylonjs-hook';
import './MarsVsEarth.css';

// Taken from: https://doc.babylonjs.com/extensions/Babylon.js+ExternalLibraries/BabylonJS_and_ReactJS
// let box: Mesh;
let earth: Mesh;
let moon: Mesh;
let mars: Mesh;
const onSceneReady = (scene: Scene) => {
  const canvas = scene.getEngine().getRenderingCanvas();
  // const camera = new ArcRotateCamera('camera1', Math.PI, Math.PI / 2, 20, Vector3.Zero(), scene);
  const camera = new ArcRotateCamera('camera1', -Math.PI / 1.1, Math.PI / 2.5, 20, Vector3.Zero(), scene);
  console.log(camera)
  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());
  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);
  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light1 = new HemisphericLight('light', new Vector3(-1, 0, 0), scene);
  light1.intensity = 0.2;
  const light2 = new DirectionalLight('light', new Vector3(1, 0, 0), scene);
  light2.intensity = 1;
  // light.diffuse = new Color3(1, 1, 1);
  // Sky Dome
  const skyDome = MeshBuilder.CreateSphere("Dome", { diameter: 1024 }, scene);
  const skyDomeMaterial = new StandardMaterial('skyDome', scene);
  skyDomeMaterial.diffuseTexture = new Texture('/assets/models/starfield.jpg', scene);
  skyDomeMaterial.backFaceCulling = false;
  skyDome.material = skyDomeMaterial;
  // Earth
  const diameterEarth = 10;
  const materialEarth = new StandardMaterial('materialEarth', scene);
  materialEarth.diffuseTexture = new Texture('/assets/models/earthmap1k.jpg', scene);
  // materialEarth.bumpTexture = new Texture('/assets/models/earthbump1k.jpg', scene);
  materialEarth.specularColor = new Color3(0, 0, 0);
  earth = MeshBuilder.CreateSphere('earth', { segments: 100, diameter: diameterEarth }, scene);
  earth.material = materialEarth;
  earth.rotation.x = Math.PI;
  earth.position.x = diameterEarth;
  // Mars
  const diameterMars = diameterEarth * 0.531;
  const materialMars = new StandardMaterial('materialMars', scene);
  materialMars.diffuseTexture = new Texture('/assets/models/marsmap1k.jpg', scene);
  // materialMars.bumpTexture = new Texture('/assets/models/marsbump1k.jpg', scene);
  materialMars.specularColor = new Color3(0, 0, 0);
  mars = MeshBuilder.CreateSphere('earth', { segments: 100, diameter: diameterMars }, scene);
  mars.material = materialMars;
  mars.rotation.x = Math.PI;
  mars.position.x = 0;
  // Moon
  const diameterMoon = diameterEarth * 0.2725;
  const materialMoon = new StandardMaterial('materialMoon', scene);
  materialMoon.diffuseTexture = new Texture('/assets/models/moonmap1k.jpg', scene);
  // materialMoon.bumpTexture = new Texture('/assets/models/moonbump1k.jpg', scene);
  materialMoon.specularColor = new Color3(0, 0, 0);
  moon = MeshBuilder.CreateSphere('earth', { segments: 100, diameter: diameterMoon }, scene);
  moon.material = materialMoon;
  moon.rotation.x = Math.PI;
  moon.position.x = -diameterMars;
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: Scene) => {
  const rpmEarth = 1;
  const rpmMoon = rpmEarth * (1 / 655.720);
  const rpmMars = rpmEarth * 1.029;
  const deltaTimeInMillis = scene.getEngine().getDeltaTime();
  if (earth) earth.rotation.y += (rpmEarth / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  if (moon) moon.rotation.y += (rpmMoon / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  if (mars) mars.rotation.y += (rpmMars / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
};

const MarsVsEarth: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot='start'>
        <IonBackButton defaultHref='/' ></IonBackButton>
      </IonButtons>
      <IonContent fullscreen>
        <h1 className='ion-padding title title-planets'>Mars Vs. Earth</h1>
        <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='mars-vs-earth' />
      </IonContent>
    </IonPage>
  );
};

export default MarsVsEarth;
