import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonPage,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './PDFViewer.css';


interface PDFViewerPageProps
  extends RouteComponentProps<{
    language: string;
  }> { }


const PDFViewer: React.FC<PDFViewerPageProps> = ({ match }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <IonPage>
      <IonButtons slot='start'>
        <IonBackButton defaultHref='/book' ></IonBackButton>
      </IonButtons>
      <IonContent fullscreen>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
          <div style={{ height: '100%' }}>
            <Viewer
              theme='dark'
              fileUrl={`/assets/books/M2 Book ${match.params.language}.pdf`}
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </IonContent>
    </IonPage>
  );
};

export default PDFViewer;
