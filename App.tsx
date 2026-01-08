import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./navigation/RootNavigator";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";

export type RootStackParamList = {
    Recipe: { recipeId: string };
};

export type HomeStackParamList = {
    HomeList: undefined;
    Recipe: { recipeId: string };
};

export type SearchStackParamList = {
    SearchList: undefined;
    Recipe: { recipeId: string };
};

export default function App() {
    const [loaded, error] = useFonts({
        Moonshine: require("./assets/fonts/Moonshine.otf"),
        "Moonshine-Bold": require("./assets/fonts/Moonshine-Bold.otf"),
        "DechoraZone": require("./assets/fonts/DechoraZone.ttf"),
    });

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        paddingTop: 64,
        paddingBottom: 32,
    },
});
