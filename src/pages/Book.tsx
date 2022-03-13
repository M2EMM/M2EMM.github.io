import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Book.css';

const Book: React.FC = () => {
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
        <h1 className='ion-padding'>EMM Book</h1>
      </IonContent>
    </IonPage>
  );
};

export default Book;
