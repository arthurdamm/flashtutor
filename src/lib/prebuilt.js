import { popRandomElement } from './random';

/**
 * @fileoverview Module for Pre-Built Decks.
 * @package
 */

/**
 * Maps demo performance data, as an array of values between 1 and 0, to each
 * card of the deck.
 * @param {Array<Object>} deck Deck to map.
 * @param {Array<number>} demoPerformance Data represented by array of card
 * successes.
 * @return {Array<Object} Deck mapped with formatted performance data.
 */
const mapDemoPerformances = (deck, demoPerformances) => {
  demoPerformances.forEach(
    (l, i) =>
      deck[i] &&
      (deck[i].performance = [...Array(l).fill(1), ...Array(10 - l).fill(0)])
  );
  return deck;
};

/**
 * Creates a random array of 1's & 0's representing card performance data.
 * @param {number} length The number of performances.
 * @return {Array<number>} Card performance data represented as 1's & 0's.
 */
const getRandomPerformance = (length) =>
  [...Array(length)].map((x) => Math.floor(Math.random() * 2));

/**
 * Generates deck of random color->word encoded cards.
 * @param {number} length The deck size.
 * @return {Array<Object>} Deck represented by JSON array of card objects.
 */
const generateColorDeck = (length) => {
  const words = [
    'agility',
    'altruism',
    'appeal',
    'beneficial',
    'bold',
    'creative',
    'capable',
    'dynamic',
    'drive',
    'empathy',
    'educate',
    'determination',
    'eager',
    'encourage',
    'fun',
    'helpful',
    'joy',
    'nice',
    'optimist',
    'polite',
    'quality',
    'reliable',
    'rockstar',
    'skilled',
    'spontaneous',
    'stellar',
    'teach',
    'tolerance',
    'value',
  ];
  const colors = [
    'crimson',
    'hotpink',
    'yellow',
    'orange',
    'darkgreen',
    'lightgreen',
    'cyan',
    'indigo',
    'blue',
    'lightgray',
  ];
  const deck = [];
  let word;
  length = parseInt(length) || 10;
  while (length--)
    deck.push({
      color: popRandomElement(colors),
      question: 'Which word has been coded to this color?',
      answer: (word = popRandomElement(words)),
      regex: RegExp(word, 'i'),
    });
  return deck;
};

/**
 * Creates the Dino Deck from raw JSON data.
 * @return {Array<Object>} Deck represented by JSON array of card objects.
 */
const getDinoDeck = () => [
  {
    image: './images/tRex.jpg',
    question: 'What dino is this?',
    answer: 'Tyrannosaurus Rex',
    regex: /((t?yrann?osaurus)|t)?\s*rex/i,
  },
  {
    image: './images/velociraptor.jpg',
    question: 'What dino is this?',
    answer: 'Velociraptor',
    regex: /(veloci)?raptor/i,
  },
  {
    image: './images/brontosaurus.jpg',
    question: 'What dino is this?',
    answer: 'Brontosaurus',
    regex: /brontosaurus|bronto|saurus/i,
  },
  {
    image: './images/teradactyl.png',
    question: 'What is this flying dino?',
    answer: 'Pteradactyl',
    regex: /p?teradac.*/i,
  },
  {
    image: './images/plesiosaur.jpg',
    question: 'What is this water dino?',
    answer: 'Plesiosaur',
    regex: /plesiosaur/i,
  },
  {
    image: './images/mosasaurus.jpg',
    question: 'What is this water dino?',
    answer: 'Mosasaurus',
    regex: /mosasaurus/i,
  },
  {
    image: './images/helicoprion.jpg',
    question: 'What is this water dino?',
    answer: 'Helicoprion',
    regex: /helicoprion/i,
  },
  {
    image: './images/nothosaurus.jpg',
    question: 'What is this water dino?',
    answer: 'Nothosaurus',
    regex: /nothosaurus/i,
  },
  {
    image: './images/triceratops.jpg',
    question: 'What dino is this?',
    answer: 'Triceratops',
    regex: /triceratops/i,
  },
  {
    image: './images/stego.jpg',
    question: 'What dino is this?',
    answer: 'Stegosaurus',
    regex: /stegosaurus/i,
  },
];

/**
 * Creates the Face Deck from raw JSON data.
 * @return {Array<Object>} Deck represented by JSON array of card objects.
 */
