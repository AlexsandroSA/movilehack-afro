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
  IonItemOptions,
  IonContent
} from "@ionic/react";

const classes = [
  { name: "6 Ano A" },
  { name: "7 Ano A" },
  { name: "8 Ano A" },
  { name: "9 Ano A" },
  { name: "5 Ano A" },
  { name: "4 Ano A" }
];

const Teacher: React.FC = () => {
  return (
    <IonPage>

      <IonContent>
        <IonList>
          {classes.map(classe => (
            <IonItem
              button
              key={Math.random()}
              routerLink="/professor/classe"
            >
              <IonLabel>{classe.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Teacher;
