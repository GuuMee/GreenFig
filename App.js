import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.greenContainer}>
          <Text>Heeeeey</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeAreaStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  greenContainer: {
    padding: 16,
    backgroundColor: "green",
  },
});
