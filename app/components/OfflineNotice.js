import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useNetInfo} from '@react-native-community/netinfo'
import Constants from 'expo-constants'

import colors from '../config/colors'
import AppText from './AppText'

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
