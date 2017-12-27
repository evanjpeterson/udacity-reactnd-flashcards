import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Decks } from './components/Decks'
import { AddDeck } from './components/AddDeck'

const HomeTabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeTabs
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
})
