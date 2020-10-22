import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function Card({title, subTitle, imageUrl, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.card}>
        <Image style={styles.image} source={{uri:imageUrl}}></Image>    
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}> {title}</AppText>
          <AppText style={styles.subTitle} numberOfLines={3}> {subTitle}</AppText>
        </View>  
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer:{
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle:{
    color: colors.secondary,
    fontWeight: 'bold'
  },
  title:{
    marginBottom: 7
  }
})
