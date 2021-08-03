import { describe, it } from 'mocha';
import { expect } from 'chai';
import WordFrequency from '../src/WordFrequency';

describe('WordFrequency tests', () => {
    it('Create a instace of WordFrequency', () => {
        const word = new WordFrequency('foo', 1);

        expect(word).to.be.a.instanceOf(WordFrequency);
    }); 

    it('Get the right word when calling getWord', () => {
        const word = new WordFrequency('bar', 1);

        expect(word.getWord()).to.be.eql('bar');
    });

    it('Get the right frequency when calling getFrequency', () => {
        const word = new WordFrequency('foo', 67);

        expect(word.getFrequency()).to.be.eql(67);
    });
});