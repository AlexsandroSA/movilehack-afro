import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  IonText,
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonLabel,
  IonIcon,

} from '@ionic/react';
import './index.css';

const Notification: React.FC = () => {
  return (
    <IonPage>
      <IonContent>

        <IonGrid>
          <IonRow className='textRow'>
            <IonText>OBA!</IonText>
            <IonText>Um amigo</IonText>
            <IonText>Quer te ajudar?</IonText>
          </IonRow>
          <IonRow>

            <IonButton color='danger'>
              Cancel
            </IonButton>
            <IonButton color='success'>
              OK
              </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Notification;
