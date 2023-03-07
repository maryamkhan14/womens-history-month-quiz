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
export const getMiscSet = (size) => {
  let allCards = [...cardPool.icons, ...cardPool.firsts, ...cardPool.quotes];
  return generateRandomSet(allCards, size);
};

export const getIconsSet = (size) => {
  return generateRandomSet(cardPool.icons, size);
};

export const getFirstsSet = (size) => {
  return generateRandomSet(cardPool.firsts, size);
};

export const getQuotesSet = (size) => {
  return generateRandomSet(cardPool.quotes, size);
};
