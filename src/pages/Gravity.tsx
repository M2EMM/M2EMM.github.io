import {
  InputChangeEventDetail,
  InputCustomEvent,
  IonBackButton,
  IonButtons,
  IonContent,
  IonInput,
  IonPage,
} from '@ionic/react';
import { useState } from 'react';
import './Gravity.css';

const Gravity: React.FC = () => {
  const [earth, setEarth] = useState<number>();
  const [mars, setMars] = useState<number>();
  const marsWeight = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = parseFloat(event.detail.value!);
    setEarth(value);
    setMars(parseFloat((value * (3.711 / 9.81)).toFixed(2)));
  }
  const earthWeight = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = parseFloat(event.detail.value!);
    setMars(value);
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
          <IonInput value={earth} placeholder='--' type='number' onIonChange={marsWeight}></IonInput>
          <span>KG</span>
        </div>
        <h2 className='ion-text-center title subtitle-gravity'>My weight on Mars</h2>
        <div className='input-field mars'>
          <IonInput value={mars} placeholder='--' type='number' onIonChange={earthWeight}></IonInput>
          <span>KG</span>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Gravity;
