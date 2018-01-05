import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Home } from './components/Home'
import { Decks } from './components/Decks'
import { AddDeck } from './components/AddDeck'
import { DeckSummary } from './components/DeckSummary'
import { AddCard } from './components/AddCard'
import { Quiz } from './components/Quiz'
import { setLocalNotification } from './utils/notification-utils'
import * as colors from './utils/colors'

function CustomStatusBar (props) {
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent {...props} />
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  DeckSummary: {
    screen: DeckSummary,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.blue
      },
      headerTintColor: colors.white
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerStyle: {
        backgroundColor: colors.blue
      },
      headerTintColor: colors.white
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerStyle: {
        backgroundColor: colors.blue
      },
      headerTintColor: colors.white
    }
  }
})

export default class App extends React.Component {

  componentDidMount() {
    // Schedule a notification to remind the user to take a quiz
    setLocalNotification()
  }

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
    flex: 1
  },
})
