import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/*  Page */
import TeacherHome from './pages/Teacher/Teacher';
import ClassDetailPage from './pages/Teacher/ClassDetail';
import StudentDetailPage from "./pages/Teacher/StudentDetail";
import StudentHome from './pages/Student/Student';


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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/professor" component={TeacherHome} exact={true} />
      <Route path="/aluno" component={StudentHome} exact={true} />
      <Route
        path="/professor/classe"
        component={ClassDetailPage}
        exact={true}
      />
      <Route
        path="/classe/aluno"
        component={StudentDetailPage}
        exact={true}
      />
      <Route
        path="/"
        render={() => <Redirect to="/professor" />}
        exact={true}
      />
    </IonReactRouter>
  </IonApp>
);

export default App;
