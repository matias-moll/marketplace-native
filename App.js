import React from 'react';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-community/async-storage';


import { Button, StyleSheet, Image, Switch, Text, TextInput, View } from 'react-native';
import Screen from './app/components/Screen'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer, useNavigation} from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';

export default function App() {
  const netInfo = useNetInfo()

  const [user, setUser] = React.useState();

  const demo = async () => {
    try{
      await AsyncStorage.setItem('person', JSON.stringify({id:1}))
      const value = await AsyncStorage.getItem('person')
      const person = JSON.parse(value)
    } catch (error){
      console.log(error)
    }

  }

  demo()

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={NavigationTheme}>
        { user ? <AppNavigator/> : <AuthNavigator /> }
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
});
