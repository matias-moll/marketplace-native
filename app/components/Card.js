import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import AppText from './AppText'
import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function Card({title, subTitle, imageUrl, thumbnailUrl, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.card}>
        <Image 
          style={styles.image} 
          preview={{uri: thumbnailUrl }} 
          uri={imageUrl} 
          tint='light'
        />  
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
