import styled from "styled-components";
import { ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { TypographyText } from "../../../components/typography/text.component";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/image12-2.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #dfd;
`;

export const AccountCover = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(TypographyText)`
  font-size: 40px;
  font-family: ${(props) => props.theme.fonts.title};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.secondary};
`;

export const ErrorContainer = styled.View`
  max-width: 350px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 150%;
  position: absolute;
  align-self: center;
  bottom: 153%;
`;

export const AnimationWrapperLogin = styled.View`
  width: 100%;
  height: 70%;
  position: absolute;
  bottom: 105%;
  align-self: center;
`;
export const AnimationWrapperRegister = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  align-self: center;
  bottom: 93%;
`;