export const getFaceDeck = () => [
  {
    image: 'images/face1.jpg',
    question: 'Who is this?',
    answer: 'Haley',
    regex: /haley/i,
  },
  {
    image: 'images/face2.jpg',
    question: 'Who is this?',
    answer: 'Camila',
    regex: /camila/i,
  },
  {
    image: './images/face3.jpg',
    question: 'Who is this?',
    answer: 'Paola',
    regex: /paola/i,
  },
  {
    image: './images/face4.jpg',
    question: 'Who is this?',
    answer: 'Isabela',
    regex: /isabell?a/i,
  },
  {
    image: './images/face5.jpg',
    question: 'Who is this?',
    answer: 'Sarah',
    regex: /sarah?/i,
  },
  {
    image: './images/face6.jpg',
    question: 'Who is this?',
    answer: 'Henry',
    regex: /henry/i,
  },
  {
    image: './images/face7.jpg',
    question: 'Who is this?',
    answer: 'Davis',
    regex: /davis/i,
  },
  {
    image: './images/face8.jpg',
    question: 'Who is this?',
    answer: 'Isaac',
    regex: /isaac/i,
  },
  {
    image: './images/face9.jpg',
    question: 'Who is this?',
    answer: 'Elliot',
    regex: /elliot/i,
  },
  {
    image: './images/face10.jpg',
    question: 'Who is this?',
    answer: 'Ruben',
    regex: /ruben/i,
  },
];

/**
 * Creates the CSS Trivia Deck from raw JSON data.
 * @return {Array<Object>} Deck represented by JSON array of card objects.
 */
const getTriviaDeck = () => [
  {
    question:
      'How do you center a DIV element <em>vertically</em> within a flexbox of row direction?',
    answer: '<i>align-items</i>: center;',
    regex: /align-items:\s*center;?/i,
  },
  {
    question:
      'How do you finish centering a DIV whose top-left corner has been centered with:<br /><i>position: absolute; <br />top: 0; left: 0;</i>?',
    answer: '<i>transform</i>: translate(-50%, -50%);',
    regex: /(transform:)?\s*translate\(-50%,\s*-50%\);?/i,
  },
  {
    question: 'How do you center a DIV element horizontally?',
    answer: '<i>margin</i>: 0 auto;',
    regex: /margin:\s*0?\s*auto;?/i,
  },
  {
    question:
      'How do you center a DIV element <em>horizontally</em> within a flexbox of row direction?',
    answer: '<i>justify-content</i>: center;',
    regex: /justify-content:\s*center;?/i,
  },
  {
    question: 'How do you center TEXT horizontally?',
    answer: '<i>text-align</i>: center;',
    regex: /text-align:\s*center;?/i,
  },
  {
    question:
      'How do you center TEXT vertically in a DIV of <i>height: 108px;</i>?',
    answer: '<i>line-height</i>: 108px;',
    regex: /line-height:\s*108px;?/i,
  },
  {
    question:
      'With no styles applied, what is the default font size for normal text?',
    answer: '16px',
    regex: /16\s*(px)|(pixels)/i,
  },
  {
    question:
      "What property automatically includes an element's border and padding in its size?",
    answer: '<i>box-sizing</i>: border-box;',
    regex: /box-sizing:\s*border-box;?/i,
  },
  {
    question:
      'What selector selects a .mydiv class only if it is a direct child of the body tag?',
    answer: 'body > .mydiv {}',
    regex: /body\s*>\s*\.mydiv(\s*{.*})?/i,
  },
  {
    question:
      'How do you enable smooth scrolling of all links that target an anchor?',
    answer: 'html {<br><i>scroll-behavior</i>: smooth; }',
    regex: /html\s*{\s*scroll-behavior:\s*smooth;?\s*}/i,
  },
];

/**
 * Creates the Tutorial Deck from raw JSON data.
 * @return {Array<Object>} Deck represented by JSON array of card objects.
 */
const getTutorialDeck = () => [
  {
    question: 'Question to answer<br/ ><i>(hit enter to see answer!)</i>',
    answer: 'I love learning!',
    regex: /i love learning!*/i,
  },
];

/**
 * Creates the Presentation Day Deck from raw JSON data.
 * @return {Array<Object>} Deck represented by JSON array of card objects.
 */
const getPresentationDeck = () => [
  {
    question: 'Who are the developers of TwoDoor?',
    answer: 'Scout Curry &<br> Arthur Damm',
    regex: /(scout\s*(curry)?)|(arthur\s*(damm)?)/i,
  },
  {
    question: 'What key attribute makes TwoDoor unique?',
    answer: 'Adaptive',
    regex: /adapt|adaptive|adaptable|adaptability/i,
  },
  {
    question: 'What evidence-based learning technique optimizes study time?',
    answer: 'Spaced Repetition',
    regex: /spaced?\s*rep(etition)?/i,
  },
  {
    question:
      'What data-scientific function could be plotted to further optimize learning?',
    answer: 'Forgetting Curve',
    regex: /forgetting\s*curve/i,
  },
  {
    question: "What's the best software school around?",
    answer: 'Holberton School',
    regex: /holberton|holbie|holby/i,
  },
];
