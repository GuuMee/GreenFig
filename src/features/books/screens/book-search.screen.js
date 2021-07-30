import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { BookInfoCard } from "../components/book-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ListView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const BookList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 2,
    justifyContent: "space-between",
  },
})``;

export const BookSearchScreen = ({ navigation }) => (
  <SafeArea>
    <SearchView>
      <Searchbar />
    </SearchView>
    <ListView>
      <BookList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
          { name: 15 },
          { name: 16 },
        ]}
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
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </ListView>
  </SafeArea>
);
