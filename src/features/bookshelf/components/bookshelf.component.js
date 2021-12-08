import React, { useState } from "react";
import { Text } from "react-native-paper";
import { BookSurface } from "./bookshelf.styles";

export const BookShelfBook = (book = {}) => {
  const [ownedBook, setOwnedBook] = useState(null);

  return (
    <BookSurface>
      <Text>MyBook</Text>
    </BookSurface>
  );
};
