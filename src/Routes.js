import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Services from "./pages/Services"
import ShoppingCart from "./pages/ShoppingCart"

import { colors } from "./styles"

const Tab = createBottomTabNavigator()

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.roxo,
                inactiveTintColor: colors.claro,
                activeBackgroundColor: colors.roxo,
                inactiveBackgroundColor: colors.laranja,
                style: {
                    height: 70,
                },
                labelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: colors.laranja
                },
                keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen name='Serviços' component={Services} />
            <Tab.Screen name='Carrinho' component={ShoppingCart} />
        </Tab.Navigator>
    </NavigationContainer>
}