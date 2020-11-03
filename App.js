import React from 'react';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-community/async-storage';
import { AppLoading } from 'expo';


import { StyleSheet } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

export default function App() {
  const netInfo = useNetInfo()
  const [isReady, setIsReady] = React.useState();

  const [user, setUser] = React.useState();

  React.useEffect(() => {
    restoreUser();
  }, []);
  
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if(user) setUser(user);
  }

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

  if (!isReady) return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />

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
