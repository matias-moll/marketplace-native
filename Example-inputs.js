import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput'
import {Picker} from '@react-native-community/picker';

import colors from './app/config/colors'
import AppPicker from './app/components/AppPicker';
export default function App() {
  const [firstName, setFirstName] = React.useState('')

  const [isNew, setIsNew] = React.useState(false)

  const [language, setLanguage] = React.useState('')

  const items =[
    {
      title:'C#',
      value:'csharp'
    },
    {
      title:'Pascal',
      value:'pascal'
    },
  ]

  return (
    <Screen>
      <AppTextInput placeholder='Username' icon='email'/>
      <Text>{firstName}</Text>
      <TextInput  
      maxLength={5}
      keyboardType='numeric'
      clearButtonMode='always'
      secureTextEntry
      onChangeText={text => setFirstName(text)}
      placeholder='First Name' 
      style={{ borderBottomColor: '#ccc', borderBottomWidth: 1}}/>
      <Switch 
        value={isNew}
        onValueChange = {newValue => setIsNew(newValue)}
      />
      <Picker
        selectedValue={language}
        style={{height: 50, width: '100%', backgroundColor:colors.light, borderRadius: 25,}}
        onValueChange={(itemValue, itemIndex) =>
          setLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <AppPicker 
        placeholder='Select your language'
        selectedItem={language}
        onSelectItem={setLanguage}
        listItems={items}
        icon='email'
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
