import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'
import Routes from '../navigation/Routes'

const Stack = createStackNavigator()

export default AccountNavigator = () =>  (
  <Stack.Navigator>
    <Stack.Screen name={Routes.ACCOUNT} component={AccountScreen}/>
    <Stack.Screen name={Routes.MESSAGES} component={MessagesScreen}/>
  </Stack.Navigator>
)

