import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'
import Routes from '../navigation/Routes'

const menuItems = [
  { 
    title:'My Listings', 
    icon: {
      name:'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  { 
    title:'My Messages', 
    icon: {
      name:'email',
      backgroundColor: colors.secondary
    },
    targetScreen: Routes.MESSAGES
  }
]

export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>

        <ListItem
          title='Matias Moll'
          subTitle='pintamicerca@gmail.com'
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList  
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent ={ListItemSeparator}
          renderItem={({ item }) => 
            <ListItem 
              title={item.title}
              IconComponent = {
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
              />
          }
        />
      </View>
      <ListItem 
        title='Log Out'
        IconComponent= {
          <Icon name='logout' backgroundColor='#ffe66d' />
        }
      />
    </Screen> 
      
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical:20
  },
  screen:{
    backgroundColor: colors.light
  }
})
