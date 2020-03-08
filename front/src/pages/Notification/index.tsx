import React from 'react';
import {
  IonContent,
  IonPage,
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
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonText>
              {'Oba!\num amigo\nquer te ajudar'}
            </IonText>
            <IonChip>
              <IonIcon color="danger" />
              <IonLabel>Icon Chip</IonLabel>
              <IonIcon name="close" />
            </IonChip>
            <IonChip outline>
              <IonIcon name="close-circle"></IonIcon>
            </IonChip>
          </IonCardContent>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Notification;
