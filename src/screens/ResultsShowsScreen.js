import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowsScreen = ({ navigation }) => {
    const [resturantDetail, setResultsurantDetail] = useState();
    const id = navigation.getParam('id');


    useEffect(() => {
        //   return () => {
        //     effect
        //   };
        getResturant(id)
    }, [])

    const getResturant = async (id) => {
        const responce = await yelp.get(`/${id}`);
        setResultsurantDetail(responce.data);
    }
    console.log(resturantDetail, 'resturantDetail');

    if (!resturantDetail) {
        return null
    }

    console.log(resturantDetail, 'sssssss');

    return (
        <View>
            <Text style={{ textAlign: 'center' }}>
                {resturantDetail.name}
            </Text>
            <FlatList
                data={resturantDetail.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.image}
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </View>
    )

}
const styles = StyleSheet.create({

    image: {
        height: 150,
        width: 200
    }

});
export default ResultsShowsScreen;



