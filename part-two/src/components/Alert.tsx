import React from 'react';

class Alert extends React.Component {
    render() {
        return (
            <div className="p-4 bg-blue-200 text-blue-700 rounded-md border border-blue-700">
                {this.props.children}
            </div>
        );
    }
}

export default Alert;