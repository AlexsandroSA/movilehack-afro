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
import '../styles.css';

const Notification: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>

            <IonCard>
              <IonCardContent>

                <IonText className='textCard'>OBA!</IonText>
                <IonText className='textCard'>Um amigo</IonText>
                <IonText className='textCard'>Quer te ajudar?</IonText>
                <IonRow>

                  <IonButton color='danger'>
                    Cancel
                  </IonButton>
                  <IonButton color='success'>
                    OK
                  </IonButton>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export const NotificationMentorado = Notification;
