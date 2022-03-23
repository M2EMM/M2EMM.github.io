import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonPage,
} from '@ionic/react';
import './Book.css';

const Book: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot='start'>
        <IonBackButton defaultHref='/' ></IonBackButton>
      </IonButtons>
      <IonContent fullscreen>
        <h1 className='ion-padding title title-book'>EMM Book</h1>
      </IonContent>
    </IonPage>
  );
};

export default Book;
