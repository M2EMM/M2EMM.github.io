import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
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
  Color4,
} from '@babylonjs/core';
import SceneComponent from 'babylonjs-hook';
import './MarsVsEarth.css';
import { useState } from 'react';

/**
 * 0: Compare
 * 1: Spread
 */
let mode: number;
let setMode: React.Dispatch<React.SetStateAction<number>>;
/**
 * 0: Mars
 * 1: Earth
 */
let camera: ArcRotateCamera;
let target: number;
let setTarget: React.Dispatch<React.SetStateAction<number>>;

let earth: Mesh;
let moon: Mesh;
let mars: Mesh;
let phobos: Mesh;
let deimos: Mesh;
const diameterEarth = 10;
const diameterMoon = diameterEarth * 0.2725;
const diameterMars = diameterEarth * 0.531;
const diameterPhobos = diameterMars * 0.1;//0.00327;
const diameterDeimos = diameterMars * 0.05;//0.00185;
const distanceEarthMoon = 10;
const distanceMarsPhobos = diameterMars;
const distanceMarsDeimos = distanceMarsPhobos * 2;
const rpmEarth = 10;
const rpmMoon = rpmEarth * .35;
const rpmMars = rpmEarth * 1.029;
const rpmPhobos = rpmMars * 1.029;////
const rpmDeimos = rpmMars * 1.029;////
const cameraAlpha = -Math.PI / 1.1;
const cameraBeta = Math.PI / 2.5;

// Based on: https://doc.babylonjs.com/extensions/Babylon.js+ExternalLibraries/BabylonJS_and_ReactJS
const onSceneReady = async (scene: Scene) => {
  scene.clearColor = new Color4(0, 0, 0, 0);
  const canvas = scene.getEngine().getRenderingCanvas();

  // Lights
  const light1 = new HemisphericLight('light', new Vector3(-1, 0, 0), scene);
  light1.intensity = 0.2;
  const light2 = new DirectionalLight('light', new Vector3(1, 0, 0), scene);
  light2.intensity = 1;
  // light.diffuse = new Color3(1, 1, 1);

  // Sky Dome
  const skyDome = MeshBuilder.CreateSphere('Dome', { diameter: 1024 }, scene);
  const skyDomeMaterial = new StandardMaterial('skyDome', scene);
  skyDomeMaterial.diffuseTexture = new Texture('/assets/models/starfield.jpg', scene);
  skyDomeMaterial.backFaceCulling = false;
  skyDome.material = skyDomeMaterial;

  // Earth
  const materialEarth = new StandardMaterial('materialEarth', scene);
  materialEarth.diffuseTexture = new Texture('/assets/models/earthmap1k.jpg', scene);
  // materialEarth.bumpTexture = new Texture('/assets/models/earthbump1k.jpg', scene);
  materialEarth.specularColor = new Color3(0, 0, 0);
  earth = MeshBuilder.CreateSphere('earth', { segments: 100, diameter: diameterEarth }, scene);
  earth.material = materialEarth;
  earth.rotation.x = Math.PI;
  earth.position.x = 200;

  // Moon
  const materialMoon = new StandardMaterial('materialMoon', scene);
  materialMoon.diffuseTexture = new Texture('/assets/models/moonmap1k.jpg', scene);
  // materialMoon.bumpTexture = new Texture('/assets/models/moonbump1k.jpg', scene);
  materialMoon.specularColor = new Color3(0, 0, 0);
  moon = MeshBuilder.CreateSphere('moon', { segments: 100, diameter: diameterMoon }, scene);
  moon.material = materialMoon;
  moon.rotation.x = Math.PI;
  moon.position.x = earth.position.x + distanceEarthMoon;

  // Mars
  const materialMars = new StandardMaterial('materialMars', scene);
  materialMars.diffuseTexture = new Texture('/assets/models/marsmap1k.jpg', scene);
  // materialMars.bumpTexture = new Texture('/assets/models/marsbump1k.jpg', scene);
  materialMars.specularColor = new Color3(0, 0, 0);
  mars = MeshBuilder.CreateSphere('mars', { segments: 100, diameter: diameterMars }, scene);
  mars.material = materialMars;
  mars.rotation.x = Math.PI;
  mars.position.x = 0;

  // Phobos
  const materialPhobos = new StandardMaterial('materialPhobos', scene);
  materialPhobos.diffuseTexture = new Texture('/assets/models/phobosmap1k.jpg', scene);
  // materialPhobos.bumpTexture = new Texture('/assets/models/phobosbump1k.jpg', scene);
  materialPhobos.specularColor = new Color3(0, 0, 0);
  phobos = MeshBuilder.CreateSphere('phobos', { segments: 100, diameter: diameterPhobos }, scene);
  phobos.material = materialPhobos;
  phobos.rotation.x = Math.PI;
  phobos.position.x = distanceMarsPhobos;

  // Deimos
  const materialDeimos = new StandardMaterial('materialDeimos', scene);
  materialDeimos.diffuseTexture = new Texture('/assets/models/deimosmap1k.jpg', scene);
  // materialDeimos.bumpTexture = new Texture('/assets/models/deimosbump1k.jpg', scene);
  materialDeimos.specularColor = new Color3(0, 0, 0);
  deimos = MeshBuilder.CreateSphere('deimos', { segments: 100, diameter: diameterDeimos }, scene);
  deimos.material = materialDeimos;
  deimos.rotation.x = Math.PI;
  deimos.position.x = distanceMarsDeimos;

  // Camera
  camera = new ArcRotateCamera('camera', cameraAlpha, cameraBeta, 30, earth.position, scene);
  camera.attachControl(canvas, true);

  // WebXR
  const xr = await scene.createDefaultXRExperienceAsync({
    floorMeshes: [skyDome],
    uiOptions: {
      sessionMode: 'immersive-ar'
    }
  });
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: Scene) => {
  const deltaTimeInMillis = scene.getEngine().getDeltaTime();
  const deltaTimeInSeconds = deltaTimeInMillis / 1000;
  earth.rotation.y -= 2 * Math.PI * rpmEarth * deltaTimeInSeconds ** 2;
  moon.rotation.y -= 2 * Math.PI * rpmMoon * deltaTimeInSeconds ** 2;
  mars.rotation.y -= 2 * Math.PI * rpmMars * deltaTimeInSeconds ** 2;
  phobos.rotation.y -= 2 * Math.PI * rpmPhobos * deltaTimeInSeconds ** 2;
  deimos.rotation.y -= 2 * Math.PI * rpmDeimos * deltaTimeInSeconds ** 2;

  if (mode === 1) {
    moon.position.x = earth.position.x + distanceEarthMoon * Math.cos(-moon.rotation.y);
    moon.position.z = earth.position.z + distanceEarthMoon * Math.sin(-moon.rotation.y);
    phobos.position.x = mars.position.x + distanceMarsPhobos * Math.cos(-phobos.rotation.y);
    phobos.position.z = mars.position.z + distanceMarsPhobos * Math.sin(-phobos.rotation.y);
    deimos.position.x = mars.position.x + distanceMarsDeimos * Math.cos(-deimos.rotation.y * 0.2);
    deimos.position.z = mars.position.z + distanceMarsDeimos * Math.sin(-deimos.rotation.y * 0.2);
  }
};

