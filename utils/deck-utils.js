import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'Udacity:ReactNanodegree:flaschards'

/*
The deck collection looks something like this:

{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function...'
      }
    ]
  }
}
*/


// Returns all of the decks along with their titles, questions, and answers.
export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => results || {})
}

// Returns the deck associated with a title.
export const getDeck = (title) => {
  return getDecks()
    .then(decks => decks[title]);
}

// Adds a new deck for a given title to the collection of decks.
export const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

// Takes a deck title and card, and adds the card to the list of
// questions for the deck with the associated title.
export const addCardToDeck = (title, card) => {
  return getDeck(title)
    .then(deck => {
      return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          questions: [card, ...deck.questions],
          ...deck
        }
      }))
    })
}
