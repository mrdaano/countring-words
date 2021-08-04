import React from 'react';
import { ResultState } from 'src/App';
import Card from './Card';

type ResultsProp = {
    wordToSearch: string,
    results: ResultState,
};

function Number(props: {number: number, text?: string}) {
    return (
        <div className="text-gray-700">
            <div className="text-center text-5xl">
                {props.number}
            </div>
            {props.text && <span className="text-center text-sm block">Result{props.number !== 1 ? 's' : ''} for {props.text}</span>}
        </div>
    );
}

class Results extends React.Component<ResultsProp, {}> {
    render() {
        return (
            <div className="flex flex-col gap-4">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 font-extrabold md:text-5xl text-3xl">
                    Results
                </h2>
                <Card title="Highest frequency" children={<Number number={this.props.results.highestFrequency} />} />
                {this.props.wordToSearch && 
                    <Card title="Frequency for word" children={<Number text={this.props.wordToSearch} number={this.props.results.frequencyForWord} />} />}
            </div>
        );
    }
}

export default Results;