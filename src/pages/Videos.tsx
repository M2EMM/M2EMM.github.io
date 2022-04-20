import {
  IonBackButton, IonButtons, IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/react';
import './Videos.css';

const Videos: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot='start'>
        <IonBackButton defaultHref='/' ></IonBackButton>
      </IonButtons>
      <IonContent fullscreen>
        <h1 className='ion-padding title title-videos'>EMM Videos</h1>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className='video-card emm'>
                {/* <video></video> */}
                <div className='ratio ratio-16x9'>
                  <iframe src='https://www.youtube.com/embed/ZHen3W3g0K0' title='Emirates Mars Mission' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                </div>
                <IonCardHeader>
                  <IonCardTitle>Emirates Mars Mission</IonCardTitle>
                  <IonCardSubtitle>What is the Emirates Mars Mission? and why we are proud of it?</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='video-card emmo'>
                {/* <video></video> */}
                <div className='ratio ratio-16x9'>
                  <iframe src='https://www.youtube.com/embed/0mUEpOZNWwk' title='Emirates Mars Mission Objectives' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                </div>
                <IonCardHeader>
                  <IonCardTitle>Emirates Mars Mission Objectives</IonCardTitle>
                  <IonCardSubtitle>What is the Emirates Mars Mission objectives? and why we are exploring mars?</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='video-card emmj'>
                {/* <video></video> */}
                <div className='ratio ratio-16x9'>
                  <iframe src='https://www.youtube.com/embed/WlkN7GAxTBU' title='Emirates Mars Mission Journey' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                </div>
                <IonCardHeader>
                  <IonCardTitle>Emirates Mars Mission Journey</IonCardTitle>
                  <IonCardSubtitle>What is the Emirates Mars Mission stages? and why we are proud of it?</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Videos;
