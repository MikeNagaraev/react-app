import React from "react";
import SearchMovieForm from '../../forms/SearchMovieForm';

const logo = React.createElement("h1", { className: "logo" }, "netflixroulette"); // create Element

export default class HomeHeader extends React.Component {
    render() {
        return (
            <div className="header">
                {logo}
                <SearchMovieForm />
            </div>
        )
    }
}