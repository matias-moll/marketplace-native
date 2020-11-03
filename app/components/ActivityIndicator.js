import React from "react";
import { StyleSheet, View } from 'react-native'
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.3
  }
})
export default ActivityIndicator;
