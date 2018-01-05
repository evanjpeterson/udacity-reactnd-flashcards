import React from 'react'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Decks } from './Decks'
import { AddDeck } from './AddDeck'
import { getDecks } from '../utils/deck-utils'

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

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: []
    }
  }

  componentDidMount() {
    this.updateDecks()
  }

  updateDecks = () => {
    return getDecks()
      .then(decks => {
        this.setState({
          decks: Object.values(decks)
        })
      })
  }

  render() {
    const { navigate } = this.props.navigation
    const { decks } = this.state
    const screenProps = {
      decks,
      updateParent: this.updateDecks,
      navigate
    }

    return (
      <HomeTabs screenProps={screenProps}/>
    )
  }
}
