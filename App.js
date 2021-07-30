import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import AppLoading from "expo-app-loading";

import {
  useFonts as useIndieFlower,
  IndieFlower_400Regular,
} from "@expo-google-fonts/indie-flower";
import {
  useFonts as usePangolin,
  Pangolin_400Regular,
} from "@expo-google-fonts/pangolin";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAA7NI7WFMjwEtPWfkXPP8ReJmgaahCnSw",
  authDomain: "greenfig-b15a5.firebaseapp.com",
  projectId: "greenfig-b15a5",
  storageBucket: "greenfig-b15a5.appspot.com",
  messagingSenderId: "1021201968274",
  appId: "1:1021201968274:web:a4e441de620faff1350a4b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  let [indieFlowerLoaded] = useIndieFlower({
    IndieFlower_400Regular,
  });

  let [PangolinLoaded] = usePangolin({
    Pangolin_400Regular,
  });

  let [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!indieFlowerLoaded || !latoLoaded || !OswaldLoaded || !PangolinLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
