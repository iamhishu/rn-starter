import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
//** this will genrate from 0-255  */
function genrateRed(min, max) {
    const Red = Math.round(Math.random() * (max - min) + min);
    return Red;
}

function genrateGreen(min, max) {
    const Green = Math.round(Math.random() * (max - min) + min);
    return Green;
}

function genrateBlue(min, max) {
    const Blue = Math.round(Math.random() * (max - min) + min);
    return Blue;
}

// Function to generate random color 
function randomNumber(min, max) {
    const red = genrateRed(min, max);
    const green = genrateGreen(min, max);
    const blue = genrateBlue(min, max);
    return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + 1 + ')';
}



const ColorGentrator = () => {
    const [colors, setColor] = useState([]);

    const removeMe = (item) => {
        console.log(item, 'removeMe');
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
                            onPress={() => removeMe(item)}
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


    subheading: {
        fontSize: 20,
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