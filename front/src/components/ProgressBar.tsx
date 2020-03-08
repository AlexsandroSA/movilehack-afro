import React from 'react';
import { IonProgressBar } from '@ionic/react';

interface ContainerProps {
  prefix: string,
  color: string,
  value: number,
}

const ProgressBar: React.FC<ContainerProps> = ({ prefix, color, value }) => {
  return (
    <>
    	<IonProgressBar color={color} value={value}></IonProgressBar> {prefix}
    </>
  );
};

export default ProgressBar;
