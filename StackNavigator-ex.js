import React from 'react';
import { Button, StyleSheet, Image, Switch, Text, TextInput, View } from 'react-native';
import Screen from './app/components/Screen'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer, useNavigation} from '@react-navigation/native'

import colors from './app/config/colors'
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AppText from './app/components/AppText';
import AppImageInput from './app/components/AppImageInput';
import AppListImageInputs from './app/components/AppListImageInputs';


const Link = () => {
  const navigation = useNavigation()
  return (
    <Button 
      title='Click'
      onPress={() => navigation.navigate('TweetDetails')}
    />
  )
  }

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title="View Tweet"
      onPress={() => navigation.navigate('TweetDetails', { id:1 })}
    />
    <Link />
  </Screen>
)

const TweetDetails = ({ route }) => (
  // useRoute hook returns the route object if I dont have the object.
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor:'dodgerblue'},
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen 
      name='Tweets' 
      component={Tweets} 
      options={{
        headerStyle: {backgroundColor:'tomato'},
        headerTintColor: 'white',
        
      }}
    />
    <Stack.Screen 
      name='TweetDetails' 
      component={TweetDetails} 
      options={({route}) => ({title: 'Tweet Details ' + route.params.id})}
    />
  </Stack.Navigator>
)

export default function App() {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
