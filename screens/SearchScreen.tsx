import { View, Text, StyleSheet, TextInput } from "react-native";
import { BackgroundImage } from "../components/BackgroundImage";

export const SearchScreen = () => {
    return (
        <BackgroundImage>
            <View style={styles.container}>
                <Text style={styles.title}>Recherche</Text>

                <View style={styles.searchZone}>
                    <View style={styles.searchRow}>
                        <Text style={styles.searchLabel}>Nom:</Text>
                        <TextInput style={styles.textInput} />
                    </View>
                    <View style={styles.searchRow}>
                        <Text style={styles.searchLabel}>Catégorie:</Text>
                    </View>
                    <View style={styles.searchRow}>
                        <Text style={styles.searchLabel}>Ingrédient:</Text>
                        <TextInput style={styles.textInput} />
                    </View>
                </View>
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
});
