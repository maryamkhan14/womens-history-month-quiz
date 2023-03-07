import { cardPool } from "./cardPool";
const generateRandomSet = (source, size) => {
  let miscSet = { size: size, cards: [] };
  let previouslyUsed = [];
  for (let i = 0; i < size; i++) {
    // generate random value
    let index = Math.floor(Math.random() * source.length);

    // ensure it's unique
    while (previouslyUsed.includes(index)) {
      index = Math.floor(Math.random() * source.length);
    }

    // append random, unique card to miscSet
    miscSet.cards.push(source[index]);
  }
  return miscSet;
};
const generateMiscSet = (size) => {
  let allCards = [...cardPool.icons, ...cardPool.firsts, ...cardPool.quotes];
  return generateRandomSet(allCards, size);
};

const generateIconsSet = (size) => {
  return generateRandomSet(cardPool.icons, size);
};

const generateFirstsSet = (size) => {
  return generateRandomSet(cardPool.firsts, size);
};

const generateQuotesSet = (size) => {
  return generateRandomSet(cardPool.quotes, size);
};

export {
  generateFirstsSet,
  generateIconsSet,
  generateMiscSet,
  generateQuotesSet,
};
