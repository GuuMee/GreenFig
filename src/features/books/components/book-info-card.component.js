import React from "react";
import { Text } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Button,
  Modal,
  Portal,
  Provider,
} from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

import star from "../../../../assets/star";

const BookCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: ${(props) => props.theme.sizes[4]};
`;

const BookCardCover = styled(Card.Cover)`
  justify-content: center;
  width: 100%;
  height: ${(props) => props.theme.sizes[4]};
  padding: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const TitleText = styled(Title)`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const StyledParagraph = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[1]};
  flex-wrap: wrap;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[0]};
`;

const ModalStyled = styled(Modal)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

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
    isClosedTemporarily,
  } = book;

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Provider>
      <BookCard elevation={5}>
        <BookCardCover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <TitleText>{name}</TitleText>
        </Card.Content>
        <Info>
          <StyledParagraph> {price} </StyledParagraph>
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
