import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const HomeScreen = () => {
    const users = [
        { name: 'groot', age: 20 },
        { name: 'thor', age: 10 },
        { name: 'ironman', age: 40 },
        { name: 'wanda', age: 13 },
        { name: 'dr.strange', age: 24 },
        { name: 'captain-amrica', age: 25 },
        { name: 'spidy', age: 10 },
    ];
    return (
        <View style={styles.listWrapper}>
            <Text style={styles.text}>React-Native-list </Text>
            <FlatList
                showsVerticalScrollIndicator={false} /** vertical indicator */
                data={users}
                renderItem={({ item }) =>
                    <Text style={styles.subheading}
                    >{capitalizeFirstLetter(item.name) + " " + '-' + 'Age' + ' ' + item.age}</Text>}
                keyExtractor={(users, index) => index.toString()}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    listWrapper: {
        textAlign: 'center',
    },
    text: {
        fontSize: 30,
        marginVertical: 50,
        textAlign: 'center',

    },
    subheading: {
        fontSize: 20,
        marginVertical: 50,
        textAlign: 'center',
    },
});

export default HomeScreen;
