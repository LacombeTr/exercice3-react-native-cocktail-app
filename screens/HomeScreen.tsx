import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { UseCocktails } from "../hooks/UseCocktails";
import { CocktailItem } from "../components/CocktailItem";
import { BackgroundImage } from "../components/BackgroundImage";

export const RenderFooter = ({ loadingMore }: { loadingMore: boolean }) => {
    if (!loadingMore) return null;
    return (
        <View style={styles.footer}>
            <ActivityIndicator size='small' color='#0000ff' />
        </View>
    );
};

export const HomeScreen = () => {
    const { cocktailList, loading, loadMore, loadingMore, hasMore } =
        UseCocktails();

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        );
    }

    return (
        <BackgroundImage>
            <View style={styles.container}>
                <Text style={styles.title}>Cocktail App</Text>
                <FlatList
                    data={cocktailList}
                    renderItem={(item) => <CocktailItem item={item.item} />}
                    keyExtractor={(item) => item.idDrink}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={<RenderFooter loadingMore={loadingMore} />}
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
    listContent: {
        paddingHorizontal: 16,
    },
    footer: {
        padding: 20,
        alignItems: "center",
    },
});
