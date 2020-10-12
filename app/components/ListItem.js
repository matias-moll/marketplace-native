import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './AppText'
import colors from '../config/colors'

export default function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight 
        underlayColor={colors.control}
        onPress={onPress}>
        <View style={styles.container}>
          { IconComponent }
          { image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
            { subTitle && <AppText style={styles.subTitle} numberOfLines={3}>{subTitle}</AppText> }
          </View>
          <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  detailsContainer:{
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1
  },
  image:{
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
     fontWeight: '500'
  },
  subTitle: {
    color: colors.medium
  }
})
