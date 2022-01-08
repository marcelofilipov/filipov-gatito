import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Services from "./pages/Services"
import ShoppingCart from "./pages/ShoppingCart"

const Tab = createBottomTabNavigator()

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Serviços' component={Services} />
            <Tab.Screen name='Carrinho' component={ShoppingCart} />
        </Tab.Navigator>
    </NavigationContainer>
}