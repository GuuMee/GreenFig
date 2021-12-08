import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { List, Button } from "react-native-paper";
import { BookInfoCard } from "../components/book-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const BookDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { book } = route.params;
  return (
    <SafeArea>
      <View>
        <BookInfoCard />
      </View>
      <Spacer variant="bottom.large" />
      <ScrollView>
        <Button
          icon="book"
          mode="contained"
          contentStyle={{ height: 40 }}
          onPress={() => console.log("Pressed")}
        >
          Buy
        </Button>
        <Spacer variant="bottom.large" />
        <Button
          disabled
          icon="read"
          mode="contained"
          contentStyle={{ height: 40 }}
          onPress={() => console.log("Pressed")}
        >
          Read
        </Button>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
