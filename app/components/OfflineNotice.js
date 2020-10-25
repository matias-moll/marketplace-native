import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'
import Constants from 'expo-constants'
import {useNetInfo} from '@react-native-community/netinfo'

export default function OfflineNotice() {
  const netInfo = useNetInfo()

  if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No internet connection</AppText>
    </View>
  )

  return null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    top: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: colors.white,
    width: 'auto'
  }

})
