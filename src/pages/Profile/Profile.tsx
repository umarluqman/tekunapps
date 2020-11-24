import React, { useState } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonIcon,
  IonCardContent,
  IonRow,
  IonCol,
  IonImg,
  IonText,
} from "@ionic/react";

import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

import "./Profile.css";
import Collapsible from "react-collapsible";

const namaNegeri = [
  { value: "Pulau Pinang", label: "Pulau Pinang" },
  { value: "Kuala Lumpur", label: "Kuala Lumpur" },
  { value: "Selangor", label: "Selangor" },
  { value: "Perak", label: "Perak" },
];
const statusPerniagaan = [
  { value: "Sedang Berniaga", label: "Sedang Berniaga" },
  { value: "Memulakan Perniagaan", label: "Memulakan Perniagaan" },
];
const namaBank = [
  { value: "CIMB BANK BERHAD", label: "CIMB BANK BERHAD" },
  { value: "PUBLIC BANK BHD", label: "PUBLIC BANK BHD" },
];
const cawanganNegeri = [
  { value: "Nibong Tebal", label: "Nibong Tebal" },
  { value: "Simpang Ampat", label: "Simpang Ampat" },
];
const kaedahPemasaran = [
  { value: "Online", label: "Online" },
  { value: "Offline", label: "Offline" },
  { value: "Online & Offline", label: "Online & Offline" },
];
const Profile: React.FC = (props) => {
  const [negeri, setNegeri] = useState("Kuala Lumpur");
  const [perniagaan, setPerniagaan] = useState("Sedang Berniaga");
  const [namabank, setNamabank] = useState("CIMB BANK BERHAD");
  const [cawangan, setCawangan] = useState("Nibong Tebal");
  const [pemasaran, setPemasaran] = useState("Online");
  const [akaunbank, setAkaunbank] = useState("12345");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNegeri(event.target.value);
    setPerniagaan(event.target.value);
    setNamabank(event.target.value);
    setCawangan(event.target.value);
    setPemasaran(event.target.value);
    setAkaunbank(event.target.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonAvatar slot="end" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/img/user.jpg" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Collapsible trigger="Maklumat Asas">
          <Grid className="grid">
            <form className="form" noValidate>
              <TextField
                variant="outlined"
                fullWidth
                id="standard-select-currency"
                select
                label="Negeri"
                value={negeri}
                onChange={handleChange}
                helperText="Menigikut Alamat SSM"
              >
                {namaNegeri.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <hr />
              <TextField
                variant="outlined"
                fullWidth
                id="standard-select-currency"
                select
                label="Status Perniagaan"
                value={perniagaan}
                onChange={handleChange}
              >
                {statusPerniagaan.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <hr />
              <TextField
                variant="outlined"
                fullWidth
                id="standard-select-currency"
                select
                label="Nama Bank"
                value={namabank}
                onChange={handleChange}
              >
                {namaBank.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <hr />
              <TextField
                variant="outlined"
                fullWidth
                id="standard-select-currency"
                select
                label="Cawangan ( Parlimen )"
                value={cawangan}
                onChange={handleChange}
              >
                {cawanganNegeri.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <hr />
              <TextField
                variant="outlined"
                fullWidth
                id="standard-select-currency"
                select
                label="Kaedah Pemasaran"
                value={pemasaran}
                onChange={handleChange}
              >
                {kaedahPemasaran.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <hr />
              <TextField
                variant="outlined"
                fullWidth
                id="standard-select-currency"
                // select
                label="No Akaun Bank"
                value={akaunbank}
                onChange={handleChange}
              ></TextField>
            </form>
          </Grid>
        </Collapsible>
        <Collapsible trigger="Maklumat Peribadi Pemohon">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
        <Collapsible trigger="Maklumat Perniagaan">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
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
      </IonContent>
    </IonPage>
  );
};

export default Profile;
