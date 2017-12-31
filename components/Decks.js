import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
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
    const { navigate } = this.props.navigation

    return (
      <View>
        <FlatList
          style={styles.deckList}
          data={decks}
          keyExtractor={deck => deck.title}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
          renderItem={({ item: deck }) => (
            <TouchableOpacity
              style={styles.deckEntry}
              onPress={() => navigate('DeckSummary', { deck })}
            >
              <Text style={styles.deckTitle}>{deck.title}</Text>
              <Text style={styles.deckSubtitle}>{`${deck.questions.length} cards`}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckList: {
    margin: 16
  },
  deckEntry: {
    alignItems: 'center',
    margin: 32
  },
  separator: {
    backgroundColor: '#000',
    height: 1
  },
  deckTitle: {
    fontSize: 32,
    textAlign: 'center',
  },
  deckSubtitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#AAA'
  }
})
