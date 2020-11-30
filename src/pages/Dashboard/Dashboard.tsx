import React from "react";
import { useHistory } from "react-router";
import { getUser, removeUserSession } from "../../Utils/Common";
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
  IonGrid,
} from "@ionic/react";

import "./Dashboard.css";
import { notificationsOutline } from "ionicons/icons";

const slideOpts = {
  initialSlide: 1,
  speed: 100,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
};

const Dashboard: React.FC = (props) => {
  const user = getUser();
  const history = useHistory();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonAvatar slot="end" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/img/user.jpg" alt="" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCardContent>
            SELAMAT DATANG! {user.name}!<br />
        </IonCardContent>
        <div>
          {/* No Kad Pengenalan : {user.no_kp_baru}
          <br />
          Email : {user.email}
          <br />
          No Tel : {user.no_tel}
          <input type="button" onClick={handleLogout} value="Logout" /> */}
        </div>
        {/* Slide */}
        <IonSlides pager={true} options={slideOpts} className="swiper">
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" alt="" />
          </IonSlide>
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" alt="" />
          </IonSlide>
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" alt="" />
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
        {/* <IonCardContent>
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
        </IonCardContent> */}
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
