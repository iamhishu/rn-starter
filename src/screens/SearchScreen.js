import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultList from "../components/ResultsList";
import axios from "axios";

const SearchScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [errMsg, setErrmsg] = useState(null);
    const [isLoading, setIsLoding] = useState(false);

    const searchApi = () => {
        setIsLoding(true);
        yelp
            .get("/search", {
                params: {
                    limit: 50,
                    term: searchText,
                    location: "san jose",
                },
            })
            .then(function (response) {
                //console.log(JSON.stringify(response.data.businesses), 'length');
                setRestaurants(response.data.businesses);
                setIsLoding(false);
            })
            .catch(function (error) {
                console.error(error);
                setIsLoding(false);
                setErrmsg(error);
            });
    };

    const filterResultsByPrice = (price) => {
        return restaurants.filter((resturant) => resturant.price === price);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <SearchBar
                searchTerm={searchText}
                onChangeSearchTerm={(newterm) => setSearchText(newterm)}
                disableAutoCapitalize={true}
                onTermSubmit={() => searchApi()}
                loading={isLoading}
            />
            <ScrollView>
                <ResultList
                    title={"Cost effective"}
                    results={filterResultsByPrice("$")}

                />
                <ResultList
                    title={"Bit pricer"}
                    results={filterResultsByPrice("$$")}

                />
                <ResultList
                    title={"Big spender"}
                    results={filterResultsByPrice("$$$")}

                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        backgroundColor: "#ffffff",
    },
    text: {
        fontSize: 30,
    },
    wrapper: {
        flex: 1,
    },
    loader: {
        alignSelf: "center",
        justifyContent: "center",
    },
});

export default SearchScreen;
