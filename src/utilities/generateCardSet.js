import { cardPool } from "./cardPool";
const generateRandomSet = (source, size, category) => {
  let miscSet = { category: category, size: size, cards: [] };
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
    previouslyUsed.push(index);
  }
  return miscSet;
};
//TODO: Refactor generate${category}Set into one function
const generateMiscSet = (size) => {
  let allCards = [...cardPool.icons, ...cardPool.firsts, ...cardPool.quotes];
  return generateRandomSet(allCards, size, "misc");
};

const generateIconsSet = (size) => {
  return generateRandomSet(cardPool.icons, size, "icons");
};

const generateFirstsSet = (size) => {
  return generateRandomSet(cardPool.firsts, size, "firsts");
};

const generateQuotesSet = (size) => {
  return generateRandomSet(cardPool.quotes, size, "quotes");
};

export {
  generateFirstsSet,
  generateIconsSet,
  generateMiscSet,
  generateQuotesSet,
};
