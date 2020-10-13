import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import Routes from '../navigation/Routes'

const Stack = createStackNavigator()

export default FeedNavigator = () =>  (
  <Stack.Navigator>
    <Stack.Screen name={Routes.LISTINGS} component={ListingsScreen} options={{headerShown:false}}/>
    <Stack.Screen name={Routes.LISTING_DETAILS} component={ListingDetailsScreen}/>
  </Stack.Navigator>
)

