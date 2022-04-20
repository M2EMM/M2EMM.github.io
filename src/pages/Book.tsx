import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
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
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className='book-card' style={{ '--background': 'url(/assets/emm-book-english.png)' }} routerLink={`/pdfviewer/English`} button={true}>
                <IonCardHeader className='book-header'>
                  <IonCardTitle>EMM Activity Book</IonCardTitle>
                  <IonCardSubtitle>English</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='book-card' style={{ '--background': 'url(/assets/emm-book-arabic.png)' }} routerLink={`/pdfviewer/Arabic`} button={true}>
                <IonCardHeader className='book-header'>
                  <IonCardTitle>EMM Activity Book</IonCardTitle>
                  <IonCardSubtitle>Arabic</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className='book-card' style={{ '--background': 'url(/assets/emm-book-hindi.png)' }} routerLink={`/pdfviewer/Hindi`} button={true}>
                <IonCardHeader className='book-header'>
                  <IonCardTitle>EMM Activity Book</IonCardTitle>
                  <IonCardSubtitle>Hindi</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Book;
