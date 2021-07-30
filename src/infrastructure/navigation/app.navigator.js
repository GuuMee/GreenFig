import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { BooksSearchNavigator } from "./books-search.navigator";
import { SafeArea } from "../../components/utility/safe-area.component";

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

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Bookshelf") {
          iconName = focused ? TAB_ICON.BookshelfFocus : TAB_ICON.Bookshelf;
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
    <Tab.Screen name="Search" component={BooksSearchNavigator} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
