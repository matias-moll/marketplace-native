import React from 'react'
import LottieView from 'lottie-react-native'

export default function AppActivityIndicator({visible = false}) {
  if(!visible) return null;

  return <LottieView 
      autoplay
      loop
      source={require('..assets/animations/loader.json')}
    />
  
}
