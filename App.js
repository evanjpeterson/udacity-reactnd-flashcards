import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Decks } from './components/Decks'
import { AddDeck } from './components/AddDeck'
import { DeckSummary } from './components/DeckSummary'

function CustomStatusBar (props) {
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent {...props} />
    </View>
  )
}

const HomeTabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      header: null
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      header: null
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeTabs
  },
  DeckSummary: {
    screen: DeckSummary
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomStatusBar/>
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
