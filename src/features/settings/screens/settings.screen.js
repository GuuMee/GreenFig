import React, { useContext } from "react";
import { List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="green" icon="baseball" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
