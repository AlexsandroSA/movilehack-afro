import React  from 'react';
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
  IonCardTitle,
  IonIcon,
  IonCardHeader,
  IonModal,
} from '@ionic/react';

import '../styles.css';

const Notification: React.FC = () => {

  return (
    <IonPage>
      <IonContent className="ionContent">
        <IonGrid className="ionGrid">
          <IonRow>
            <IonCard className="ionCard">
              <IonCardHeader>
                <IonCardTitle style={{textAlign: 'center'}}>OBA!</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ionCardContent">
                <IonText className="textCard">Um amigo</IonText>
                <IonText className="textCard">Quer te ajudar?</IonText>

                <IonRow>
                  <IonButton routerLink="/aluno/1" className='ionButton' color='danger'>
                    Cancel
                  </IonButton>
                  <IonButton routerLink="/aluno/1" className='ionButton' color='success'>
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
