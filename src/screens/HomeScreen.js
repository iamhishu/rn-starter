import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
const HomeScreen = ({ navigation }) => {

  return (
    <View >
      <Text style={styles.text}>Getting started with react native!!</Text>
      <Button
        style={styles.btn}
        title='Go to component screen'
        onPress={() => navigation.navigate('Componentscreen')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Listscreen')} >
        <Text style={styles.text}>Go to list demo</Text>
      </TouchableOpacity>


      <Button
        style={styles.btn}
        title='Go to image screen'
        onPress={() => navigation.navigate('ImageScreeen')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 0,
    fontSize: 20,
    justifyContent: 'center',

  },
  btn: {
    marginVertical: 20,
    paddingTop: 20,
  },

});

export default HomeScreen;
