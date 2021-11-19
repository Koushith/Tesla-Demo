import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export const StyledButton = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn('Hey');
        }}
      >
        <Text style={styles.text}>Custom Orders</Text>
      </Pressable>
    </View>
  );
};

/**
 * Pressable is a component- acts like onClick
 */
