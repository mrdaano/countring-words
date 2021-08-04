import React from 'react';
import WordFrequencyAnalyzer, { IWordFrequency } from 'word-frequency-analyzer';
import Alert from './components/Alert';
import Results from './components/Results';
import Searchbar from './components/Searchbar';
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
    text: string,
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
            text: '',
            results: {
                highestFrequency: 0,
                frequencyForWord: 0,
                mostFrequentNWords: [],
            },
        };

        this.analyzer = new WordFrequencyAnalyzer();

        this.bindFunctions();
    }

    private bindFunctions() {
        this.wordToSearchChange = this.wordToSearchChange.bind(this);
        this.numberOfResultsChange = this.numberOfResultsChange.bind(this);
        this.setTextInput = this.setTextInput.bind(this);
        this.analyse = this.analyse.bind(this);
    }

    private wordToSearchChange(wordToSearch: string) {
        this.setState({
            wordToSearch
        }, () => this.state.analysed && this.analyse());
    }

    private numberOfResultsChange(numberOfResults: number) {
        this.setState({
            numberOfResults,
        }, () => this.state.analysed && this.analyse());
    }

    private setTextInput(text: string) {
        this.setState({
            text,
        }, this.analyse);
    }

    analyse() {
        const highestFrequency = this.analyzer.calculateHighestFrequency(this.state.text);
        const frequencyForWord = this.analyzer.calculateFrequencyForWord(this.state.text, this.state.wordToSearch);
        const mostFrequentNWords = this.analyzer.calculateMostFrequentNWords(this.state.text, this.state.numberOfResults);

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
        <div className="bg-gray-900 min-h-screen antialiased">
            <main className="max-w-7xl mx-auto px-4 xl:px-0">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 font-extrabold md:text-7xl text-5xl h-14 md:h-20">
                    Counting words
                </h1>
                <section className="pt-4 md:grid grid-cols-2 xl:grid-cols-3 gap-6 pb-4">
                    <div className="xl:col-span-2">
                        <TextForm analyse={this.setTextInput} />
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Searchbar onWordChange={this.wordToSearchChange} onNChange={this.numberOfResultsChange} />
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
