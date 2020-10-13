import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import Routes from '../navigation/Routes'

const Stack = createStackNavigator()

export default AuthNavigator = () =>  (
  <Stack.Navigator>
    <Stack.Screen name={Routes.WELCOME} component={WelcomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name={Routes.LOGIN} component={LoginScreen}/>
    <Stack.Screen name={Routes.REGISTER} component={RegisterScreen}/>
  </Stack.Navigator>
)

