import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, } from 'react-native';

const ResultDetails = ({ data }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image_url }} />
            <Text style={styles.titleStyle}>{data.name}</Text>
            <Text style={styles.subHeading} >  ${data.rating + ` Stars` + `         ` + data.review_count + ` Review`}  </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 10,
        marginTop: 5,
    },
    subHeading: {
        marginLeft: 15,

    },
    titleStyle: {
        marginLeft: 15,
        fontWeight: 'bold',
    }

});

export default ResultDetails;
