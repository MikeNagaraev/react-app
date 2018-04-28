import React from "react";

export default class MovieCard extends React.Component {
    render() {
        return (
            <div className="movieCard">
                <div className="movieCard-img">
                    <img src="/assets/images/pulp.jpg" alt=""/>
                </div>
                <div className="movieCard-description">
                    <div className="movieCard-description-line">
                        <span className="movieCard-title">Pulp Fiction</span>
                        <span className="movieCard-year">2009</span>
                    </div>
                    <div className="movieCard-description-line">
                        <span className="movieCard-genre">Action & Horrible</span>
                    </div>
                </div>
            </div>
        )
    }
}