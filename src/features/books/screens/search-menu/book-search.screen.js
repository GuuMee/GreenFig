import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, ListViewComponent } from "react-native";
import { BookInfoCard } from "../../components/book-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const BookSearchScreen = () => (
  <>
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <ListView>
        <BookInfoCard />
      </ListView>
    </SafeArea>
  </>
);
