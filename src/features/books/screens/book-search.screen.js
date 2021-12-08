import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { BooksContext } from "../../../services/books/books.context";
import { BookInfoCard } from "../components/book-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
`;

const BookList = styled(FlatList).attrs({
  contentContainerStyle: {
    alignItems: "center",
    padding: 0.5,
  },
})``;

export const BookSearchScreen = ({ navigation }) => {
  const booksContext = useContext(BooksContext);
  console.log(booksContext);

  return (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <ListView>
        <BookList
          data={booksContext.books}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BookDetail", {
                  book: item,
                })
              }
            >
              <>
                <BookInfoCard book={item} />
              </>
            </TouchableOpacity>
          )}
          //keyExtractor={(item) => item.name}
          numColumns={2}
        />
      </ListView>
    </SafeArea>
  );
};
