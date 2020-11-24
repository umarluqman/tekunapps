import {
  IonContent,
  IonPage,
  IonSlides,
  IonSlide,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonRow,
  IonCol,
  IonImg,
  IonText,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";

import React from "react";
import "./Dashboard.css";

const slideOpts = {
  initialSlide: 1,
  speed: 100,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
};

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonAvatar slot="end" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/img/user.jpg" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Slide */}
        <IonSlides pager={true} options={slideOpts} className="swiper">
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" />
          </IonSlide>
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" />
          </IonSlide>
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" />
          </IonSlide>
        </IonSlides>
        {/* End Slide */}
        <IonCardContent>
          <IonRow>
            <IonCol className="iconMenu">
              <IonImg src="/assets/icon/doc.svg" alt="Document" />
              <IonText>Status Pemohon</IonText>
            </IonCol>
            <IonCol className="iconMenu">
              <IonImg src="/assets/icon/callcenter.svg" alt="Document" />
              <IonText>Bantuan</IonText>
            </IonCol>
            <IonCol className="iconMenu">
              <IonImg src="/assets/icon/map.svg" alt="Document" />
              <IonText>Cawangan</IonText>
            </IonCol>
          </IonRow>
        </IonCardContent>
        <IonCardContent>
          <IonRow className="notifikasi">
            <IonCol>
              <IonIcon color="success" icon={notificationsOutline} />
              <IonText>PENGESAHAN PENERIMA PEMOHONAN</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="notifikasi">
            <IonCol>
              <IonIcon color="success" icon={notificationsOutline} />
              <IonText>PERMOHONAN TELAH DIHANTAR</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="notifikasi">
            <IonCol>
              <IonIcon color="success" icon={notificationsOutline} />
              <IonText>PENDAFTARAN PENGGUNA BERJAYA</IonText>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
