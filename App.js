import React from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import Screen from './app/components/Screen'

import colors from './app/config/colors'
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen'
export default function App() {

  return (
    <ListingEditScreen>

    </ListingEditScreen>
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
