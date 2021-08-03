import IWordFrequency from './interfaces/IWordFrequency';

export default class WordFrequency implements IWordFrequency {
    private word: string;
    private frequency: number;

    constructor(word: string, frequency: number) {
        this.word = word;
        this.frequency = frequency;
    }

    /**
     * Get the word.
     *
     * @returns string
     */
    getWord(): string {
        return this.word;
    }

    /**
     * Get the requency of a word.
     *
     * @returns number
     */
    getFrequency(): number {
        return this.frequency;
    }
}