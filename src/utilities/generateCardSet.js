import { cardPool } from "./cardPool";
const generateRandomSet = (size, category) => {
  let miscSet = { category: category, size: size, cards: [] };
  let source;
  if (category == "misc") {
    source = [...cardPool.icons, ...cardPool.firsts, ...cardPool.quotes];
  } else {
    source = cardPool[category];
  }
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
export { generateRandomSet };
