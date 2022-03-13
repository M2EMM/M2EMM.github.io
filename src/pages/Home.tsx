import { IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className='ion-padding'>Emirates Mars Mission</h1>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className='card-button' routerLink={`/videos`} button={true}>
                <IonCardContent>
                  EMM Videos
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='card-button' routerLink={`/gravity`} button={true}>
                <IonCardContent>
                  Gravity
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='card-button' routerLink={`/mars-vs-earth`} button={true}>
                <IonCardContent>
                  Mars vs Earth
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='card-button' routerLink={`/book`} button={true}>
                <IonCardContent>
                  EMM Book
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
