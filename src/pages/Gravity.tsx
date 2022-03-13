import { IonBackButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Gravity.css';

const Gravity: React.FC = () => {
  const [earth, setEarth] = useState<string>();
  const [mars, setMars] = useState<string>();
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' ></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1 className='ion-padding'>Gravity Game</h1>
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
