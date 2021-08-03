import IWordFrequency from './interfaces/IWordFrequency';
import IWordFrequencyAnalyzer from './interfaces/IWordFrequencyAnalyzer';
import WordFrequency from './WordFrequency';

export default class WordFrequencyAnalyzer implements IWordFrequencyAnalyzer {
    /**
     * Get the highest word frequency.
     * 
     * @param text string
     * @returns number
     */
    calculateHighestFrequency(text: string): number {
        const map = this.parseText(text);

        if (map.length === 0) {
            return 0;
        }

        this.sortMap(map);

        return map[0].getFrequency();
    }
    
    /**
     * Search for frequency of a specific word.
     * 
     * @param text string
     * @param word number
     * @returns number
     */
    calculateFrequencyForWord(text: string, word: string): number {
        if (! text.toLocaleLowerCase().includes(word.toLocaleLowerCase())) {
            return 0;
        }
        
        const map = this.parseText(text);
        const wordFrequency = map.find(wordFrequency => wordFrequency.getWord() === word);

        return wordFrequency?.getFrequency() ?? 0;
    }

    /**
     * Get x number of most frequent words back.
     * 
     * @param text string
     * @param n number
     * @returns IWordFrequency[]
     */
    calculateMostFrequentNWords(text: string, n: number): IWordFrequency[] {
        const map = this.parseText(text);

        this.sortMap(map);

        return map.splice(0, n);
    }

    /**
     * Transform text to a frequency array.
     * 
     * @param text string
     * @returns IWordFrequency[]
     */
    private parseText(text: string): IWordFrequency[] {
        if (text.trim().length === 0) {
            return [];
        }

        const formattedText = this.formatText(text);

        const textArray = formattedText.split(' ');
        const frequencyMap: {[key: string]: number} = {};

        for (const word of textArray) {
            if (frequencyMap[word] ?? false) {
                frequencyMap[word]++;
                continue;
            }

            frequencyMap[word] = 1;
        }
        
        return Object.keys(frequencyMap)
            .map(word => new WordFrequency(word, frequencyMap[word]))
    }

    /**
     * Strip all unnecessary characters.
     * 
     * @param text string
     * @returns string
     */
    private formatText(text: string): string {
        return text.toLocaleLowerCase()
        .replace(',', '')
        .replace('-', '')
        .replace('.', '')
        // Remove tabs and newlines.
        .replace(/(\r\n|\n|\r|\t|\\t|\\n|\\r|\\r\\n)/gm, '')
        // Replace multiple whitespaces with one.
        .replace(/\s{2,}/gm, ' ');
    }

    /**
     * Sorts the array based on frequency.
     * 
     * @param map IWordFrequency[]
     * @returns IWordFrequency[]
     */
    private sortMap(map: IWordFrequency[]): IWordFrequency[] {
        return map.sort((a, b) => a.getFrequency() > b.getFrequency() ? -1 : 1);
    }
}