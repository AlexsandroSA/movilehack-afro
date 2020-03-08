import React from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonBackButton,
  IonContent
} from "@ionic/react";

interface StudentDetailsProps extends RouteComponentProps<{}> {}

const StudentDetailPage: React.FC<StudentDetailsProps> = ({ match }) => {
  return (
    <IonPage class="background-app">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
            <IonTitle>Desempenho do aluno - Fulano De tal em Matemática</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>

      </IonContent>
    </IonPage>
  );
};

export default StudentDetailPage;
