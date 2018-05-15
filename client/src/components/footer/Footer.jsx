import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render () {
        return (
            <footer className="footer container">
                <p>{this.props.text}</p>
            </footer>
        )
    }
}
