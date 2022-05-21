import React, { useState } from "react";
import { TextInput, StyleSheet, View, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({
    searchTerm,
    onChangeSearchTerm,
    disableAutoCapitalize,
    onTermSubmit,
    loading,
}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                disableAutoCapitalize
                autoCapitalize={disableAutoCapitalize ? "none" : false}
                autoCorrect={false}
                style={styles.textInput}
                placeholder="Search"
                onChangeText={onChangeSearchTerm}
                value={searchTerm}
                onEndEditing={onTermSubmit}
            />
            {loading && (
                <ActivityIndicator size="large" color="#00ff00" style={styles.loader} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    background: {
        backgroundColor: "#E5E5E5",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        padding: 5,
        flexDirection: "row",
        marginBottom: 10,
    },
    textInput: {
        fontSize: 18,

        height: 40,
        color: "#212121",
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
    loader: {
        position: "absolute",
        right: 15,
        bottom: 5,
        alignSelf: "flex-end",
    },
});

export default SearchBar;
