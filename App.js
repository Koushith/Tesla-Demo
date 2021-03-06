import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { CarItem } from './components/carItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
      {/* status bar- top notification icons */}
      <StatusBar style='light' />
    </View>
  );
}
// 28

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
