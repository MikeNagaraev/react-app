import React from "react";

export default class ResultPanel extends React.Component {
    render() {
        const { count } = this.props;
        return (
            <div className="resultPanel">
                <div className="resultPanel-count">
                    {count} movies found
                </div>
                <div className="resultPanel-sort">
                    <span>Sort by</span>
                    <span className="resultPanel-sort-option">release date</span>
                    <span className="resultPanel-sort-option resultPanel-sort-option--active">rating</span>
                </div>
            </div>
        )
    }
}
