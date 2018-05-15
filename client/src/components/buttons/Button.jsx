import * as React from 'react';

export default class Button extends React.Component {
    render () {
        const { disabled, selected, className, handleClick, text } = this.props;
        return (
            <div>
                <button
                    disabled={disabled}
                    onClick={handleClick}
                    className={className}>
                    {text}
                </button>
            </div>
        );
    }
}