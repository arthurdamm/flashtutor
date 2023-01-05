import { getFaceDeck } from './prebuilt';

/**
 * @fileoverview Module for Data Store.
 * @package
 */

/**
 * Loads requested deck data as JSON array.
 * @param {string} deckName The deck name to load.
 * @return {Array<Object>} Deck represented by JSON array of card objects.
 */
export const loadDeck = (deckName) => {
  console.log('loadDeck()', deckName);
  const factory = DECKS[deckName].factory || DECKS.CUSTOM.factory;
  return factory(deckName).map((json, i) => getCardTemplate(json, i));
};

/**
 * Creates a card object from a template populated with JSON data.
 * @param {Object} json The JSON data for this card.
 * @param {number} i This card's index in its deck.
 * @return {Object} The new card object.
 */
const getCardTemplate = (json, i) => {
  const card = {
    id: i,
    performance: [],
  };
  return { ...json, ...card };
};

/**
 * Enum for deck types.
 * @readonly
 * @enum {string}
 */
export const DECKS = {
  FACE: {
    name: 'FACE',
    text: 'Name Recognition',
    factory: getFaceDeck,
  },
  // DINO: {
  //   name: 'DINO', text: 'Dino Deck', factory: getDinoDeck
  // },
  // COLOR: {
  //   name: 'COLOR',
  //   text: 'Color Coding',
  //   factory: generateColorDeck,
  // },
  // TRIVIA: {
  //   name: 'TRIVIA',
  //   text: 'CSS Trivia',
  //   factory: getTriviaDeck,
  // },
  // PRESENTATION: {
  //   name: 'PRESENTATION',
  //   text: 'DEMO ❤️ DAY!',
  //   factory: getPresentationDeck,
  // },
  // CUSTOM: {
  //   name: 'CUSTOM',
  //   text: 'Custom',
  //   factory: getCustomDeck,
  // },
  // TUTORIAL: {
  //   name: 'TUTORIAL', text: 'How to Play?', factory: getTutorialDeck
  // },
  // BUILDER: {
  //   name: 'BUILDER',
  //   text: 'Create A Deck',
  //   factory: getBuiltDeck,
  // },
};
