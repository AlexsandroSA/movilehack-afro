import React from "react";

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
  IonContent
} from "@ionic/react";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonImg src="assets/logo_estude_facil.png" class="app-logo" />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
