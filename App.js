import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Decks } from './components/Decks'
import { AddDeck } from './components/AddDeck'
import { DeckSummary } from './components/DeckSummary'
import { AddCard } from './components/AddCard'

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
      tabBarLabel: 'Decks '
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
    screen: HomeTabs,
    navigationOptions: {
      header: null
    }
  },
  DeckSummary: {
    screen: DeckSummary,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#28D'
      },
      headerTintColor: '#FFF'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerStyle: {
        backgroundColor: '#28D'
      },
      headerTintColor: '#FFF'
    }
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
