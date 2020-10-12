import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppImageInput from './AppImageInput'

export default function AppListImageInputs({ imageUris=[], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      { imageUris.map((uri) => (
        <View key={uri} style={styles.imageContainer}>
          <AppImageInput imageUri={uri}  onChangeImageUri={() => onRemoveImage(uri)} />
        </View>
      ))}
      <AppImageInput onChangeImageUri={uri => onAddImage(uri)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight:10
  }
})
