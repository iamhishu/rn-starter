
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetails = (props) => {
    console.log(props);
    return (
        <View >
            <Text style={styles.text}>{props.title}</Text>
            <Image
                source={props.imgsrc}
            />
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

export default ImageDetails;
