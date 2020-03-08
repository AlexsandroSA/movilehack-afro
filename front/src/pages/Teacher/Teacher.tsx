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
