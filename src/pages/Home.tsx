import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 className='ion-padding title title-home'>Emirates Mars Mission</h1>
        <IonImg src='/assets/mars-hope-probe.png' style={{
          'max-width': '400px',
          'margin': '20px auto'
        }}></IonImg>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className='card-button emm-videos' routerLink={`/videos`} button={true}>
                <IonCardContent className='main-card-content'>
                  EMM Videos
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='card-button gravity' routerLink={`/gravity`} button={true}>
                <IonCardContent className='main-card-content'>
                  Gravity
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='card-button mars-vs-earth' routerLink={`/mars-vs-earth`} button={true}>
                <IonCardContent className='main-card-content'>
                  Mars <span className='tiny'>vs</span> Earth
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='card-button emm-book' routerLink={`/book`} button={true}>
                <IonCardContent className='main-card-content'>
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
