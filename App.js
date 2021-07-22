import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import AppLoading from "expo-app-loading";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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

import { SafeArea } from "./src/components/utility/safe-area.component";
import { BookSearchScreen } from "./src/features/books/screens/search-menu/book-search.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  BookshelfFocus: "md-library",
  Bookshelf: "md-library-outline",
  SearchFocus: "md-rocket",
  Search: "md-rocket-outline",
  ProfileFocus: "md-flower-sharp",
  Profile: "md-flower-outline",
};

const Profile = () => (
  <SafeArea>
    <Text>Profile</Text>
  </SafeArea>
);
const Bookshelf = () => (
  <SafeArea>
    <Text>Bookshelf</Text>
  </SafeArea>
);
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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Bookshelf") {
                  iconName = focused
                    ? TAB_ICON.BookshelfFocus
                    : TAB_ICON.Bookshelf;
                } else if (route.name === "Search") {
                  iconName = focused ? TAB_ICON.SearchFocus : TAB_ICON.Search;
                } else if (route.name === "Profile") {
                  iconName = focused ? TAB_ICON.ProfileFocus : TAB_ICON.Profile;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "green",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Bookshelf" component={Bookshelf} />
            <Tab.Screen name="Search" component={BookSearchScreen} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
