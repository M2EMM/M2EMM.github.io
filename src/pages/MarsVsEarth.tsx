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
let mars: Mesh;
let moon: Mesh;
const diameterEarth = 10;
const diameterMars = diameterEarth * 0.531;
const diameterMoon = diameterEarth * 0.2725;

// Based on: https://doc.babylonjs.com/extensions/Babylon.js+ExternalLibraries/BabylonJS_and_ReactJS
const onSceneReady = async (scene: Scene) => {
  scene.clearColor = new Color4(0, 0, 0, 0);
  const canvas = scene.getEngine().getRenderingCanvas();
  // Camera
  camera = new ArcRotateCamera('camera', -Math.PI / 1.1, Math.PI / 2.5, 20, Vector3.Zero(), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

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
  earth.position.x = diameterEarth;

  // Mars
  const materialMars = new StandardMaterial('materialMars', scene);
  materialMars.diffuseTexture = new Texture('/assets/models/marsmap1k.jpg', scene);
  // materialMars.bumpTexture = new Texture('/assets/models/marsbump1k.jpg', scene);
  materialMars.specularColor = new Color3(0, 0, 0);
  mars = MeshBuilder.CreateSphere('earth', { segments: 100, diameter: diameterMars }, scene);
  mars.material = materialMars;
  mars.rotation.x = Math.PI;
  mars.position.x = 0;

  // Moon
  const materialMoon = new StandardMaterial('materialMoon', scene);
  materialMoon.diffuseTexture = new Texture('/assets/models/moonmap1k.jpg', scene);
  // materialMoon.bumpTexture = new Texture('/assets/models/moonbump1k.jpg', scene);
  materialMoon.specularColor = new Color3(0, 0, 0);
  moon = MeshBuilder.CreateSphere('earth', { segments: 100, diameter: diameterMoon }, scene);
  moon.material = materialMoon;
  moon.rotation.x = Math.PI;
  moon.position.x = -diameterMars;

  // WebXR
  const xr = await scene.createDefaultXRExperienceAsync({
    uiOptions: {
      sessionMode: 'immersive-ar'
    }
  });
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
  [mode, setMode] = useState<number>(0);
  [target, setTarget] = useState<number>(0);
  const setPlanetMode = (mode: number) => {
    setMode(mode);
    switch (mode) {
      case 0:
        earth.position.x = diameterEarth;
        // earth.position.y = 0;
        mars.position.x = 0;
        // mars.position.y = 0;
        moon.position.x = -diameterMars;
        // moon.position.y = 0;
        break;
      case 1:
        earth.position.x = 200;
        // earth.position.y = 0;
        mars.position.x = 0;
        // mars.position.y = 0;
        moon.position.x = -200;
        // moon.position.y = 0;
        break;
    }
  }
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
    camera.alpha = -Math.PI / 1.1;
    camera.beta = Math.PI / 2.5;
  }
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
                Seperated
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
