import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { StyledButton } from '../styled-button';
import styles from './styles';

export const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={require('../../assets/images/ModelX.jpeg')} />
      <View style={styles.titles}>
        <Text style={styles.title}>Tesla S</Text>
        <Text style={styles.subtitle}>Stasrting at $69,420</Text>
        <StyledButton />
      </View>
    </View>
  );
};
