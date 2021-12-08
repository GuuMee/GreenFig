import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { BookShelfScreen } from "../../features/bookshelf/screen/bookshelf.screen";
import { BookReaderScreen } from "../../features/bookshelf/screen/book-reader.screen";

const BookShelfStack = createStackNavigator();

export const BookShelfNavigator = () => {
  return (
    <BookShelfStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <BookShelfStack.Screen name="BookShelf" component={BookShelfScreen} />
      <BookShelfStack.Screen name="BookRead" component={BookReaderScreen} />
    </BookShelfStack.Navigator>
  );
};
