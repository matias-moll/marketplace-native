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
import AppImageInput from './app/components/AppImageInput';
import AppListImageInputs from './app/components/AppListImageInputs';

export default function App() {

  const [imageUris, setImageUris] = React.useState([])

  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }
  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }
  return (
    <Screen>

      <AppListImageInputs 
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />

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
