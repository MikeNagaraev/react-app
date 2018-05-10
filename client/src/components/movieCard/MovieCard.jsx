import React from "react";

export default class MovieCard extends React.Component {
    render() {
        return (
            <div className="movieCard">
                <div className="movieCard-img">
                    <img src={this.props.picture} alt=""/>
                </div>
                <div className="movieCard-description">
                    <div className="movieCard-description-line">
                        <span className="movieCard-title">{this.props.title}</span>
                        <span className="movieCard-year">{this.props.year}</span>
                    </div>
                    <div className="movieCard-description-line">
                        <span className="movieCard-genre">{this.props.genre}</span>
                    </div>
                </div>
            </div>
        )
    }
}