import React from "react";
import { RouteComponentProps } from "react-router";

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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
  IonButton,
  IonImg,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonRouterOutlet
} from "@ionic/react";

const HomePage: React.FC<RouteComponentProps<{ name: string }>> = () => {
  return (
    <IonPage>
      <IonContent>
        <IonImg src="assets/logo_estude_facil.png" class="app-logo" />

        <p className="center-content">
          <IonButton color="secondary" href="/professor" fill="outline">
            Professor
          </IonButton>
        </p>

        <p className="center-content">
          <IonButton color="secondary" href="/aluno" fill="outline">
            Aluno 1
          </IonButton>
        </p>

        <p className="center-content">
          <IonButton color="secondary" href="/aluno/2" fill="outline">
            Aluno 2
          </IonButton>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
