import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/SearchScreen";
import { RecipeScreen } from "../screens/RecipeScreen";
import { SearchStackParamList } from "../App";

const Stack = createNativeStackNavigator<SearchStackParamList>();

export function SearchStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: { backgroundColor: "transparent" },
                headerStyle: { backgroundColor: "transparent" },
                headerTransparent: true,
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name='SearchList'
                component={SearchScreen}
                options={{ title: "Rechercher" }}
            />
            <Stack.Screen
                name='Recipe'
                component={RecipeScreen}
                options={{ title: "Détail du Cocktail" }}
            />
        </Stack.Navigator>
    );
}
