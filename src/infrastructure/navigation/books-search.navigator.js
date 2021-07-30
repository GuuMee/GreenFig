import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { BookSearchScreen } from "../../features/books/screens/book-search.screen";
import { BookDetailScreen } from "../../features/books/screens/book-detail.screen";

const BookStack = createStackNavigator();

export const BooksSearchNavigator = () => {
  return (
    <BookStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <BookStack.Screen name="Books" component={BookSearchScreen} />
      <BookStack.Screen name="BookDetail" component={BookDetailScreen} />
    </BookStack.Navigator>
  );
};