const MarsVsEarth: React.FC = () => {
  [mode, setMode] = useState<number>(1);
  [target, setTarget] = useState<number>(1);
  const setPlanetMode = (mode: number) => {
    setMode(mode);
    switch (mode) {
      case 0:
        earth.position.x = diameterEarth;
        // earth.position.y = 0;
        mars.position.x = 0;
        // mars.position.y = 0;
        moon.position.x = -diameterMars;
        moon.position.z = 0;
        // moon.position.y = 0;
        phobos.position.x = -(diameterMars + diameterMoon);
        phobos.position.z = 0;
        // phobos.position.y = 0;
        deimos.position.x = -(diameterMars + diameterMoon + diameterPhobos + 1);
        deimos.position.z = 0;
        // deimos.position.y = 0;
        break;
      case 1:
        earth.position.x = 200;
        // earth.position.y = 0;
        mars.position.x = 0;
        // mars.position.y = 0;
        moon.position.x = earth.position.x + distanceEarthMoon;
        // moon.position.y = 0;
        phobos.position.x = mars.position.x + distanceMarsPhobos;
        // phobos.position.y = 0;
        deimos.position.x = mars.position.x + distanceMarsDeimos;
        // deimos.position.y = 0;
        break;
    }
  };
  const setCameraPlanet = (target: number) => {
    setTarget(target);
    switch (target) {
      case 0:
        camera.setTarget(mars.position);
        break;
      case 1:
        camera.setTarget(earth.position);
        break;
    }
    camera.radius = 20;
    camera.alpha = cameraAlpha;
    camera.beta = cameraBeta;
  };
  return (
    <IonPage>
      <IonButtons slot='start'>
        <IonBackButton defaultHref='/' ></IonBackButton>
      </IonButtons>
      <IonContent fullscreen>
        <h1 className='ion-padding title title-planets'>Mars Vs. Earth</h1>
        <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='mars-vs-earth' />
        <IonGrid className='ion-text-center'>
          <IonRow>
            <IonCol>
              <IonButton
                color='primary'
                size='large'
                expand='block'
                shape='round'
                fill={mode === 0 ? 'solid' : 'outline'}
                onClick={() => { setPlanetMode(0) }}>
                Compare
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                color='secondary'
                size='large'
                expand='block'
                shape='round'
                fill={mode === 1 ? 'solid' : 'outline'}
                onClick={() => { setPlanetMode(1) }}>
                Separated
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                color='primary'
                size='large'
                expand='block'
                shape='round'
                fill={target === 0 ? 'solid' : 'outline'}
                onClick={() => { setCameraPlanet(0); }}>
                Mars
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                color='secondary'
                size='large'
                expand='block'
                shape='round'
                fill={target === 1 ? 'solid' : 'outline'}
                onClick={() => { setCameraPlanet(1); }}>
                Earth
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MarsVsEarth;
