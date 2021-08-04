import React from 'react';
import WordFrequencyAnalyzer, { IWordFrequency } from 'word-frequency-analyzer';
import Alert from './components/Alert';
import Results from './components/Results';
import TextForm from './components/TextForm';

export type ResultState = {
    highestFrequency: number,
    frequencyForWord: number,
    mostFrequentNWords: IWordFrequency[]
};

type AppState = {
    analysed: boolean,
    wordToSearch: string,
    numberOfResults: number,
    results: ResultState,
};

class App extends React.Component<{}, AppState> {
    private analyzer: WordFrequencyAnalyzer;

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            analysed: false,
            wordToSearch: '',
            numberOfResults: 5,
            results: {
                highestFrequency: 0,
                frequencyForWord: 0,
                mostFrequentNWords: [],
            },
        };

        this.analyzer = new WordFrequencyAnalyzer();

        this.analyse = this.analyse.bind(this);
    }

    analyse(text: string) {
        const highestFrequency = this.analyzer.calculateHighestFrequency(text);
        const frequencyForWord = this.analyzer.calculateFrequencyForWord(text, this.state.wordToSearch);
        const mostFrequentNWords = this.analyzer.calculateMostFrequentNWords(text, this.state.numberOfResults);

        this.setState({
            analysed: true,
            results: {
                highestFrequency,
                frequencyForWord,
                mostFrequentNWords,
            }
        })
    }

    render() {
        return (
        <div className="bg-gray-900 h-screen antialiased">
            <main className="max-w-7xl mx-auto">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 font-extrabold md:text-7xl text-5xl">
                    Counting words
                </h1>
                <section className="pt-4 md:grid grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-2">
                        <TextForm analyse={this.analyse} />
                    </div>
                    <div className="mt-4 md:mt-0">
                        {this.state.analysed
                            ? <Results results={this.state.results} wordToSearch={this.state.wordToSearch} />
                            : <Alert children="Nothing to analyse" />}
                    </div>
                </section>
            </main>
        </div>
        );
    }
}

export default App;
