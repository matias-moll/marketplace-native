import React from 'react'
import { StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import {Picker} from '@react-native-community/picker';

export default function AppPicker({selectedItem, onSelectItem, placeholder, listItems, icon, width='100%', ...otherProps}) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} /> }
      <Picker
        selectedValue={selectedItem}
        placeholder='Test'
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          onSelectItem(itemValue)
        }>
        <Picker.Item color={colors.medium} value='' label={placeholder} />
    
        {listItems.map((item, index) => {
          return <Picker.Item key={item.title.toString()} label={item.title.toString()} value={item.value}/>
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
  },
  picker: {
    height: 25, width: '100%', backgroundColor:colors.light, borderRadius: 25,
  }
})
