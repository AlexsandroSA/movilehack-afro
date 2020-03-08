import React from 'react';
import { 
  IonGrid, 
  IonRow, 
  IonCol,
  IonContent, 
  IonHeader, 
  IonPage, 

  IonImg,
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
import './Student.css'; 

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const student = {
  name: 'Nome',
  image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_afro_kid_child-256.png',
  score: 20,
  mentors: [
    {
      id: 1,
      url: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_avatar_male_man-512.png',
      name: 'Miguel',
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
  ]
}

const getStatusByPercentage = (percentage : number) => {
  if (percentage > 80) return 'success';
  if (percentage > 50) return 'warning';

  return 'danger';
}

const Teacher: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonGrid>
          <IonRow>   
            <IonCard className="hero">   
              <IonTitle>Olá, {student.name}!</IonTitle>
              <IonItem className="hero-item" lines="none">
                <Avatar url={student.image} />
                <div className="progress">
                  <ProgressBar value={student.score / 100} color={getStatusByPercentage(student.score)} prefix="XP" />
                </div>
              </IonItem>
            </IonCard>
          </IonRow>

          <IonRow>
            {student.categories.map((item, i) => (
                <IonCol key={i}>
                  <IonCard className="card">
                    <IonTitle className="title">Disciplinas</IonTitle>
                    <IonCardHeader className="card-header">
                      <IonCardTitle>{item.title}</IonCardTitle>

                      <IonItem className="card-progress">
                        <ProgressBar value={item.percentOne / 100} color={getStatusByPercentage(item.percentOne)} prefix={`${item.percentOne}%`} />
                      </IonItem>

                      <IonItem className="card-progress">
                        <ProgressBar value={item.percentTwo / 100} color={getStatusByPercentage(item.percentTwo)} prefix={`${item.percentTwo}%`} />
                      </IonItem>
                    </IonCardHeader>

                    <IonCardContent>
                      <IonImg src="assets/badges.png" className="badges" />
                    </IonCardContent>
                  </IonCard>
                </IonCol>
            ))}
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard className="mentor">   
                <IonTitle className="title">Mentorias</IonTitle>

                <IonList>
                  {student.mentors.map((mentor, i) => (
                    <IonItem>
                      <Avatar url={mentor.url} />
                      <IonLabel>{mentor.name}</IonLabel>
                    </IonItem>
                  ))}                
                </IonList>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        

        
        <IonTitle>Turma</IonTitle>

      
      </IonContent>
    </IonPage>
  );
};

export default Teacher;
