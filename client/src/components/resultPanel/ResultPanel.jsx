import React from "react";

export default class ResultPanel extends React.Component {
    render () {
        return (
            <div className="resultPanel">
                <div className="resultPanel-count">
                    7 movies found
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