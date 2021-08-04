import React from 'react';
import { ResultState } from 'src/App';
import Card from './Card';

type ResultsProp = {
    wordToSearch: string,
    results: ResultState,
};

function Number(props: {number: number, text?: string}) {
    return (
        <div className="text-gray-700 p-2">
            <div className="text-center text-5xl">
                {props.number}
            </div>
            {props.text && <span className="text-center text-sm block">Result{props.number !== 1 ? 's' : ''} for {props.text}</span>}
        </div>
    );
}

function Row(props: {title: string, number: number}) {
    return (
        <div className="grid grid-cols-2 gap-2 border-b border-gray-100 last:border-b-0 px-3 py-2 text-gray-700">
            <p className="truncate">
                {props.title}
            </p>
            <p>
                {props.number}
            </p>
        </div>
    );
}

class Results extends React.Component<ResultsProp, {}> {
    render() {
        return (
            <section className="flex flex-col gap-4">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 font-extrabold md:text-4xl text-2xl">
                    Results
                </h2>
                <Card title="Highest frequency" children={<Number number={this.props.results.highestFrequency} />} />
                {this.props.wordToSearch && 
                    <Card title="Frequency for word" children={<Number text={this.props.wordToSearch} number={this.props.results.frequencyForWord} />} />}
                <Card title="Most frequent N words" children={this.props.results.mostFrequentNWords.map(result => <Row key={result.getWord()} title={result.getWord()} number={result.getFrequency()} />)} />
            </section>
        );
    }
}

export default Results;