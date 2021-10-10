import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShowScreen from '../screens/ShowScreen'
import WebScreen from '../screens/WebScreen'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MoviesContainer from '../containers/MoviesContainer'
import MoviesSearchContainer from '../containers/MoviesSearchContainer'
import TVShowsContainer from '../containers/TVShowsContainer'
import { Center, Container } from 'native-base'


const Stack =  createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()

function Menu() {
    return (

        <Tab.Navigator
        tabBarOptions={{
        activeTintColor: '#444444',
        inactiveTintColor: '#B0B0B0',
        style: {
          backgroundColor: '#FFFFFF'
        },
        labelStyle: {
          fontSize: 12,
          lineHeight: 13,
          textAlign: 'center'
        }
      }}>
            <Tab.Screen name="Movie" component={MoviesContainer}
            options={{ tabBarLabel: 'Movie' }} />
            <Tab.Screen name="Search" component={MoviesSearchContainer}
            options={{ tabBarLabel: 'Search' }} />
            <Tab.Screen name="TV Shows" component={TVShowsContainer}
            options={{ tabBarLabel: 'TV Shows' }} />
        </Tab.Navigator>
    )
}

const AppStack = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen
                name="Menu"
                component={Menu}
            />
            <Stack.Screen
                name='Show' 
                component={ShowScreen}
                options={({ route }) => ({
                    title: route.params.label
                })}
            />
            <Stack.Screen
                name='Web'
                component={WebScreen}
            />

        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppStack