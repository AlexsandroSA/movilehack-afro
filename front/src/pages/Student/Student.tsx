import React from 'react';
import { 
  IonGrid, 
  IonRow, 
  IonCol,
  IonContent, 
  IonHeader, 
  IonPage, 

  IonAvatar,
  IonProgressBar,

  IonList, 
  IonItem, 
  IonLabel,

  IonTitle, 
  IonToolbar,
  IonCard, 
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';

import { Avatar, ProgressBar } from '../../components';

// IonSlides, IonSlide, IonContent

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Teacher: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home aluno</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonGrid>
          <IonRow>            
            <Avatar url="" />
            <ProgressBar value={0.3} color="success" prefix="XP" />
          </IonRow>

          <IonRow>
            {["história"].map((name) => (
                <IonCol>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>...</IonCardSubtitle>
                      <IonCardTitle>{name}</IonCardTitle>
                      <ProgressBar value={0.7} color="success" prefix="70%" />
                      <ProgressBar value={0.3} color="success" prefix="30%" />
                    </IonCardHeader>

                    <IonCardContent>
                      ...
                      
                    </IonCardContent>
                  </IonCard>
                </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonTitle>Mentorias</IonTitle>

        <IonList>
          <IonItem>
            <Avatar url="" />
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>

        
        <IonTitle>Turma</IonTitle>

      
      </IonContent>
    </IonPage>
  );
};

export default Teacher;
