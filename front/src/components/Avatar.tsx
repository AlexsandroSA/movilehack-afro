import React from 'react';
import { IonAvatar } from '@ionic/react';

interface ContainerProps {
  url: string;
}

const Avatar: React.FC<ContainerProps> = ({ url }) => {
  return (
    <IonAvatar>
      <img src={url} />
    </IonAvatar>
  );
};

export default Avatar;
