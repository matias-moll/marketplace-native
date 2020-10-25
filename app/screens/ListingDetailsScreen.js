import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {Image} from 'react-native-expo-image-cache'

import ListItem from '../components/ListItem'
import AppText from '../components/AppText'
import colors from '../config/colors'

export default function ListingDetailsScreen({route}) {
  const listing = route.params
  return (
    <View>
      <Image 
        style={styles.image} 
        preview={{uri: listing.images[0].thumbnailUrl}} 
        uri={listing.images[0].url} 
        tint='light' 
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {listing.title}</AppText>
        <AppText style={styles.price}> ${listing.price}</AppText>
        <View style={styles.userContainer}> 
          <ListItem 
            image={require('../assets/mosh.jpg')}
            title='Matias Moll'
            subTitle='5 Listings'
          />
        </View>
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer:{
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300
  },
  price:{
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  title:{
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer:{
    marginVertical: 40,
  }
})
