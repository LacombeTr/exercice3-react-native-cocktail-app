import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./HomeStack";
import { SearchStack } from "./SearchStack";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export function RootNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    if (route.name === 'HomeTab') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'SearchTab') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else {
                        iconName = 'help-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderTopColor: 'transparent',
                },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name='HomeTab'
                component={HomeStack}
                options={{ title: "Accueil" }}
            />
            <Tab.Screen
                name='SearchTab'
                component={SearchStack}
                options={{ title: "Recherche" }}
            />
        </Tab.Navigator>
    );
}
