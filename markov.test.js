const MarkovMachine = require('./markovMachine');

describe('MarkovMachine', () => {
    test('should correctly set up the markov chains', () => {
      const text = 'The cat in the hat';
      const markov = new MarkovMachine(text);
  
      expect(markov.chains).toEqual({
        The: ['cat'],
        cat: ['in'],
        in: ['the'],
        the: ['hat'],
        hat: [null]
      });
    });
  
    test('should generate random text with the specified number of words', () => {
      const text = 'The cat in the hat';
      const markov = new MarkovMachine(text);
      const generatedText = markov.makeText(3);
  
      const words = generatedText.split(' ');
      expect(words.length).toBe(3);
    });
  });
