import React from 'react';

// screens
import Login from './screens/login.js'
import Signup from './screens/signup.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

export default () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}