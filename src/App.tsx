import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonBadge,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Notification from "./pages/Notification/Notification";

import {
  homeOutline,
  notificationsOutline,
  personOutline,
} from "ionicons/icons";

import "./Apps.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Login" component={Login} exact={true} />
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/Dashboard" component={Dashboard} exact={true} />
          <Route path="/Notification" component={Notification} exact={true} />
          <Route path="/Profile" component={Profile} exact={true} />
          <Route path="/Register" component={Register} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Dashboard" href="/Dashboard">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Notification" href="/Notification">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Notifikasi</IonLabel>
            <IonBadge color="success">6</IonBadge>
          </IonTabButton>

          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
