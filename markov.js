/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const chains = {};

    for (let i = 0; i < this.words.length - 1; i++) {
      const word = this.words[i];
      const nextWord = this.words[i + 1];

      if (!chains[word]) {
        chains[word] = [];
      }

      chains[word].push(nextWord);
    }

    // Handle the last word in the text
    const lastWord = this.words[this.words.length - 1];
    if (!chains[lastWord]) {
      chains[lastWord] = [null];
    } else {
      chains[lastWord].push(null);
    }

    this.chains = chains;
  }



  /** return random text from chains */

  makeText(numWords = 100) {
    const words = [];
    let currentWord = null;

    while (words.length < numWords) {
      if (!currentWord) {
        const keys = Object.keys(this.chains);
        currentWord = keys[Math.floor(Math.random() * keys.length)];
      }

      words.push(currentWord);
      const possibleNextWords = this.chains[currentWord];
      const nextWord = possibleNextWords[Math.floor(Math.random() * possibleNextWords.length)];
      currentWord = nextWord;
    }

    return words.join(" ");
  }
}

