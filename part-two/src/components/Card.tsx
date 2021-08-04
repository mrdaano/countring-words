import React from 'react';

type CardProps = {
    title: string,
    children?: React.ReactNode,
}

class Card extends React.Component<CardProps, {}> {
    render() {
        return (
            <div className="bg-white rounded-md shadow-md">
                <div className="text-gray-700 text-xl p-2 border-b-2 border-gray-200">
                    {this.props.title}
                </div>
                <div className="p-2">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;