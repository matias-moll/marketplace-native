import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import {Picker} from '@react-native-community/picker';
import Icon from './Icon';

export default function AppPicker({selectedItem, onSelectItem, placeholder, listItems, icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} /> }
      <Picker
        selectedValue={selectedItem}
        placeholder='Test'
        style={{height: 25, width: '100%', backgroundColor:colors.light, borderRadius: 25,}}
        onValueChange={(itemValue, itemIndex) =>
          onSelectItem(itemValue)
        }>
        <Picker.Item value='' label={placeholder} />
        {listItems.map((item, index) => {
          return <Picker.Item key={index} label={item.title.toString()} value={item.value}/>
        })}
      </Picker>
      <MaterialCommunityIcons 
          name='chevron-down'
          size={20}
          color={colors.medium}
          style={styles.chevronIcon}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon:{
    marginTop: 3,
    marginRight:10
  },
  chevronIcon:{
    position: "absolute",
    bottom: 17,
    right: 17,
  }
})
