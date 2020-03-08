import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
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

  IonSlides,
  IonSlide,

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
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerGroup: 1,
  watchSlidesProgress: true,
  spaceBetween: 0,
  virtualTranslate: true,
};

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

const getStatusByPercentage = (percentage : number) => {
  if (percentage > 80) return 'success';
  if (percentage > 50) return 'warning';

  return 'danger';
}

const redirectAny = (id: number) => console.log('redirect', id);

const Student: React.FC<RouteComponentProps> = ({ match, history }) => {

  setTimeout(() => {
    history.push('/notification/mentorado');
  }, 3000);

  return (
    <IonPage>
      <IonHeader slot="start">
        <IonToolbar>
          <IonImg src="assets/logo_estude_facil.png" className="badges" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="card hero">   
          <h3 className="title">Olá, {student.name}!</h3>
          <IonItem className="hero-item" lines="none">
            <Avatar url={student.image} />
            <div className="progress">
              <ProgressBar value={student.score / 100} color={getStatusByPercentage(student.score)} prefix="XP" />
            </div>
          </IonItem>
        </IonCard>

        <IonSlides>
          {student.categories.map((item, i) => (
            <IonSlide className="full" key={i}>
              <IonCard className="card card--full">
                <h3 className="title">Disciplinas</h3>
                <IonCardHeader className="card-header">
                  <IonCardTitle>{item.title}</IonCardTitle>

                  <IonItem className="card-progress">
                    <ProgressBar value={item.percentOne / 100} color={getStatusByPercentage(item.percentOne)} prefix={`${item.percentOne}%`} />
                    frequência
                  </IonItem>

                  <IonItem className="card-progress">
                    <ProgressBar value={item.percentTwo / 100} color={getStatusByPercentage(item.percentTwo)} prefix={`${item.percentTwo}%`} />
                    desempenho
                  </IonItem>
                </IonCardHeader>

                <IonCardContent>
                  <IonImg src="assets/badges.png" className="badges" />
                </IonCardContent>
              </IonCard>
            </IonSlide>
          ))}
        </IonSlides>

        <IonCard className="card mentor">   
          <h3 className="title">Mentorias</h3>
          <IonList>
            {student.mentors.map((mentor, i) => (
              <IonItem key={i}>
                <Avatar url={mentor.url} />
                <IonLabel>{mentor.name}</IonLabel>
              </IonItem>
            ))}                
          </IonList>
        </IonCard>       
      </IonContent>
    </IonPage>
  );
};

export default Student;
