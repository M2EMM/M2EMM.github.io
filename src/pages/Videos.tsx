import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Videos.css';

const Videos: React.FC = () => {
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
        <h1 className='ion-padding'>EMM Videos</h1>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard routerLink={`/`} button={true}>
                {/* <video></video> */}
                <IonCardHeader>
                  <IonCardTitle>Emirates Mars Mission</IonCardTitle>
                  <IonCardSubtitle>What is the Emirates Mars Mission? and why we are proud of it?</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink={`/`} button={true}>
                {/* <video></video> */}
                <IonCardHeader>
                  <IonCardTitle>Emirates Mars Mission Objectives</IonCardTitle>
                  <IonCardSubtitle>What is the Emirates Mars Mission objectives? and why we are exploring mars?</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard routerLink={`/`} button={true}>
                {/* <video></video> */}
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
