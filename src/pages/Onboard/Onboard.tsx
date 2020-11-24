import { IonButton } from "@ionic/react";
import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import "./Onboard.css";

const Onboard: React.FC = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="headboard">
        <motion.img
          src="./assets/img/logotekun.svg"
          alt="logo"
          animate={{ scale: [0, 1], opacity: [0.2, 2] }}
          transition={{ duration: 0.9 }}
        />
        <hr />
        <img src="./assets/img/people.svg" alt="people" />
      </div>
      <div className="ion-padding">
        <p>
          Anda dialu-alukan untuk menggunakan perkhidmatan ini jika anda
          mempunyai sebarang aduan.{" "}
        </p>
        <br />
        <p>
          Aduan anda akan membantu kami memperbaiki kualiti perkhidmatan kami
          yang sedia ada.
        </p>

        <IonButton className="onstart" onClick={() => history.push("./Login")}>
          Mula
        </IonButton>
        <div className="onboardbg">
          <img src="./assets/img/onboardbg.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Onboard;
