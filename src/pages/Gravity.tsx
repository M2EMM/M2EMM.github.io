import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonLabel,
  IonPage,
} from '@ionic/react';
import { useState } from 'react';
import './Gravity.css';

const Gravity: React.FC = () => {
  const [earth, setEarth] = useState<string>();
  const [mars, setMars] = useState<string>();
  return (
    <IonPage>
      <IonButtons slot='start'>
        <IonBackButton defaultHref='/' ></IonBackButton>
      </IonButtons>
      <IonContent fullscreen>
        <h1 className='ion-padding title title-gravity'>Gravity Game</h1>
        <IonCard>
          <IonCardContent>
            <IonLabel position="stacked">My weight on Earth</IonLabel>
            <IonInput value={earth}> </IonInput>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonLabel position="stacked">My weight on Mars</IonLabel>
            <IonInput value={mars}> </IonInput>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Gravity;
