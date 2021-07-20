import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { BookSearchScreen } from "./src/features/books/screens/search-menu/book-search.screen";
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
        <BookSearchScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
