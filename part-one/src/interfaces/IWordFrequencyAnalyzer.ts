import IWordFrequency from './IWordFrequency';

export default interface IWordFrequencyAnalyzer {
    calculateHighestFrequency(text: string): number;
    calculateFrequencyForWord (text: string, word: string): number;
    calculateMostFrequentNWords (text: string, n: number): IWordFrequency[];  
};