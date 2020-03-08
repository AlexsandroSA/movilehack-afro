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
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonImg src="assets/logo_estude_facil.png" class="app-logo" />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
