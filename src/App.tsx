import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter, IonReactHashRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Gravity from './pages/Gravity';
import MarsVsEarth from './pages/MarsVsEarth';
import Book from './pages/Book';
import PDFViewer from './pages/PDFViewer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/site.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactHashRouter>
      <IonRouterOutlet>
        <Route exact path='/home' component={Home} />
        <Route path='/videos' component={Videos} />
        <Route path='/gravity' component={Gravity} />
        <Route path='/mars-vs-earth' component={MarsVsEarth} />
        <Route path='/book' component={Book} />
        <Route path='/pdfviewer/:language' component={PDFViewer} />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      </IonRouterOutlet>
    </IonReactHashRouter>
  </IonApp>
);

export default App;
