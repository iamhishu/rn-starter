import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    return (
        <View >
            <Text style={styles.text}>Component screen</Text>
            <Text style={styles.subheading}>hey my name is hitesh you are developing native app with me.</Text>
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

export default ComponentScreen;
