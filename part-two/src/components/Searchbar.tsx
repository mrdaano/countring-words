import React from 'react';

type SearchbarProps = {
    onWordChange: Function,
    onNChange: Function,
};

class Searchbar extends React.Component<SearchbarProps, {}> {
    constructor(props: SearchbarProps | Readonly<SearchbarProps>) {
        super(props);

        this.bindFunctions();
    }

    private bindFunctions() {
        this.onWordChange = this.onWordChange.bind(this);
        this.onNChange = this.onNChange.bind(this);
    }

    private onWordChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        this.props.onWordChange(value);
    }

    private onNChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value = Number(e.target.value);

        if (value < 1) {
            value = 1;
        }

        this.props.onNChange(value);
    }

    render() {
        return (
            <section>
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 font-extrabold md:text-4xl text-2xl">
                    Filter
                </h2>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="word" className="block text-sm font-medium text-gray-100">Search frequency for word</label>
                        <div className="mt-1">
                            <input onChange={this.onWordChange} type="text" id="word" className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="example" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="n" className="block text-sm font-medium text-gray-100">Change N frequency</label>
                        <div className="mt-1">
                            <input onChange={this.onNChange} type="number" id="n" className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md" min="1" step="1" defaultValue="5" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Searchbar;