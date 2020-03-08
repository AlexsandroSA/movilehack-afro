import React from 'react';

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
  IonButtons,
  IonMenuButton,
  IonBackButton,
  IonItemOptions,
  IonContent
} from "@ionic/react";

const classes = [
  { name: "6 Ano A - Matemática" },
  { name: "7 Ano A - Física" },
  { name: "8 Ano A - Quimica" },
  { name: "9 Ano A - Matemática" },
  { name: "5 Ano A - Física" },
  { name: "4 Ano A - Quimica" }
];

const Teacher: React.FC = () => {
  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton
              icon="buttonIcon"
              defaultHref="/professor"
              text="Voltar"
            ></IonBackButton>
            <IonTitle>Detalhes da classe</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {classes.map(classe => (
            <IonItem button key={Math.random()} routerLink="/professor/classe">
              <IonLabel>{classe.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Teacher;
