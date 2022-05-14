import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const name = 'hitesh';
  return (
    <View >
      <Text style={styles.text}>Getting started with react native!</Text>
      <Text style={styles.subheading}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  subheading: {
    fontSize: 20,
  },
});

export default HomeScreen;
