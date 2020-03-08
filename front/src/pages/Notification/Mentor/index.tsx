import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  IonText,
  IonList,
  IonButton,
  IonCard,
  IonItem,
  IonCardContent,
  IonChip,
  IonLabel,
  IonIcon,

} from '@ionic/react';
import { Avatar, ProgressBar } from '../../../components';
import '../styles.css';
const student = {
  name: 'Nome',
  image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_afro_kid_child-256.png',
  score: 20,
  mentors: [
    {
      id: 1,
      url: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_avatar_male_man-512.png',
      name: 'Dener',
      description: '',
    },
    {
      id: 2,
      url: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_native_boy_kid-512.png',
      name: 'Maria',
      description: '',
    },
  ],
  categories: [
    {
      id: 1,
      title: 'matemática',
      percentOne: 90,
      percentTwo: 52,
    },
    {
      id: 1,
      title: 'física',
      percentOne: 40,
      percentTwo: 12,
    },
  ]
}

const Notification: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='ionContent'>
        <IonGrid className='ionGrid'>
          <IonRow className='inronMentor'>

            <IonText className='textCardBold'>Quer ajudar</IonText>
            <IonText className='textCardBold'>Um amigo?</IonText>
            <IonCard className='ionCard'>
              <IonCardContent className='ionCardContent'>
                <IonText>
                  - Mentoria de matemática as 1h
                </IonText>
                <h3 className="title">Mentorias</h3>
                <IonList className='ionList'>
                  {student.mentors.map((mentor, i) => (
                    <IonItem key={i}>
                      <Avatar url={mentor.url} />
                      <IonLabel>{mentor.name}</IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonRow>
          <IonRow className='textCard'>
            <IonButton routerLink="/aluno/2" className='ionButton' color='danger'>Cancel</IonButton>
            <IonButton routerLink="/aluno/2" className='ionButton' color='success'>OK</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export const NotificationMentor = Notification;
