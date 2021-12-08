import React from "react";
import styled from "styled-components/native";
import { View, FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { BookShelfBook } from "../components/bookshelf.component";

const ListView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const BookList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 2,
    //justifyContent: "space-between",
  },
})``;

export const BookShelfScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ListView>
        <BookList
          data={null}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BookRead", {
                  book: item,
                })
              }
            >
              <>
                <BookShelfBook book={item} />
              </>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          numColumns={3}
        />
      </ListView>
    </SafeArea>
  );
};
