import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';


export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>  
      
      <View style={{padding: 16, backgroundColor: "green"}}>
        <Text>
          Heeeeey
        </Text>
      </View>

      </SafeAreaView >
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
