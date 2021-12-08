import styled from "styled-components/native";
import { Card, Title, Paragraph, Modal } from "react-native-paper";

export const BookCard = styled(Card)`
  max-width: 200px;
  min-width: 140px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[1]};
`;

export const BookCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const TitleText = styled(Title)`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const StyledParagraph = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[1]};
  flex-wrap: wrap;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[0]};
`;
