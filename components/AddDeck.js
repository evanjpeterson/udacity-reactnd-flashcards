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
    const { navigate } = this.props.navigation
    const { title } = this.state

    if (!title) {
      return
    }
    getDeck(title)
      .then(deck => {
        // No deck exists yet for this title, go ahead and create one.
        if (deck == null) {
          saveDeckTitle(title)
            .then(() => {
              // Go back home, clear out input state.
              navigate('Home')
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
