import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';

//** this will genrate number from 0-255  */
function genrateColor(min, max) {
    const Red = Math.round(Math.random() * (max - min) + min);
    return Red;
}
// Function to generate random color 
function randomNumber(min, max) {
    const r = genrateColor(min, max);
    const g = genrateColor(min, max);
    const b = genrateColor(min, max);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + 1 + ')';
}

const ColorGentrator = () => {
    const [colors, setColor] = useState([]);
    const deleteListHandler = (item) => {
        let updated_colors = [...colors];
        const index = colors.indexOf(item);
        if (index > -1) {
            updated_colors.splice(index, 1); // 2nd parameter means remove one item only
        }
        setColor(updated_colors);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Color Genrator</Text>
            <Button
                style={styles.btn}
                title="Add Color"
                onPress={() => setColor([...colors, randomNumber(0, 255)])}
                color={colors.slice(-1).pop()}
            />
            <View style={styles.color_container}>
                <FlatList
                    data={colors}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            style={{ backgroundColor: item, height: 100, width: 100, flex: 0, alignItems: 'center', marginBottom: 10, borderRadius: 50 }}
                            onPress={() => deleteListHandler(item)}
                            key={item.index} >
                        </TouchableOpacity>
                    }}
                    keyExtractor={item => item}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        marginTop: 20,
        fontSize: 30,
        textAlign: 'center',

    },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },

    color_container: {
        flex: 1,
        marginTop: 20,
        maxHeight: 500,
        alignItems: 'center',
    },

    color: {
        width: 100,
        height: 100,
    },


});

export default ColorGentrator;