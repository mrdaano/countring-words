import React from 'react';

type ButtonProps = {
    onClick: Function,
    children?: React.ReactNode,
};

class Button extends React.Component<ButtonProps, {}> {
    constructor(props: ButtonProps) {
        super(props);

        this.click = this.click.bind(this);
    }

    private click() {
        this.props.onClick();
    }

    render() {
        return (
            <button onClick={this.click} className="py-2.5 px-6 transition-all duration-500 ease-in-out block sm:inline-block text-center align-middle justify-center rounded-md tracking-widest lowercase shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
            {this.props.children}
            </button>
        );
    }
}

export default Button;