import {
  InputChangeEventDetail,
  InputCustomEvent,
  IonBackButton,
  IonButtons,
  IonContent,
  IonInput,
  IonPage,
} from '@ionic/react';
import { Ref, useRef, useState } from 'react';
import './Gravity.css';

const Gravity: React.FC = () => {
  const [earth, setEarth] = useState<number>();
  const [mars, setMars] = useState<number>();
  const earthInput = useRef<HTMLIonInputElement>(null);
  const marsInput = useRef<HTMLIonInputElement>(null);
  const calculateMarsWeight = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = parseFloat(event.detail.value!);
    setEarth(value);
    if (marsInput.current?.classList.contains('has-focus')) { return; }
    setMars(parseFloat((value * (3.711 / 9.81)).toFixed(2)));
  }
  const calculateEarthWeight = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = parseFloat(event.detail.value!);
    setMars(value);
    if (earthInput.current?.classList.contains('has-focus')) { return; }
    setEarth(parseFloat((value * (9.81 / 3.711)).toFixed(2)));
  }
  return (
    <IonPage>
      <IonButtons slot='start'>
        <IonBackButton defaultHref='/' ></IonBackButton>
      </IonButtons>
      <IonContent fullscreen>
        <h1 className='ion-padding title title-gravity'>Gravity Game</h1>
        <h2 className='ion-text-center title subtitle-gravity'>My weight on Earth</h2>
        <div className='input-field earth'>
          <IonInput ref={earthInput} value={earth} placeholder='--' type='number' onIonChange={calculateMarsWeight}></IonInput>
          <span>KG</span>
        </div>
        <h2 className='ion-text-center title subtitle-gravity'>My weight on Mars</h2>
        <div className='input-field mars'>
          <IonInput ref={marsInput} value={mars} placeholder='--' type='number' onIonChange={calculateEarthWeight}></IonInput>
          <span>KG</span>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Gravity;
