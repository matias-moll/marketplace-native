import React from 'react'
import { StyleSheet, Text, View, FlatList, } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
  }
]

export default function MessagesScreen() {
  
  const [messages, setMessages] = React.useState(initialMessages);
  const [refreshing, setRefreshing] = React.useState(false);

  const handleDelete = messageToDelete => {
    setMessages(messages.filter(message => message.id !== messageToDelete.id))
  }

  return (
    <Screen>
      <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => 
          <ListItem 
            title={item.title} 
            subTitle={item.description} 
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
            renderRightActions={() => 
            <ListItemDeleteAction onPress={() => handleDelete(item)}/>} 
          />
        }
        ItemSeparatorComponent={ () => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh ={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg')
            }
          ])
        }}
      />
    </Screen>

  )
}

const styles = StyleSheet.create({
})
