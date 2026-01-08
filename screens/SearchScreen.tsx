import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { BackgroundImage } from "../components/BackgroundImage";
import { UseCocktails } from "../hooks/UseCocktails";
import { useState } from "react";
import { UseFilter } from "../hooks/UseFilter";
import { CocktailItem } from "../components/CocktailItem";
import { RenderFooter } from "./HomeScreen";

export const SearchScreen = () => {
    const [searchedName, setSearchedName] = useState<string>("");

    const { allCocktails, loading, loadMore, loadingMore, hasMore } =
        UseCocktails();

    const { filteredCocktails } = UseFilter({
        cocktailList: allCocktails,
        filters: {
            strDrink: searchedName,
        },
    });

    return (
        <BackgroundImage>
            <View style={styles.container}>
                <Text style={styles.title}>Recherche</Text>

                <View style={styles.searchZone}>
                    <View style={styles.searchRow}>
                        <Text style={styles.searchLabel}>Nom:</Text>
                        <TextInput
                            style={styles.textInput}
                            value={searchedName}
                            onChangeText={setSearchedName}
                        />
                    </View>
                </View>

                <FlatList
                    data={filteredCocktails}
                    renderItem={(item) => <CocktailItem item={item.item} />}
                    keyExtractor={(item) => item.idDrink}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={<></>}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </BackgroundImage>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 96,
        paddingBottom: 32,
        paddingHorizontal: 32,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "DechoraZone",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 48,
        marginBottom: 10,
        textTransform: "uppercase",
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        paddingBottom: 10,
    },

    searchZone: {
        marginTop: 16,
    },
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    searchLabel: {
        fontFamily: "Moonshine",
        color: "#fff",
        fontSize: 18,
    },

    textInput: {
        flex: 1,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        marginLeft: 10,
        paddingHorizontal: 8,
        color: "#fff",
    },

    listContent: {
        paddingHorizontal: 16,
    },
});
