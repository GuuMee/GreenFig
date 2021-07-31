import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors, TextInput } from "react-native-paper";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
  AnimationWrapperLogin,
} from "./account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        {/* <AnimationWrapperLogin>
          <LottieView
            source={require("../../../../assets/character1.json")}
            autoPlay
            loop
          />
        </AnimationWrapperLogin> */}
        <AuthInput
          left={<TextInput.Icon color="#8C8C8C" icon="email" size={30} />}
          theme={{ colors: { primary: "#0e9d7c" } }}
          selectionColor="#0e9d7c"
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer variant="bottom.large" />
        <AuthInput
          left={<TextInput.Icon color="#8C8C8C" icon="lock" size={30} />}
          theme={{ colors: { primary: "#0e9d7c" } }}
          selectionColor="#0e9d7c"
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer variant="bottom.large" />
        <ErrorContainer>
          {error && <Text variant="error">{error}</Text>}
        </ErrorContainer>

        <Spacer variant="bottom.large" />
        {!isLoading ? (
          <AuthButton
            dark={true}
            icon="airplane"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.red300} />
        )}
      </AccountContainer>
      <Spacer variant="bottom.large" />
      <AuthButton
        dark={true}
        icon="arrow-left-thick"
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Back
      </AuthButton>
    </AccountBackground>
  );
};
