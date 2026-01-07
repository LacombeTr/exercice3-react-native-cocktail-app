import { useNavigation } from "@react-navigation/native";
import { View, Button, Text } from "react-native";

export const HomeScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <>
            <View><Text>Home screen</Text></View>
            <Button
                title="Go to Search"
                onPress={() => navigation.navigate("Search")}
            />
            <Button
                title="Go to Recipe"
                onPress={() => navigation.navigate("Recipe", { recipeId: "123" })}
            />
        </>
    );
};
