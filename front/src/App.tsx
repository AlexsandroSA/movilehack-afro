import React, {useState} from 'react';
import Menu from "./components/Menu";

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';

import TeacherHome from './pages/Teacher/Teacher';
import ClassDetailPage from './pages/Teacher/ClassDetail';
import StudentDetailPage from "./pages/Teacher/StudentDetail";
import StudentHome from './pages/Student/Student';
import {
  NotificationMentorado,
  NotificationMentor,
} from './pages/Notification';
import HomePage from './pages/Home';


import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route
        path="/professor"
        component={TeacherHome}
        exact={true}
      />
      <Route
        path="/home"
        component={HomePage}
        exact={true}
      />
      <Route
        path="/aluno"
        component={StudentHome}
        exact={true}
      />
      <Route
        path="/notification/mentorado"
        component={NotificationMentorado}
        exact={true}
      />
      <Route
        path="/notification/mentor"
        component={NotificationMentor}
        exact={true}
      />
      <Route
        path="/professor/classe"
        component={ClassDetailPage}
        exact={true}
      />
      <Route path="/classe/aluno" component={StudentDetailPage} exact={true} />
      <Route
        path="/"
        render={() => <Redirect to="/home" />}
        exact={true}
      />
    </IonReactRouter>
  </IonApp>
);

  export default App;
