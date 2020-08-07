import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/mainScreen'
import luxury from './screens/Luxury';
import Details from './screens/Details';

const Stack = createStackNavigator();


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="mainScreen" component={MainScreen} />
        <Stack.Screen name="Luxury" component={luxury} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    )

  }
}