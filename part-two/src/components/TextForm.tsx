import React from 'react';
import Button from './Button';

type TextFormProps = {
    analyse: Function,
};

type TextFormState = {
    text: string,
};

class TextForm extends React.Component<TextFormProps, TextFormState> {
    constructor(props: TextFormProps) {
        super(props);

        this.state = {
            text: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.sendForm = this.sendForm.bind(this);
    }

    private handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;

        this.setState({ text: value });
    }

    private sendForm() {
        this.props.analyse(this.state.text);
    }

    render() {
        return (
            <div>
                <p className="text-base text-gray-200 mb-2">
                    Type or paste here below the text you want to analyse.
                </p>
                <textarea onChange={this.handleInput} className="bg-white rounded-md p-2 border border-black w-full h-72 mb-2"></textarea>
                <div className="flex justify-end">
                    <Button onClick={this.sendForm} children="analyse" />
                </div>
            </div>
        );
    }
}

export default TextForm;