import React from 'react'
import * as Location from 'expo-location'

export default useLocation = () => {
  const [location, setLocation] = React.useState()

  const getLocation = async () => {

    try {
      const result = await Location.requestPermissionsAsync()
      if(!result.granted) return;

      // GetCurrentPosition is more accurate but takes longer and consumes resources.
      const {coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync()
      setLocation({latitude, longitude})
    } catch (error) {
      console.log('Error retrieving location')
    }

  }

  React.useEffect(() => {
    getLocation()
  }, [])

  return location;
}

