import React from 'react';
import TextForm from './components/TextForm';

class App extends React.Component {

    analyse(text: string) {
        console.log(text);
    }

    render() {
        return (
        <div className="bg-gray-900 h-screen antialiased">
            <main className="max-w-7xl mx-auto">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 font-extrabold md:text-7xl text-5xl">
                    Counting words
                </h1>
                <section className="pt-4 md:grid grid-cols-2 gap-4">
                    <TextForm analyse={this.analyse} />
                </section>
            </main>
        </div>
        );
    }
}

export default App;
