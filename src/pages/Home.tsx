import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Onboard from './Onboard/Onboard';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Onboard />
      </IonContent>
    </IonPage>
  );
};

export default Home;
