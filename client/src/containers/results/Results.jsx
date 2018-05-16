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
        this.state.movies.map((element, i) => {
            movieCards.push(<MovieCard key={i} />);
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