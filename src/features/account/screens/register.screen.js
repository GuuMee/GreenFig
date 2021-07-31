import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors, TextInput } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  AnimationWrapperRegister,
} from "./account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        {/* <AnimationWrapperRegister>
          <LottieView
            source={require("../../../../assets/character3.json")}
            autoPlay
            loop
          />
        </AnimationWrapperRegister> */}
        <AuthInput
          left={<TextInput.Icon color="#8C8C8C" icon="email" size={30} />}
          theme={{ colors: { primary: "#0e9d7c" } }}
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
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer variant="bottom.large" />
        <AuthInput
          left={<TextInput.Icon color="#8C8C8C" icon="lock" size={30} />}
          theme={{ colors: { primary: "#0e9d7c" } }}
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        <Spacer variant="bottom.large" />
        <ErrorContainer>
          {error && <Text variant="error">{error}</Text>}
        </ErrorContainer>

        <Spacer variant="bottom.large" />
        {!isLoading ? (
          <AuthButton
            dark={true}
            icon="airballoon"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
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
