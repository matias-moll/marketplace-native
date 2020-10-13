import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40}/>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor: colors.primary,
    bottom: 20,
    borderColor: colors.white,
    borderWidth:10,
    borderRadius: 40,
    height: 70,
    justifyContent:'center',
    width: 70
  }

})
