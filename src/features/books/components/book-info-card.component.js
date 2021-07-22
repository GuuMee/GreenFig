import React from "react";
import { TypographyText } from "../../../components/typography/text.component";
import { Card, Button, Portal, Provider } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import {
  BookCard,
  BookCardCover,
  Rating,
  Info,
  StyledParagraph,
  ModalStyled,
} from "./book-info-card.styles";

export const BookInfoCard = ({ book = {} }) => {
  const {
    name = "What is a BODY?",
    discription = "Learn more about a body...",
    icon,
    photos = [
      "https://gogreenfig.com/wp-content/uploads/2020/08/What-Is-A-Body-Cover-01.jpg",
    ],
    author = "GreenFig Team",
    price = "$3.23",
    language = "English",
    age = "4-9 years",
    isBought = false,
    isPreview = true,
    rating = 4,
    isNotAvailable,
  } = book;

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Provider>
      <BookCard elevation={5}>
        <BookCardCover
          key={name}
          source={{ uri: photos[0] }}
          resizeMode="contain"
        />
        <Card.Content>
          <TypographyText variant="title">{name}</TypographyText>
        </Card.Content>
        <Info>
          <TypographyText variant="label"> {price} </TypographyText>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          {/* <StyledParagraph> {description} </StyledParagraph> */}
        </Info>
        <Button
          icon="book"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Buy
        </Button>
        <Button mode="text" onPress={showModal}>
          Preview
        </Button>
      </BookCard>
      <Portal>
        <ModalStyled visible={visible} onDismiss={hideModal}>
          <StyledParagraph>{discription}</StyledParagraph>
        </ModalStyled>
      </Portal>
    </Provider>
  );
};
