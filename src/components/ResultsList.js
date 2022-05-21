import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import ResultDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';
const ResultList = ({ results, navigation, title }) => {

    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}> {title} </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (<TouchableOpacity
                        onPress={() => navigation.navigate('ResultsShowsScreen', { id: item.id })}>
                        <ResultDetails
                            data={item}
                        />
                    </TouchableOpacity>)
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        // fontFamily: Coda_400Regular,
    },
    wrapper: {
        backgroundColor: '#ffffff',
        //height: 'auto',
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        padding: 0,
        flexDirection: 'column',
    },


});

export default withNavigation(ResultList);
