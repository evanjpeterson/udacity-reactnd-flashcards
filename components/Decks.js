import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getDecks } from '../utils/deck-utils'

export class Decks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: []
    }
  }

  componentDidMount() {
      getDecks()
        .then(decks => {
          this.setState({
            decks: Object.values(decks)
          })
        })
  }

  render() {
    const { decks } = this.state

    return (
      <View>
        { decks.map(deck => (
          <Text key={deck.title}>{deck.title}</Text>
        ))}
      </View>
    )
  }
}
