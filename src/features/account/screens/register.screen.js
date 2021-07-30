import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "./account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Green Fig</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer variant="bottom.large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer variant="bottom.large" />
        <AuthInput
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
        <AuthButton
          dark={true}
          icon="airballoon"
          mode="contained"
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          Register
        </AuthButton>
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
