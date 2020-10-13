import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'
import Routes from '../navigation/Routes'


const Tab = createBottomTabNavigator()

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name={Routes.FEED}
      component={FeedNavigator} 
      options={{
        tabBarIcon: ({color, size}) =>
        <MaterialCommunityIcons name='home' color={color} size={size} />
      }}
    />
    <Tab.Screen 
      name={Routes.LISTING_EDIT} 
      component={ListingEditScreen} 
      options={({navigation}) => ({
        tabBarButton: () => 
        <NewListingButton onPress={() => navigation.navigate(Routes.LISTING_EDIT)} />,
      })}
    />
    <Tab.Screen 
      name={Routes.ACCOUNT}
      component={AccountNavigator} 
      options={{
        tabBarIcon: ({color, size}) =>
        <MaterialCommunityIcons name='account' color={color} size={size} />
      }}
    />
  </Tab.Navigator>
)