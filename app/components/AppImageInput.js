import React from 'react'
import { StyleSheet, Image, Text, View, TouchableWithoutFeedback, Alert } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export default function AppImageInput({ imageUri, onChangeImageUri }) {

  const requestPermission = async () => {
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if(!resultPermissions.granted)
      alert('You need to enable all the permissions needed for the app to work properly')
  }

  React.useEffect(() => {
    requestPermission();
  }, [])

  const handlePress= () =>{
    if(!imageUri)
      selectImage()
    else{
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImageUri(null) },
        { text: 'No' }
      ])
    } 
  }
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      }); 

      if(!result.cancelled)
        onChangeImageUri(result.uri)

    } catch (error) {
      console.log('Error reading an image')
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        { !imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} /> }
        { imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width:100
  },
  image:{
    width:'100%',
    height: '100%'
  }
})
