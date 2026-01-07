import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../App";

type RecipeScreenProps = NativeStackScreenProps<RootStackParamList, "Recipe">;

export const RecipeScreen = ({ route }: RecipeScreenProps) => {
    const { recipeId } = route.params;
    return (
        <View>
            <Text>Recipe screen: {recipeId}</Text>
        </View>
    );
};
