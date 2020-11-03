import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import Routes from '../navigation/Routes'
import Screen from '../components/Screen'
import Card from '../components/Card'
import listingsApi from '../api/listings'
import colors from '../config/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import ActivityIndicator from '../components/ActivityIndicator'

export default function ListingsScreen({navigation}) {
  const [listings, setListings] = React.useState([])

  const[error, setError] = React.useState(false)

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    loadListings()
  }, [])

  const loadListings = async () => {
    setLoading(true)
    const response = await listingsApi.getListings()
    setLoading(false)

    if(!response.ok){
      setError(true); // response.problem has details.
      return;
    }  

    setError(false)
    setListings(response.data)
  }

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && 
          <> 
            <AppText> Couldn't retrieve the listings.</AppText>
            <AppButton title='Retry' onPress={loadListings} /> 
          </>}
        <FlatList 
          data={listings}
          keyExtractor= { listing => listing.id.toString()}
          renderItem ={ ({item}) =>
            <Card 
              title ={item.title}
              subTitle={'$' + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl= {item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
            />
        }
        />
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})
