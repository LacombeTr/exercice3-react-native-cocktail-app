import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { RecipeScreen } from "../screens/RecipeScreen";
import { HomeStackParamList } from "../App";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStack() {
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
                name='HomeList' 
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name='Recipe' 
                component={RecipeScreen}
                options={{ title: "Détail du Cocktail" }}
            />
        </Stack.Navigator>
    );
}
