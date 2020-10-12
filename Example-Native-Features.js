import React from 'react';
import { Button, StyleSheet, Image, Switch, Text, TextInput, View } from 'react-native';
import Screen from './app/components/Screen'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import colors from './app/config/colors'
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AppText from './app/components/AppText';

export default function App() {

  const requestPermission = async () => {
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);
    if(!resultPermissions.granted)
      alert('You need to enable all the permissions needed for the app to work properly')
    /*  
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!result.granted)
      alert('You need to enable permission to access the library')
      */
  }

  React.useEffect(() => {
    requestPermission();

  }, [])

  const [imageUri, setImageUri] = React.useState('')


  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync(); 

      if(!result.cancelled)
        setImageUri(result.uri)

    } catch (error) {
      console.log('Error reading an image')
    }
  }
  return (
    <Screen>

      <Button title='Select Image' onPress={selectImage} />

      <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />

    </Screen>
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
