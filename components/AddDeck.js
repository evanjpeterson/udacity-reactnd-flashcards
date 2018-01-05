import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import { getDeck, saveDeckTitle } from '../utils/deck-utils'

export class AddDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  addDeck = () => {
    const { updateParent, navigate } = this.props.screenProps
    const { title } = this.state

    if (!title) {
      return
    }

    // Check if this deck already exists.
    getDeck(title)
      .then(deck => {
        if (deck) {
          // The user has already created a deck with this name.
          // Navigate them to the deck page.
          navigate('DeckSummary', {
            deck,
            updateParent
          })
        } else {
          // Otherwise, no deck exists yet for this title, so create one.
          saveDeckTitle(title)
            .then(() => {
              // Get the deck that was just created.
              return getDeck(title)
            })
            .then(deck => {
              // Navigate to the new deck's page, clear out input state.
              navigate('DeckSummary', {
                deck,
                updateParent
              })

              this.setState({
                title: ''
              })
            })
        }
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.header}>
          What is the title of your new deck?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({
              title: text
            })}
            value={this.state.title}
            placeholder={'Deck Title'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.addDeck}>
            <Text style={styles.buttonText}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    marginTop: 80,
    alignItems: 'center'
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 24
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 24,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 0.5,
    height: 80,
    backgroundColor: '#28D',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  }
})
