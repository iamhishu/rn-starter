import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetails from "../Components/ImageDetails";
const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="image mountain" imgsrc={require('../../../assets/images/mountain.jpg')} />
            <ImageDetails title="image beach" imgsrc={require('../../../assets/images/beach.jpg')} />
            <ImageDetails title="image forest" imgsrc={require('../../../assets/images/forest.jpg')} />
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

export default ImageScreen;
