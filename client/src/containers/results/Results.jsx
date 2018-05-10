import React from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import moviesData from "./movies.json";

export default class Results extends React.Component {
    constructor() {
        super();
        this.state = {
            "movies": moviesData.data
        };
    }

    render() {
        const movieCards = [];
        this.state.movies.map((card, i) => {
            movieCards.push(<MovieCard title={card.title} year={card.year} genre={card.genre} picture={card.picture} key={i} />);
        });
        return (
            <div className="resultsContainer">
                {
                    movieCards
                }
            </div>
        )
    }
} 