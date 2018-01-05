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

  render() {
    const { decks, updateParent, navigate } = this.props.screenProps

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
              onPress={() => navigate('DeckSummary', {
                deck,
                updateParent
              })}
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
