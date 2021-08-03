import { describe, it } from 'mocha';
import { expect } from 'chai';
import { readFileSync } from 'fs';
import WordFrequencyAnalyzer from '../src/WordFrequencyAnalyzer';

describe('Analyzer tests', () => {
    const wordAnalyzer = new WordFrequencyAnalyzer;
    const longText = readFileSync(__dirname + '/text.txt').toString();

    describe('Highest frequency tests', () => {
        it('Test with a empty string', () => {
            const number = wordAnalyzer.calculateHighestFrequency('');

            expect(number).to.be.eql(0);
        });

        it('Test when frequency is equal', () => {
            const text = 'The quick brown fox jumps';
            const number = wordAnalyzer.calculateHighestFrequency(text);

            expect(number).to.be.eql(1);
        });

        it('Test when words appear more often', () => {
            const text = 'The quick brown fox jumps over the lazy dog';
            const number = wordAnalyzer.calculateHighestFrequency(text);

            expect(number).to.be.eql(2);
        });

        it('Test when words appear more often with case insensitive', () => {
            const text = 'The quick brown fox jumps over tHe lazy dog. But THE lazy dog was not scared.';
            const number = wordAnalyzer.calculateHighestFrequency(text);

            expect(number).to.be.eql(3);
        });

        it('Ignore dots and comma\'s', () => {
            const text = 'It took time, but time is irrelevant.';
            const number = wordAnalyzer.calculateHighestFrequency(text);

            expect(number).to.be.eql(2);
        });

        it('Ignore tabs and newlines', () => {
            const text = 'The quick brown fox jumps \t over the lazy dog. \t But there went something wrong. \t \n';
            const number = wordAnalyzer.calculateHighestFrequency(text);

            expect(number).to.be.eql(2);
        });
    });

    describe('Frequency for specific word', () => {
        it('Should return zero when word is not in text', () => {
            const text = 'The quick brown fox jumps';
            const number = wordAnalyzer.calculateFrequencyForWord(text, 'something');

            expect(number).to.be.eql(0);
        });

        it('Test search for a specific word', () => {
            const text = 'The quick brown fox jumps over the lazy dog';
            const number = wordAnalyzer.calculateFrequencyForWord(text, 'the');

            expect(number).to.be.eql(2);
        });

        it('Search though bigger text', () => {
            const number = wordAnalyzer.calculateFrequencyForWord(longText, 'far');

            expect(number).to.be.eql(4);
        });
    });

    describe('Most frequent n words', () => {
        it('Get x results back orderd by most frequent', () => {
            const words = wordAnalyzer.calculateMostFrequentNWords(longText, 4);

            expect(words.length).to.be.eql(4);
            expect(words[0].getWord()).to.be.eql('the');
        });

        it('Get all restults back when n is higher than the map', () => {
            const text = 'The quick brown fox jumps over the lazy dog';
            const words = wordAnalyzer.calculateMostFrequentNWords(text, 10);

            expect(words.length).to.be.eql(8);
        });
    });
});